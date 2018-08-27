"use strict";
import { LoginResponse } from "./api";
import { CSUser } from "./api";
import { RepositoryCollection } from "./models/repositories";
import {
	ChannelAndDirectStreamCollection,
	ChannelStreamCollection,
	DirectStreamCollection
} from "./models/streams";
import { Team, TeamCollection } from "./models/teams";
import { User, UserCollection } from "./models/users";
import { CodeStreamSession } from "./session";
import { UnreadCounter } from "./unreads";

export class SessionState {
	private readonly _unreads: UnreadCounter;

	constructor(
		private readonly _session: CodeStreamSession,
		public readonly teamId: string,
		private readonly _data: LoginResponse
	) {
		this._unreads = new UnreadCounter(this._session, this._data.user.id);
	}

	get pubnubKey() {
		return this._data.pubnubKey;
	}

	get token(): string {
		return this._data.accessToken;
	}

	get userId() {
		return this._data.user.id;
	}

	private _channels: ChannelStreamCollection | undefined;
	get channels() {
		if (this._channels === undefined) {
			this._channels = new ChannelStreamCollection(this._session, this.teamId);
		}
		return this._channels;
	}

	private _channelsAndDMs: ChannelAndDirectStreamCollection | undefined;
	get channelsAndDMs() {
		if (this._channelsAndDMs === undefined) {
			this._channelsAndDMs = new ChannelAndDirectStreamCollection(this._session, this.teamId);
		}
		return this._channelsAndDMs;
	}

	private _directMessages: DirectStreamCollection | undefined;
	get directMessages() {
		if (this._directMessages === undefined) {
			this._directMessages = new DirectStreamCollection(this._session, this.teamId);
		}
		return this._directMessages;
	}

	private _repos: RepositoryCollection | undefined;
	get repos() {
		if (this._repos === undefined) {
			this._repos = new RepositoryCollection(this._session, this.teamId);
		}
		return this._repos;
	}

	private _team: Team | undefined;
	get team() {
		if (this._team === undefined) {
			this._team = new Team(this._session, this._data.teams.find(t => t.id === this.teamId)!);
		}
		return this._team!;
	}

	private _teams: TeamCollection | undefined;
	get teams() {
		if (this._teams === undefined) {
			this._teams = new TeamCollection(this._session, this._data.teams.map(t => t.id));
		}
		return this._teams;
	}

	private _user: User | undefined;
	get user() {
		if (this._user === undefined) {
			this._user = new User(this._session, this._data.user);
		}
		return this._user;
	}

	private _users: UserCollection | undefined;
	get users() {
		if (this._users === undefined) {
			this._users = new UserCollection(this._session, this.teamId);
		}
		return this._users;
	}

	get unreads() {
		return this._unreads;
	}

	hasSingleTeam(): Promise<boolean> {
		return Promise.resolve(this._data!.teams.length === 1);
	}

	async updateTeams() {
		this._data.teams = await this.teams.entities();
		this._team = undefined;
	}

	updateUser(user: CSUser) {
		this._data.user = user;
		this._user = undefined;
	}
}
