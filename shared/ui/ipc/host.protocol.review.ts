import { RequestType } from "vscode-jsonrpc";
import { IpcRoutes } from "./webview.protocol";

export interface ReviewShowDiffRequest {
	reviewId: string;
	repoId: string;
	path: string;
}

export interface ReviewShowDiffResponse {}

export const ReviewShowDiffRequestType = new RequestType<
	ReviewShowDiffRequest,
	ReviewShowDiffResponse,
	void,
	void
>(`${IpcRoutes.Host}/review/showDiff`);
