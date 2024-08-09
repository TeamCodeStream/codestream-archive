import { useState, useCallback } from "react";
import { HostApi } from "../../webview-api";
import { UserSearchRequestType } from "@codestream/protocols/agent";

interface UserSearchResults {
	id: string;
	email: string;
	fullName?: string;
	display?: string;
	headshot?: any;
}

export const useUserSearch = () => {
	const [userSearchResults, setUserSearchResults] = useState<UserSearchResults[]>([]);

	const fetchUsers = useCallback(async (query: string, mappingStyle: string = "default") => {
		let _query = query.toLowerCase();

		if (_query.length > 2) {
			try {
				const response = await HostApi.instance.send(UserSearchRequestType, { query: _query });

				const users = response.users.map(user => {
					const userName = user?.name || user?.email || "";
					const userId = user.id?.toString() || "";
					const email = user?.email || "";

					if (mappingStyle === "default") {
						return {
							fullName: userName,
							id: userId,
							email,
						};
					} else {
						const display = userName;
						const id = `<collab-mention data-value="@${userName}" data-type="NR_USER" data-mentionable-item-id="${userId}">${userName}</collab-mention>`;
						return {
							display,
							id,
							email,
							headshot: { email, name: userName },
						};
					}
				});
				setUserSearchResults(users);
			} catch (error) {
				setUserSearchResults([]);
			}
		} else {
			setUserSearchResults([]);
		}
	}, []);

	return {
		userSearchResults,
		fetchUsers,
	};
};
