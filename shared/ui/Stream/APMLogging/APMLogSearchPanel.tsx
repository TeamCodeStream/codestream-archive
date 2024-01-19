import React, { useState } from "react";
import Icon from "../Icon";
import { PanelHeader } from "../../src/components/PanelHeader";
import styled from "styled-components";
import { useDidMount } from "../../utilities/hooks";
import Button from "../Button";
import Select from "react-select";
import Timestamp from "../Timestamp";
import { HostApi } from "../../webview-api";
import { Link } from "../Link";
import {
	GetLogFieldDefinitionsRequestType,
	GetLogsRequestType,
	GetSurroundingLogsRequestType,
	LogFieldDefinition,
	LogResult,
	isNRErrorResponse,
} from "@codestream/protocols/agent";
import { SaveFileRequestType, ShellPromptFolderRequestType } from "@codestream/protocols/webview";

interface SelectedOption {
	value: string;
	label: string;
}

const LogSeverity = styled.span`
	border-radius: 1px;
	box-sizing: border-box;
	display: flex;
	height: 8px;
	position: relative;
	width: 8px;
	overflow: hidden;
	margin: 3.5px auto;
`;

const SearchBar = styled.div`
	display: flex;
	flex-direction: row;
	button {
		z-index: 2;
	}
	.search-input {
		position: relative;
		flex-grow: 10;
		width: 100%;
		input.control {
			// make space for the search icon
			padding-left: 32px !important;
			// the bookmark icon is narrower so requires less space
			padding-right: 32px !important;
			height: 100%;
			border: 1px solid var(--base-border-color);
			border-left: none;
			margin-left: -1px;
		}
		.icon.search {
			position: absolute;
			left: 8px;
			top: 6px;
			opacity: 0.5;
		}
		.icon.clear {
			position: absolute;
			right: 18px;
			top: 6px;
			opacity: 0.5;
		}
		.save {
			position: absolute;
			right: 6px;
			top: 6px;
			opacity: 0.5;
			&:hover {
				opacity: 1;
			}
		}
		.clear {
			position: absolute;
			right: 28px;
			top: 6px;
			opacity: 0.5;
			&:hover {
				opacity: 1;
			}
		}
	}
`;

const logSeverityToColor = {
	fatal: "#df2d24",
	error: "#df2d24",
	warn: "#ffd23d",
	info: "#0c74df",
	trace: "",
	debug: "",
};

const columnSpanMapping = {
	level: 2,
};

export const APMLogSearchPanel = (props: { entityGuid: string; suppliedQuery?: string }) => {
	const [fieldDefinitions, setFieldDefinitions] = useState<LogFieldDefinition[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const [query, setQuery] = useState<string>("");
	const [hasSearched, setHasSearched] = useState<boolean>(false);

	const [selectedSinceOption, setSelectedSinceOption] = useState<SelectedOption | undefined>(
		undefined
	);
	const [selectSinceOptions, setSelectSinceOptions] = useState<SelectedOption[]>([]);
	const [maximized, setMaximized] = useState<boolean>(false);
	const [results, setResults] = useState<LogResult[]>([]);
	const [severityAttribute, setSeverityAttribute] = useState<string>();
	const [messageAttribute, setMessageAttribute] = useState<string>();
	const [displayColumns, setDisplayColumns] = useState<string[]>([]);

	const [beforeLogs, setBeforeLogs] = useState<LogResult[]>([]);
	const [afterLogs, setAfterLogs] = useState<LogResult[]>([]);
	const [surroundingLogsLoading, setSurroundingLogsLoading] = useState<boolean>();

	const [totalItems, setTotalItems] = useState<number>(0);
	const [logError, setLogError] = useState<string | undefined>("");
	const [isUIDisabled, setIsUIDisabled] = useState<boolean>(false);

	useDidMount(() => {
		const defaultOption: SelectedOption = {
			value: "30 MINUTES AGO",
			label: "30 Minutes Ago",
		};

		// TODO: Sliding time window selector?
		const sinceOptions: SelectedOption[] = [
			defaultOption,
			{ value: "60 MINUTES AGO", label: "60 Minutes Ago" },
			{ value: "3 HOURS AGO", label: "3 Hours Ago" },
			{ value: "8 HOURS AGO", label: "8 Hours Ago" },
			{ value: "1 DAY AGO", label: "1 Day Ago" },
			{ value: "3 DAYS AGO", label: "3 Days Ago" },
			{ value: "7 DAYS AGO", label: "7 Days Ago" },
		];

		setSelectSinceOptions(sinceOptions);
		setSelectedSinceOption(defaultOption);

		if (!props.entityGuid) {
			handleError(
				"We were unable to locate the Entity GUID for the selected service; please contact support."
			);
			setIsUIDisabled(true);
			return;
		}

		fetchFieldDefinitions(props.entityGuid);

		// possible there is no searchTerm
		if (props.suppliedQuery) {
			setQuery(props.suppliedQuery);
		}
		fetchLogs(props.entityGuid, props.suppliedQuery);
	});

	const handleError = (message: string) => {
		setLogError(message);
		console.error(message);
	};

	const fetchFieldDefinitions = async (entityGuid: string) => {
		try {
			const response = await HostApi.instance.send(GetLogFieldDefinitionsRequestType, {
				entityGuid,
			});

			if (!response) {
				handleError(
					"An unexpected error occurred while fetching log field information; please contact support."
				);
				return;
			}

			if (isNRErrorResponse(response?.error)) {
				handleError(response.error?.error?.message ?? response.error?.error?.type);
				return;
			}

			if (response.logDefinitions) {
				setFieldDefinitions(response.logDefinitions);
			}
		} catch (ex) {
			handleError(ex);
		}
	};

	const checkKeyPress = (e: { keyCode: Number }) => {
		const { keyCode } = e;
		if (keyCode === 13) {
			fetchLogs(props.entityGuid!);
		}
	};

	/**
	 * Given properties of a specific log entry, querys for logs that occurred BEFORE it
	 * and logs that occured AFTER it
	 */
	const fetchSurroundingLogs = async (entityGuid: string, messageId: string, since: number) => {
		try {
			setSurroundingLogsLoading(true);
			setBeforeLogs([]);
			setAfterLogs([]);

			const response = await HostApi.instance.send(GetSurroundingLogsRequestType, {
				entityGuid,
				messageId,
				since,
			});

			if (!response) {
				handleError(
					"An unexpected error occurred while fetching surrounding log information; please contact support."
				);
				return;
			}

			if (isNRErrorResponse(response?.error)) {
				handleError(response.error?.error?.message ?? response.error?.error?.type);
				return;
			}

			if (response.beforeLogs && response.beforeLogs.length > 0) {
				setResults(response.beforeLogs);
			}

			if (response.afterLogs && response.afterLogs.length > 0) {
				setResults(response.afterLogs);
			}
		} catch (ex) {
			handleError(ex);
		} finally {
			setSurroundingLogsLoading(false);
		}
	};

	const fetchLogs = async (entityGuid: string, suppliedQuery?: string) => {
		try {
			setLogError(undefined);
			setHasSearched(true);
			setIsLoading(true);
			setResults([]);
			setSeverityAttribute(undefined);
			setMessageAttribute(undefined);
			setTotalItems(0);

			const filterText = suppliedQuery || query;

			const response = await HostApi.instance.send(GetLogsRequestType, {
				entityGuid,
				filterText,
				// TODO. MAX kills ui performance here
				limit: 100,
				since: selectedSinceOption?.value || "30 MINUTES AGO",
				order: {
					field: "timestamp",
					direction: "DESC",
				},
			});

			if (!response) {
				handleError(
					"An unexpected error occurred while fetching log information; please contact support."
				);
				return;
			}

			if (isNRErrorResponse(response?.error)) {
				handleError(response.error?.error?.message ?? response.error?.error?.type);
				return;
			}

			if (response.logs && response.logs.length > 0) {
				setResults(response.logs);
				setTotalItems(response.logs.length);
				setMessageAttribute(response.messageAttribute!);
				setSeverityAttribute(response.severityAttribute!);

				// TODO: Instead of this, utilize a preference with a list of columns
				setDisplayColumns(["timestamp", response.severityAttribute!, response.messageAttribute!]);
			}

			trackTelemetry(entityGuid, response.accountId, (response?.logs?.length ?? 0) > 0);
		} catch (ex) {
			handleError(ex);
		} finally {
			setIsLoading(false);
		}
	};

	const trackTelemetry = (entityGuid: string, accountId: number, resultsReturned: boolean) => {
		HostApi.instance.track("codestream/logs searched", {
			entity_guid: `${entityGuid}`,
			account_id: `${accountId}`,
			meta_data: `results_returned: ${resultsReturned}`,
		});
	};

	const renderHeaderRow = () => {
		return (
			<tr>
				{
					// TODO: Instead of using the full list of field definitions for display,
					//       Use a preference that includes which columns to show.fieldDefinitions &&
					displayColumns.length > 0 &&
						displayColumns.map(fd => {
							return (
								<th
									colSpan={columnSpanMapping[fd] || 1}
									style={{
										border: "1px solid darkgray",
										padding: "3px 8px 3px 8px",
									}}
								>
									{fd}
								</th>
							);
						})
				}
			</tr>
		);
	};

	const formatRowValue = (fieldName: string, fieldValue: string) => {
		if (fieldName === "timestamp") {
			return (
				<td>
					<Timestamp time={fieldValue} expandedTime={true}></Timestamp>
				</td>
			);
		}

		if (fieldName === severityAttribute) {
			return (
				<>
					<td>
						<LogSeverity style={{ backgroundColor: logSeverityToColor[fieldValue] }} />
					</td>
					<td>{fieldValue}</td>
				</>
			);
		}

		return <td>{fieldValue}</td>;
	};

	const expandDetailsView = (messageId: string) => {
		const details = results.find(lr => {
			return lr["messageId"] === messageId;
		});

		// TODO: Design drop-down / split view to display detail data inline
	};

	const LogRow = (props: { logResult: LogResult }) => {
		return (
			<tr
				style={{
					color: "lightgray",
					borderBottom: "1px solid lightgray",
				}}
				onClick={e => {
					// TODO: Move to icon in right of row with hover indicators
					//       Outside of scrollable region, though?
					e.preventDefault();
					e.stopPropagation();

					expandDetailsView(props.logResult["messageId"]);
				}}
			>
				{props.logResult &&
					displayColumns &&
					displayColumns.map(fd => {
						return formatRowValue(fd, props.logResult[fd]);
					})}
			</tr>
		);
	};

	return (
		<>
			<PanelHeader title="Logs">
				<SearchBar className="search-bar">
					<div className="search-input" style={{ width: "70%", paddingRight: "10px" }}>
						<Icon name="search" className="search" />
						<input
							name="q"
							value={query}
							className="input-text control"
							type="text"
							onChange={e => {
								setQuery(e.target.value);
							}}
							onKeyDown={checkKeyPress}
							placeholder="Query logs in the selected entity"
							autoFocus
							disabled={isUIDisabled}
						/>
						<Icon name="x" className="clear" onClick={e => setQuery("")} />
					</div>
					<div style={{ width: "25%", paddingRight: "10px" }}>
						<Select
							id="input-since"
							name="since"
							classNamePrefix="react-select"
							value={selectedSinceOption}
							placeholder="Since"
							options={selectSinceOptions}
							onChange={value => setSelectedSinceOption(value)}
							isDisabled={isUIDisabled}
						/>
					</div>
					<Button
						style={{ paddingLeft: "8px", paddingRight: "8px" }}
						onClick={() => fetchLogs(props.entityGuid)}
						loading={isLoading}
						disabled={isUIDisabled}
					>
						Query Logs
					</Button>
				</SearchBar>
			</PanelHeader>
			<div
				style={{
					padding: "0px 20px 0px 20px",
					marginBottom: "20px",
				}}
			>
				{!isLoading && totalItems > 0 && (
					<div>
						<span style={{ fontSize: "14px", fontWeight: "bold", paddingBottom: "10px" }}>
							{totalItems.toLocaleString()} Logs
						</span>{" "}
						<a
							style={{ display: "none", float: "right", cursor: "pointer" }}
							href="#"
							onClick={e => {
								e.preventDefault();
								HostApi.instance
									.send(ShellPromptFolderRequestType, { message: "Choose a location" })
									.then(_ => {
										if (_.path) {
											HostApi.instance.send(SaveFileRequestType, {
												path: _.path,
												data: results,
											});
										} else {
											setLogError("Unable to download");
										}
									});
							}}
						>
							<Icon name="download" title="Download as JSON" />
						</a>
					</div>
				)}

				<div>
					{/* {isLoading && (
							TODO: Skeleton loader? Couldn't get it to work when I tried
						)} */}

					{!logError && !isLoading && results && totalItems > 0 && fieldDefinitions && (
						// TODO: Using a table is pretty terrible here...
						<table style={{ width: "100%", borderCollapse: "collapse" }}>
							<thead>{renderHeaderRow()}</thead>
							<tbody>
								{results.map(r => (
									<LogRow logResult={r} />
								))}
							</tbody>
						</table>
					)}

					{!logError && !totalItems && !isLoading && !hasSearched && (
						<div className="no-matches" style={{ margin: "0", fontStyle: "unset" }}>
							<span>Enter search criteria above, or just click Query to see recent logs.</span>
						</div>
					)}

					{!logError && !totalItems && !isLoading && hasSearched && (
						<div className="no-matches" style={{ margin: "0", fontStyle: "unset" }}>
							<h4>No logs found during this time range</h4>
							<span>
								Try adjusting your time range or{" "}
								<Link href="https://docs.newrelic.com/docs/logs/logs-context/annotate-logs-logs-context-using-apm-agent-apis/">
									set up log management
								</Link>
							</span>
						</div>
					)}

					{logError && (
						<div className="no-matches" style={{ margin: "0", fontStyle: "unset" }}>
							<h4>Uh oh, we've encounted an error!</h4>
							<span>{logError}</span>
						</div>
					)}
				</div>
			</div>
		</>
	);
};