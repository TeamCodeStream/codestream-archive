import {
	FetchThirdPartyBuildsRequestType,
	ReposScm,
	ThirdPartyBuild,
	ThirdPartyBuildStatus,
} from "@codestream/protocols/agent";
import { CodeStreamState } from "@codestream/webview/store";
import { getUserProviderInfoFromState } from "@codestream/webview/store/providers/utils";
import { HostApi } from "@codestream/webview/webview-api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { WebviewPanels } from "../../ipc/webview.protocol.common";
import { PaneBody, PaneHeader, PaneState } from "../../src/components/Pane";
import Icon from "../Icon";
import { CircleCIBuilds } from "./CircleCIBuilds";
import { ConnectCICD } from "./ConnectCICD";

interface Props {
	openRepos: ReposScm[];
	paneState: PaneState;
}

interface Projects {
	[providerId: string]: {
		[projectId: string]: ThirdPartyBuild[];
	};
}

const INACTIVE_REFRESH_INTERVAL = 5 * 60 * 1000; // refresh data every 5 minutes by default
const ACTIVE_REFRESH_INTERVAL = 30 * 1000; // when a build is running/pending, refresh data every 30 seconds

export const CICD = (props: Props) => {
	const derivedState = useSelector((state: CodeStreamState) => {
		const { editorContext, providers } = state;
		const providerInfo: { [key: string]: object | undefined } = {};
		for (const provider of ["circleci*com"]) {
			const name = providers[provider]?.name;
			if (name) {
				const p = getUserProviderInfoFromState(name, state);
				if (p) providerInfo[name] = p;
			}
		}

		const currentRepoId = editorContext.scmInfo?.scm?.repoId;
		const currentRepo = props.openRepos.find(_ => _.id === currentRepoId);

		return {
			bootstrapped: Object.keys(providerInfo).length > 0,
			providerInfo,
			providers,
			currentRepo,
		};
	});
	const [loading, setLoading] = useState(true);
	const [refresh, setRefresh] = useState(true);
	const [refreshTimeout, setRefreshTimeout] = useState<any>();
	const [projects, setProjects] = useState<Projects>({});

	const scheduleRefresh = (active: boolean) => {
		const timeout = active ? ACTIVE_REFRESH_INTERVAL : INACTIVE_REFRESH_INTERVAL;
		const id = setTimeout(() => setRefresh(true), timeout);
		setRefreshTimeout(id);
	};

	const fetchProjects = async () => {
		if (refreshTimeout) clearTimeout(refreshTimeout);
		setLoading(true);
		if (!derivedState.currentRepo) {
			scheduleRefresh(false);
			setLoading(false);
			return;
		}
		const remotes = derivedState.currentRepo.remotes || [];
		const projects: Projects = {};
		for (const [providerId, provider] of Object.entries(derivedState.providers)) {
			if (!Object.keys(derivedState.providerInfo).includes(provider.name)) continue;
			for (const remote of remotes) {
				try {
					const result = await HostApi.instance.send(FetchThirdPartyBuildsRequestType, {
						providerId,
						remote,
						branch: derivedState.currentRepo.currentBranch || "",
					});
					if (result.projects) {
						projects[provider.name] = result.projects;
						break;
					}
				} catch (error) {
					console.error(error);
				}
			}
		}

		// if there are any builds in progress, schedule next refresh sooner
		const buildsInProgress =
			Object.keys(projects)
				.reduce(
					(a: ThirdPartyBuild[], x: string) =>
						a.concat(
							Object.keys(projects[x]).reduce(
								(b: ThirdPartyBuild[], y) => b.concat(projects[x][y]),
								[]
							)
						),
					[]
				)
				.filter(
					x =>
						x.status === ThirdPartyBuildStatus.Running || x.status === ThirdPartyBuildStatus.Waiting
				).length > 0;
		scheduleRefresh(buildsInProgress);
		setRefresh(false);
		setProjects(projects);
		setLoading(false);
	};

	useEffect(() => {
		if (!refresh || props.paneState === PaneState.Collapsed) return;
		fetchProjects().catch(error => {
			console.error(error);
		});
	}, [
		derivedState.currentRepo,
		derivedState.providers,
		derivedState.providerInfo,
		refresh,
		props.paneState,
	]);

	return (
		<>
			<PaneHeader
				title="CI/CD"
				id={WebviewPanels.CICD}
				isLoading={loading}
				subtitle={
					derivedState.currentRepo && (
						<>
							<span>
								<Icon
									name="repo"
									className="inline-label"
									style={{ transform: "scale(0.7)", display: "inline-block" }}
								/>
								{derivedState.currentRepo.folder.name}
							</span>
							{derivedState.currentRepo.currentBranch && (
								<span>
									<Icon
										name="git-branch"
										className="inline-label"
										style={{ transform: "scale(0.7)", display: "inline-block" }}
									/>
									{derivedState.currentRepo.currentBranch}
								</span>
							)}
						</>
					)
				}
			>
				{derivedState.bootstrapped && (
					<Icon
						name="refresh"
						title="Refresh"
						placement="bottom"
						delay={1}
						onClick={e => {
							fetchProjects();
						}}
					/>
				)}
			</PaneHeader>
			{props.paneState != PaneState.Collapsed && (
				<PaneBody key="ci-cd">
					{!derivedState.bootstrapped && <ConnectCICD />}
					{derivedState.bootstrapped && projects.circleci && (
						<CircleCIBuilds projects={projects.circleci} />
					)}
				</PaneBody>
			)}
		</>
	);
};