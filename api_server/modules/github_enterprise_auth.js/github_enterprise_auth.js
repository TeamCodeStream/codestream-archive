// provide service to handle GitHub Enterprise credential authorization

'use strict';

const OAuthModule = require(process.env.CS_API_TOP + '/lib/oauth/oauth_module.js');

const OAUTH_CONFIG = {
	provider: 'github_enterprise',
	host: 'github.com/enterprise',
	authPath: 'login/oauth/authorize',
	tokenPath: 'login/oauth/access_token',
	exchangeFormat: 'query',
	scopes: 'repo,user',
	noGrantType: true,
	hasIssues: true,
	forEnterprise: true
};

class GithubEnterpriseAuth extends OAuthModule {

	constructor (config) {
		super(config);
		this.oauthConfig = OAUTH_CONFIG;
	}
}

module.exports = GithubEnterpriseAuth;
