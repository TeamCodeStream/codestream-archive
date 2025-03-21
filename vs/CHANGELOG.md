# Change Log

## [15.14.0] - 2024-8-15

### Changed

- You can now mention anyone in your New Relic organization when commenting on an error, and you can also assign the error to anyone

### Fixed

- Fixes an issue with the Assigned to Me section only showing errors occurring within the last 30 minutes
- Explore this Data button when hovering over a Golden Metric now works for non-APM services
- Fixes an issue where all facets weren't being displayed when there were multiple facets in a query

## [15.13.1] - 2024-8-7

### Fixed

- Fix migrated AI posts not showing up
- Fix issue with getting logged out after closing IDE

## [15.13.0] - 2024-8-1

### Changed

- Update extensions for new API server

## [15.12.0] - 2024-7-29

### Changed

- Error discussions are now tied to New Relic's collaboration tools, with discussions accessible from both CodeStream and New Relic on the web

### Fixed

- Fixes an issue with FACET value duplicated in query results in table visualization
- Fixes an issue with the submission of queries via the Enter key changing the account selection
- Fixes an issue with the display of charts in code-level metrics details view in JetBrains IDEs

## [15.11.0] - 2024-7-8

### Added

- Adds support for double quotes in NRQL queries

### Fixed

- Fixes an issue with the Enter key not submitting queries when no repositories are open

## [15.10.0] - 2024-6-20

### Added

- Adds service search, allowing you to see observability data for any service, even when you don't have the repository open in your IDE

## [15.9.0] - 2024-6-6

### Added

- Adds support for stacked bar charts for query results

### Changed

- Queries can now be submitted via the Enter key, with Shift+Enter creating a newline
- Details for transaction anomalies are now displayed in a new webview in the editor group, with relevant errors, critical path analysis or database queries included as appropriate

### Fixed

- Fixes an issue rendering query results as pie charts 
- Fixes an issue with labels missing from bar charts
- Fixes an issue with slashes in queries not being properly escaped
- Fixes an issue where adding TIMESERIES to a query generated a table by default instead of a line chart

## [15.8.1] - 2024-5-9

### Fixed

- Fixes on issue when open-in-IDE from Logs attempts to load logs prior to the user loggging in

## [15.8.0] - 2024-4-30

### Changed

- The codemarks feature (comments and issues) has been removed from the service
- A new Summary section has been added to the tree view, with issues, golden metrics, SLOs and related services consolidated underneath it
- The recent queries dropdown in the query builder has been expanded for easier viewing
- The display of query results is now limited to a single line in height, with a new copy button added and the complete cell value displayed in a tooltip on hover

### Fixed

- Fixes issues with language detection in the instrumentation wizard

## [15.7.0] - 2024-4-18

### Changed

- Improved UX for service and account pickers

### Fixed

- Fixes an issue where NRAI would suggest a code fix when one wasn't needed
- Fixes an issue where the query builder wouldn't wrap text 
- Fixes an issue where a log search submitted via Enter key would get re-submitted

## [15.6.0] - 2024-4-4

### Added

- Adds repository as the top-level node in the CodeStream tree view, allowing you to see observability for services related to any repository you have open in your IDE
- Add the ability to search logs for any entity, including infra logs
- Adds support for partitions when searching logs
- Adds a link to related logs when viewing error details

### Fixed

- Fixes an issue with the display of markdown when viewing vulnerability details
- Fixes an issue where the state of the severity filter for vulnerabilities was not being persisted

## [15.5.0] - 2024-3-14

### Added

- Adds information about the slowest operations when viewing the details of a poorly performing transaction

### Changed

- Removes support for Visual Studio 2019

## [15.4.0] - 2024-3-5

### Added

- Ability to show surrounding logs when viewing log search results
- Extension support for "Open in IDE" from a span in distributed tracing on New Relic

### Changed

- Updated UX for when a user's auth token expires and can't be refreshed
- When associating a repo with a service on New Relic, services already associated with the repo are no longer listed
- All sections of the CodeStream pane are now collapsed by default for new users

### Fixed

- Fixes an issue where creating an issue on Shortcut would result in duplicate issues
- Addresses [#1869](https://github.com/TeamCodeStream/codestream/issues/1869) &mdash; OTel service not recognized

## [15.3.0] - 2024-2-14

### Added

- Adds a "What's New" page under username > Help that covers recently added features

## [15.2.0] - 2024-2-7

### Changed

- A new "Apply Fix" button allows you to easily accept a suggested code fix when NRAI analyzes an error for you
- Code fixes suggested by NRAI are now presented in a diff view
- In-editor code-level metrics are now represented by a New Relic icon in the gutter, with a red icon indicating anomalous performance

## [15.1.1] - 2024-1-25

### Added

- Fixes an issue with an infinite loop on non-refresh token errors

## [15.1.0] - 2024-1-23

### Added

- Adds support for errors from Browser services
- Adds change in error rate and response time in Golden Metrics section from three hours before your last deployment to three hours after
- Adds display of Golden Metrics, SLOs and Related Services for OTel services
- Adds display of Golden Metrics for Lambda functions

### Changed

- Anomalies in the Code-Level Metrics section are now displayed in a hierarchy of transactions and metrics
- When viewing anomaly details, the chart appropriate to the type of anomaly is now displayed first

### Fixed

- Addresses [#1682](https://github.com/TeamCodeStream/codestream/issues/1682) &mdash; Export data has bad header
- Addresses [#1683](https://github.com/TeamCodeStream/codestream/issues/1683) &mdash; Export data corrupt when comment has a comma

## [15.0.1] - 2023-12-15

### Changed

- Generative AI assistant is now named New Relic AI

## [15.0.0] - 2023-12-13

### Changed

- Identity is now unified with New Relic, and you will sign in to CodeStream using your New Relic credentials
- Adding and removing organization members is now handled via New Relic on the web
- Changing your email address or full name is now handled via New Relic on the web
- The expanded/collapsed state of each top-level section of the CodeStream pane is preserved as you switch between services
- Open incidents for a given service have been replaced by open issues, and are now displayed above the Golden Metrics
- Anomalous methods in the Code-Level Metrics section are no longer split up between average duration and error rate anomalies
- The "Switch Organization" menu has been renamed to "Switch Users"

### Fixed

- Fixes an issue where a newly opened repo wouldn't be recognized by the CodeStream pane without a reload

## [14.30.1] - 2023-09-29

### Fixed

- Fixes an issue that prevented the CLM panel from showing

## [14.30.0] - 2023-09-27

### Added

- Adds anomaly detection for code-level metrics for PHP and Go
- Adds checks to the Code-Level Metrics section to ensure proper version of the APM agent and the enablement of distributed tracing

### Changed

- Update UI to replace OBSERVABILITY heading with repo name
- Update CodeStream logo to use New Relic emblem

### Fixed

- Fixes an issue where errors were duplicated in the Errors section when the service was associated with multiple repos

## [14.29.1] - 2023-09-12

### Fixed

- Fixes an issue loading CodeStream in Visual Studio 2019 due to invalid dependencies

## [14.29.0] - 2023-09-12

### Changed

- Shifts CodeStream's product focus to exclusively observability, and removes the Pull Request and Feedback Request features
- The ability to add code comments and issues remains, but the Codemarks and Issues sections of the CodeStream pane have been removed
- CodeStream now determines your repository context even when you don't have a file open in the editor

## [14.28.0] - 2023-08-24

### Added

- Adds anomaly detection for code-level metrics for Node

### Changed

- Changes the authentication process with MS Teams to generate a sign-in code from the CodeStream Integrations page

## [14.27.0] - 2023-08-17

### Added

- Adds New Relic's generative AI assistant, Grok, to help analyze and fix errors (limited preview)

## [14.26.0] - 2023-08-08

### Changed

- Admins can now delete other users' codemarks
- Optimizes queries for metric data in the calculation of anomalies in code-level metrics

### Fixed

- Fixes an issue where the selected line in an error's stack trace wasn't legible

## [14.25.0] - 2023-08-03

### Added

- Adds a Code-Level Metrics section that highlights poorly performing methods in the code based on anomalous increases in error rate or average duration. Currently available for Java, .NET, Ruby and Python.

### Changed

- Updated the error grouping paradigm in the Errors section to align with the New Relic Errors Inbox

### Fixed

- Fixes an issue that generated an error when creating a codemark
- Fixes an issue with stack traces lines in an error not taking you to the correct file and line number
- Fixes an issue that would result in you being prompted to select a repo when opening an error
- Fixes an issue that would generate an error if you submitted a Bitbucket PR against a branch that already has an open PR
- Fixes an issue preventing you from being able to open the local files from the changeset when opening a PR
- Fixes an issue where adding a comment to a Bitbucket PR via the "Close and Comment" button wouldn't appear without reloading the PR details

## [14.24.0] - 2023-07-19

### Fixed

- Addresses [#1511](https://github.com/TeamCodeStream/codestream/issues/1511) &mdash; Can't open PR details in Bitbucket
- Fixes an issue where you would get signed out of CodeStream when switching repos in your IDE
- Fixes an issue where CodeStream would incorrectly allow you to remove a review with status from a Bitbucket PR
- Fixes an issue where an expanded Bitbucket PR couldn't be collapsed

## [14.23.0] - 2023-06-16

### Added

- Added the abillity to select a time range for viewing all errors of a service instead of showing the 5 most recent

### Changed

- Removed custom queries for Bitbucket
- Altered CodeStream loading UI to show a skeleton animation instead of loading text
- Altered styling on buttons across CodeStream
- Renamed the option to "Delete All" to "Delete All Replies" for comment threads in errors

### Fixed

- Fixed error with Slack integration that prevented deletion of posts from CodeStream from synchronizing with Slack channels and direct messages
- Fixed a bug that showed the repo selection prompt after opening an error from the observability section
- Fixed a bug with Bitbucket pull requests all being expanded if there are any with the same numerical name

## [14.22.0] - 2023-6-01

### Changed

- Altered Bitbucket Add Reviewers dropdown to account for no reviewers available
- Altered Bitbucket Icons for Pull Request Approval and Change Requests

### Fixed

- Fixed Bitbucket api request timeout issue
- Fixed Bitbucket issue that allowed already assigned reviewer to be selected again
- Fixed Bitbucket issue that allowed assigning reviewers to an already declined pull request
- Fixed Bitbucket UI issue that displayed duplicate reviewers until refreshing
- Fixed Bitbucket issue that caused add/remove reviewers buttons to be active without reviewers selected

## [14.21.0] - 2023-5-25

### Fixed

- Fixed Bitbucket issue for PR Details commit list not loading

## [14.20.0] - 2023-5-18

### Added

- Adds support for reviewing Bitbucket pull requests
- Adds "All other methods" node to Code-Level Metrics observability section
- Adds abillity for admins to mass delete all posts and individual posts on an error
- Adds list of related errors to the code-level metrics details view

### Fixed

- Fixes for code-level-metrics charts not loading
- Addresses [#1317](https://github.com/TeamCodeStream/codestream/issues/1317) &mdash; Error gpg bad revision

## [14.19.0] - 2023-5-4

### Added

- Adds an Errors section when clicking on a codelens to view the details for code-level metrics, which allows you to click through to individual error groups

### Changed

- Changed the "Recent" filter for GitHub pull requests to leverage GitHub's `involves` qualifier
- Smooths out the loading of an error when opening one either via the Errors section or from the Errors Inbox on New Relic

### Fixed

- Fixes an issue with the ability to connect to GitHub via VS Code's connection not being offered
- Fixes an issue with tooltips for Errors in the Observability section not displaying
- Fixes an issue with checking out a branch when the repo was renamed in git but not locally

## [14.18.1] - 2023-4-18

### Fixed

- Fixes an issue related to vulnerability management timeouts

## [14.18.0] - 2023-4-13

### Added

- Adds support for anomaly detection for code-level metrics, available in private preview for Java

### Fixed

- Fixes an issue where entering confirmation code at signup by typing each number individually results in an error

## [14.17.0] - 2023-3-23

### Added

- Adds a new Context Menu Options setting in the CodeStream section of the IDE's settings to disable the CodeStream additions to the context menu

### Changed

- Changes the default "Waiting on my Review" query for GitHub pull requests to use `review-requested:@me` instead of `involes:@me` so that draft PRs and PRs assigned to your teams are included

### Fixed

- Fixes an issue with CodeStream not recognizing the repo in your IDE when opening an error that has multiple repos associated with it
- Fixes an issue with a trailing slash not getting stripped off the end
- Fixes an issue with the link to set up Vulnerability Management pointing to the wrong environment
- Fixes an issue with relative links in comments on a GitLab MR not working

## [14.16.1] - 2023-3-10

### Fixed

- Fixes an issue with file watchers where the agent process would crash if it encountered a file it didn't have permission to read and decreased the number of files watched

## [14.16.0] - 2023-3-8

### Added

- Adds stack trace parcing for Elixir to support the errors integration

### Fixed

- Fixes an issue where violations in the Golden Metrics section were linking to the wrong page on New Relic
- Fixes an issue with the conversion of decimal to percentage in the display of error rate in Golden Metrics
- Fixes an issue with the parsing of Ruby stack traces in errors
- Fixes an issue where a newly cloned repo would not be reflected in the Observability or Codemarks sections
- Fixes an issue with the sub-sections in the Codemarks section not being collapsable
- Fixes an issue with the parsing of stack traces in errors for Elixir
- Fixes an issue that caused the "Waiting on my Review" section to appear in Merge Requests when connected to GitLab Self-Managed, where it's not supported
- Fixes an issue with permalinks not taking you to the file/line number in the IDE
- Fixes an issue where when closing an error you'd be left on the Activity Feed
- Fixes an issue with sharing an existing codemark to a direct message on Slack
- Addresses [#1319](https://github.com/TeamCodeStream/CodeStream/issues/1319) &mdash; Connections to YouTrack aren't working
- Addresses [#1215](https://github.com/TeamCodeStream/CodeStream/issues/1215) &mdash; Edit branch name infinite edit

### Changed

- Changed the implementation of code-level metrics to display error rate as a percentage, and removing throughput in favor of just showing the sample size
- Adds clearer messaging when a PR can't be displayed because a password is required to do a fetch
- Adds clearer messaging when CodeStream can't connect to an on-prem code host due to network/VPN issues

## [14.13.0] - 2023-1-24

### Added

- Adds support for code-level metrics for Node.js
- Adds an integration with [Vulnerability Management](https://newrelic.com/blog/nerdlog/vulnerability-management) to show vulnerabilities in your IDE

### Changed

- The entries in the tree for files with comments in a pull request can no longer be collapsed
- Loading spinners are now displayed while we're waiting on the SHA to load in orded to display a PR diff

### Fixed

- Fixes an issue with "View on New Relic" buttons opening the wrong service
- Fixes an issue with users getting disconnected from Jira
- Fixes an issue with shared Slack channels not being available for selection
- Fixes an issue where files in a PR weren't clickable
- Fixes an issue where the compose buttons wouldn't display when selecting code to comment on in an error

## [14.12.0] - 2023-1-12

### Changed

- Adds a validation message when user attempts to instrument a project that isn't under source control

### Fixed

- Fixes a "The path argument must be of type string" error in the instrumentation wizard
- Fixes an issue with stack traces lines that aren't part of the project being clickable when viewing an error
- Fixes a parsing error when opening an error group
- Fixes an issue with the expanded service in the Observability section not persisting

## [14.11.0] - 2022-12-12

### Fixed

- Addresses [#1283](https://github.com/TeamCodeStream/CodeStream/issues/1283) &mdash; Unable to start a review on any pending PR
- Fixes an issue with the wrapping of vulnerability titles

## [14.10.0] - 2022-12-7

### Fixed

- Fixes an issue that didn't expose organizations you can join via domain or invitation when signing up using a New Relic user api key
- Fixes an issue where reloading the IDE with a pull request expanded would bring you into the PR Details view

## [14.9.1] - 2022-12-2

### Fixed

- Fixes an issue preventing recent errors from being displayed in the Observability section

## [14.9.0] - 2022-12-1

### Changed

- Updated the pull request integration to be based on a tree view, with full-file side-by-side diffs
- Golden Metrics displayed in the Observability section now vary based on the type of service
- Improved the display of charts in the code-level metrics detail view

## [14.8.1] - 2022-11-21

### Fixed

- Fixes an issue with SLO telemetry

## [14.8.0] - 2022-11-21

### Fixed

- Fixes an issue where stack traces in errors weren't being fully populated
- Fixes an issue where remote URLs with .git at the end weren't being properly normalized

## [14.7.0] - 2022-11-15

### Added

- Adds service level objectives to the Observability section

### Changed

- Changed the entity health icon to a hex icon to match New Relic

### Fixed

- Fixes an issue viewing pull requests in private repos when connected to GitHub via OAuth
- Fixes an issue with golden metrics not being displayed for APM services with non-web transactions
- Fixes an unexpected error on sign-in after update to 14.6

## [14.6.0] - 2022-11-10

### Added

- Adds a CodeStream entry to the Visual Studio extensions menu

### Changed

- New users now explicitly accept invitations upon signup
- Invitations to existing CodeStream users are now accepted via the organization switcher under the username menu
- Draft pull requests are now included in the Pull Requests section, and are covered by toast notifiations
- Updated minimum required version of GitHub Enterprise to v3.3

### Fixed

- Addresses [#1153](https://github.com/TeamCodeStream/CodeStream/issues/1153) &mdash; Darken the colors for review elements when using a light theme
- Addresses [#1222](https://github.com/TeamCodeStream/CodeStream/issues/1222) &mdash; Wrong issues shown for YouTrack
- Addresses [#1250](https://github.com/TeamCodeStream/CodeStream/issues/1250) &mdash; CodeStream no longer working in GitHub codespaces
- Fixed an issue that allowed comments outside of the changeset in a pull request while there was a pending review

## [14.4.0] - 2022-10-20

### Added

- Adds support for code-level metrics for PHP

### Fixed

- Addresses [#1205](https://github.com/TeamCodeStream/CodeStream/issues/1205) &mdash; Can't toggle off auto-prompt for feedback requests
- Fixes an issue that was preventing the display of code-level metrics

## [14.3.0] - 2022-10-13

### Added

- Adds a new CI/CD section with a CircleCI integration to show your build status in the IDE

### Changed

- Improved drop-down selector when making repository <> service associations in New Relics organizations with a large number of entities

### Fixed

- Fixes an issue that was preventing signup via New Relic api key for users that had been invited
- Fixes an issue that would cause the list of pull requests to disappear on transient network errors
- Fixes an issue where closed violations were being displayed in the Observability section
- Addresses [#1198](https://github.com/TeamCodeStream/CodeStream/issues/1198) &mdash; java.lang.Throwable: class com.intellij.openapi.module.ModuleManager it is a service, use getService instead of getComponent

## [14.2.0] - 2022-9-29

### Added

- Adds code-level metrics into diffs for pull requests and feedback requests

### Changed

- Optimized performance of queries for code-level metrics
- Optimized the loading time of the Observability section

### Fixed

- Fixes an issue where a PR comment being composed is lost when the webview loses focus
- Fixes an issue with api rate limiting with the Linear integration

## [14.1.0] - 2022-9-15

### Added

- Adds active violations for services listed in the Observability section
- Adds the ability to associate a repo with additional services on New Relic

### Fixed

- Addresses [#1154](https://github.com/TeamCodeStream/CodeStream/issues/1154) &mdash; Cannot read properties of null (reading 'id')
- Addresses [#1168](https://github.com/TeamCodeStream/CodeStream/issues/1168) &mdash; Cannot read properties of null (reading 'origin')
- Fixes an issue where the sorting of commits in a PR didn't take year into account

## [14.0.0] - 2022-9-8

### Added

- All new Slack integration that leverages Slack's native reply model and syncs replies between CodeStream and Slack

## [13.7.1] - 2022-9-2

### Fixed

- Fixes an issue that prevented CodeStream for Visual Studio from reloading after changing the serverUrl
- Fixes an issue that prevented GitHub Enterprise users from seeing their pull requests

## [13.7.0] - 2022-9-1

### Added

- Adds a "Related Services" tree node in the Observability section, allowing you to see golden metrics for the services yours calls or is called by

### Changed

- Changes the logic in the "Waiting on my review" section for GitHub PRs such that adding a single comment on a PR doesn't cause it to be removed from this section
- Removed the ability start ad-hoc work
- Removed spatial view
- Well-known library paths for Python are excluded when resolving stack traces in errors

### Fixed

- Fixes an issue that caused GitLab connections to be disconnected
- Fixes an issue that caused you to get disconnected from Jira when creating an issue if you didn't have permission on Jira to assign issues
- Fixes an issue that caused the count of reviewed files in a pull request to be capped at 100, even if there were more files in the PR
- Fixes an issue where dismissing the modals for adding tags or related codemarks wouldn't work
- Fixes an issue where users were incorrectly seeing the message to set up instrumentation instead of telemetry in the Observability section
- Fixes an issue where you couldn't add a comment to a GitLab merge request via the PR Details view unless you selected the "start thread" option
- Fixes an issue where trying to lock a PR without selecting a reason would fail
- Addresses [#1125](https://github.com/TeamCodeStream/CodeStream/issues/1125) &mdash; Cannot "Show resolved" in a PR
- Addresses [#1023](https://github.com/TeamCodeStream/CodeStream/issues/1023) &mdash; Start work not defaulting to correct jira workflow step
- Fixes an "Unable to resolve text model content for resource" error in some feedback request diffs
- Fixes an issue where a feedback request would include unselected commits
- Fixes an issue where errors assigned to you were not displaying in the Observability section

## [13.6.0] - 2022-8-25

### Fixed

- Fixes an issue with the "show instructions" link at the bottom of feedback requests preventing you from viewing diffs
- Fixes an issue that prevented a user from associating a repo with a New Relic entity
- Adds a workaround for New Relic v1/SAML users to be able to use Observability features, such as code-level metrics, even though they can't access the errors integration
- Fixes an issue where spatial view would sometimes display at the start of a new session

## [13.5.0] - 2022-8-18

### Added

- Adds unread message indicator at the end of the CodeStream toolbar entry

### Changed

- File attachments in codemarks, feedback requests and replies are now included when shared to Slack

### Fixed

- Fixes an issue where CodeStream would attempt to add you as a reviewer of a PR when you werew the PR author
- Fixes an issue where channel selection wasn't being required when sharing a feedback request to Slack
- Fixes an issue where the compose icons would appear after clicking in the editor and scrolling
- Fixes an issue where the CodeStream pane didn't display in VS 2019
- Fixes an issue that was interfering with real-time updates in CodeStream

## [13.4.0] - 2022-8-4

### Added

- Adds support for Visual Studio 2022, and drops support for Visual Studio 2017

### Changed

- Update display of issues from Azure to include issues where state is not in 'Closed','Done','Completed','Inactive','Removed', and limit number of results to 200

### Fixed

- Fixes an issue where creating an issue on Asana fails if the description contains mismatched angle brackets
- Fixes an issue where adding a reaction to a GitLab merge request fails
- Fixes the display of organization name in the toolbar
- Fixes an issue where you couldn't view diffs in a feedback request after going through the feedback-request intro tour

## [13.3.0] - 2022-7-25

### Added

- Adds Golden Metrics to the Observability section for the services on New Relic associated with the currently selected repository

### Changed

- Universally apply proxy configuration setting to integration connections
- Stop prompting users to instrument their projects after connecting to New Relic

### Fixed

- Addresses [#968](https://github.com/TeamCodeStream/CodeStream/issues/968) &mdash; Repo not found if the folder with 2 Git Repositories opened in Intellij
- Addresses [#1043](https://github.com/TeamCodeStream/CodeStream/issues/1043) &mdash; Unable to resolve threads in GLSM merge request
- Fixes an issue where associating a repo with a New Relic entity isn't reflected in the UI without a reload
- Fixes an issue where clicking `PR Details` for a merge request results in an unexpected error
- Fixes an issue when creating a feedback request where all commits were selected by default, but grayed out

## [13.2.0] - 2022-7-6

### Changed

- When creating a feedback request you can now select any range of commits, and are no longer resitricted to selecting from the top down
- Improved performance when clicking on pull request comments in the tree view of the Pull Requests section
- Add list of relevant remotes to warning message when working with a pull request and CodeStream doesn't perceive you as having the repo open

### Fixed

- Fixes an issue that was preventing base URLs with github.com when connecting to GitHub Enterprise
- Fixes an issue with path matching that was causing CodeStream to use an inordinate amount of CPU

## [13.1.1] - 2022-6-9

### Fixed

- Addresses [#967](https://github.com/TeamCodeStream/CodeStream/issues/967) &mdash; newrelic_agent.log file created

## [13.1.0] - 2022-6-8

### Fixed

- Fixes an issue where the CodeStream agent dies after unhandled exception in RT message resolution
- Fixes an issue with the rendering of reactions to pull request comments
- Fixes an issue with author name missing in pull request comments
- Fixes an issue with duplicate entries appear in the selection of entities from New Relic
- Fixes a console error bug where the PR conversation endpoint was being requested without proper ids

## [13.0.2] - 2022-6-7

### Changed

- Override any existing New Relic environment variables when launching

## [13.0.1] - 2022-6-6

### Added

- Adds support for code-level metrics for .NET

### Fixed

- Fixes an issue preventing connections to Trello and Asana

## [13.0.0] - 2022-6-2

### Added

- Adds a new user experience for the pull request integration, including a tree view for commenting on pull requests and reviewing existing comments

### Changed

- Files' view state now syncs with GitHub when reviewing pull requests
- Include stock Node.js executable to run CodeStream agent
- Updated copy on sign-in buttons to reflect code or password option

### Fixed

- Addresses [#837](https://github.com/TeamCodeStream/CodeStream/issues/837) &mdash; Support for Apple Silicon (universal binary)
- Fixes an `Error fetching cards from Jira` on extension startup
- Fixes an issue where the notification setting for pull request assignments wouldn't appear when connected to GitHub or GitLab cloud
- Fixes an issue where your own commit would trigger a desktop notification to review changes

## [12.18.0] - 2022-5-13

### Fixed

- Addresses [#967](https://github.com/TeamCodeStream/CodeStream/issues/967) &mdash; newrelic_agent.log file created

## [12.17.0] - 2022-5-12

### Fixed

- Fixes an issue preventing you from connecting to Jira from Linux
- Fixes an issue where a custom issue filter wouldn't get applied without a reload

## [12.16.0] - 2022-4-28

### Added

- Adds options to connect to GitHub and GitLab cloud services via personal access token

### Changed

- The Pull Request and Issues sections automatically check for new PRs/issues once per minute
- Deprecated the OAuth version of the Jira Server integration
- Made validation of org entry for Azure DevOps more robust
- Connections to services via personal access tokens are now validated immediately
- Improved validations for base URLs entered when connecting to on-prem services
- When certain CodeStream settings in the IDE are changed, such as Disable Strict SSL, the user is prompted to reload CodeStream
- Provide guidance to user when situation idetified in [GitHub Issue #495](https://github.com/TeamCodeStream/codestream/issues/495#issuecomment-827646602) arises
- When connecting to GitHub or GitHub Enterprise a link is provided that will automatically populate the form to create a personal access token with the appropriate scopes
- When associating a forked repo with an entity on New Relic the upstream remote is now used by default

### Fixed

- Fixes an issue where the Assignee list when creating an issue on Jira Server didn't include all possible people

## [12.15.0] - 2022-4-7

### Changed

- Pull requests and issues from archived GitHub repos are no longer displayed by default

## [12.14.0] - 2022-4-1

### Added

- Adds support for remote URLs using the git protocol

### Changed

- Changes the color of the icon displayed in the editor gutter for pull request comments to green

### Fixed

- Fixes an issue where commenting in a feedback request cleared out the viewed state for all files
- Fixes an issue with non-repository entries appearing in the Observability section
- Fixes issues with the display of headshots in pull requests from GitHub Enterprise

## [12.13.0] - 2022-3-22

### Added

- Adds a setting on the Notifications page to control desktop notifications for pull request assignments

### Changed

- Application type is now display for each service in the entity-selection dropdowns in the Observability section
- All personal access token fields are now treated like masked password fields when connection to various services
- Improved validation messages when attempting to load a PR from URL

### Fixed

- Fixes an issue where issues wouldn't appear in the Issues section of the CodeStream pane without clicking Refresh
- Fixes an issue with the parsing of Java filepaths in stack traces for errors
- Fixes an issue with broken images in the bot checks section of PRs
- Addresses [#889](https://github.com/TeamCodeStream/CodeStream/issues/889) &mdash; Comment thread status (Resolved/Unresolved) are incorrect initially or if changed externally
- Addresses [#898](https://github.com/TeamCodeStream/CodeStream/issues/898) &mdash; "404 Project Not found" when creating new merge request

## [12.12.0] - 2022-3-1

### Changed

- Complete refactor of the "Open a Pull Request" form
- Allow for selection of repo when opening an error from New Relic where the service is associated with multiple repos
- Jira tickets with a resolution set are exluded from the Issues section

### Fixed

- Fixes an issue with repo associations not working for remote URLs that start with `ssh://`
- Addresses [#867](https://github.com/TeamCodeStream/CodeStream/issues/867) &mdash; Can't get new relic observability to actually show something other than "set up monitoring"
- Fixes an where you'd get a "object Object" error trying to submit a feedback request against a repo with no commits and no remotes
- Fixes an issue where the list of errors in the Observability section was limited when the recent errors had very high occurence counts
- Addresses [#848](https://github.com/TeamCodeStream/CodeStream/issues/848) &mdash; Git command needs some escaping
- Fixes a `PR Api is not compatible` error when trying to access a GitHub Enterprise instance when not connected to the VPN
- Addresses [#847](https://github.com/TeamCodeStream/CodeStream/issues/847) &mdash; Slack channel selector stopped working
- Fixes an unexpected error when opening a pull request without the given repo open in your IDE
- Addresses [#844](https://github.com/TeamCodeStream/CodeStream/issues/844) &mdash; Codemarks position themselves at the end of file

## [12.11.0] - 2022-2-18

### Fixed

- Addresses [#699](https://github.com/TeamCodeStream/CodeStream/issues/699) &mdash; GitLab - "Checkout Branch" and "Code Review" broken

## [12.10.0] - 2022-2-16

### Changed

- Observability section is now placed at the top of the sidebar for users signing up with New Relic
- Jira tickets with a status of `Resolved` are not displayed in the Issues section

### Fixed

- Fixes an issue where the the merge action for GitHub Enterprise PRs was always defaulting to "Squash & merge"
- Fixes an issue where extraneous diffs in a Feedback Request resulted in a error about payload size
- Fixes an issue where GitHub Enterprise would not work properly if the server was not accessible when CodeStream started

## [12.9.0] - 2022-2-9

### Changed

- Reorganized Assignee dropdown in New Relic error groups in "Suggestions from Git" and "My Organization"
- Removed the Work In Progress section

### Fixed

- Fixes an issue with an endless spinner on the acitivity feed in an organization with more than 50 posts but none of them are for the code open in the IDE
- Fixes an issue with excessive CPU usage
- Fixes an issue where the Connect to New Relic page would be shown after signup even if the user was already connected

## [12.8.0] - 2022-2-1

### Changed

- Don't prompt for repo associations in the Observability section if there are no entities on New Relic
- Jira issues in `Done` status are excluded from the Issues section
- The Pull Requests section of the CodeStream pane is always display, regardless of what repos you have open in your IDE

### Fixed

- Addresses [#836](https://github.com/TeamCodeStream/CodeStream/issues/836) &mdash; CodeStream Plugin Crashes PHPStorm
- Addresses [#713](https://github.com/TeamCodeStream/CodeStream/issues/713) &mdash; Saved query executing differently in different projects/windows
- Fixes an issue with incorrect options being displayed when creating a permalink (i.e., add/remove range, pin)
- Fixes an issue where the filter in the Codemarks section defaults to "[repository]" for a new user

## [12.7.0] - 2022-1-24

### Added

- Adds the ability to sign into CodeStream using a code sent to you via email
- Adds the ability to sign up for CodeStream using your New Relic One user api key
- Adds a search box to the entity selection dropdown in the Observability section
- Adds the ability for organization admins to delete their own organizations

### Changed

- Notifications about unreviewed commmits when you pull are now off by default for new users

### Fixed

- Addresses [#767](https://github.com/TeamCodeStream/CodeStream/issues/767) &mdash; Slack channel-selector dropdown not working
- Fixes an issue where CodeStream doesn't think you have the repo open when viewing a merge request
- Fixes an issue where issues from a Jira instance with many projects would
- Fixes an issue where channels for a workspace with a very large number of channels take a long time to load

## [12.6.0] - 2022-1-4

### Changed

- Improved UI for unassigned errors

### Fixed

- Addresses [#796](https://github.com/TeamCodeStream/CodeStream/issues/796) &mdash; Theme issues in VS
- Addresses [#734](https://github.com/TeamCodeStream/CodeStream/issues/734) &mdash; Merge Request view is not showing if there is merge conflict
- Fixes an issue with creating a PR across forks when there are a large number of forks for the repo
- Fixes an issue with creating a codemark in an uncommitted file

## [12.5.0] - 2021-12-21

### Changed

- Simplified signup flow
- Generalize caching of related objects returned with each fetch

### Fixed

- Fixes an issue preventing you from recreating the "recent" query in the Pull Requests section
- Fixes an issue with a `resolveStackTrace failed` error when opening error in IDE

## [12.4.0] - 2021-12-14

### Changed

- CodeStream now remembers the last organization you had selected when you sign in

### Fixed

- Fixes a race condition that could make error stack traces not clickable
- Fixes an issue parsing stack traces with Windows paths
- Fixes an issue that caused an exception `Assert: must be called on EDT` when opening an error
- Addresses [#778](https://github.com/TeamCodeStream/CodeStream/issues/778) &mdash; VSCODE PR fails if forked-repo branch has same name as the (base) repo branch
- Fixes an issue with the first codemark in a feedback request in a new session taking a long time to submit
- Fixes an issue that resulted in an error associating a repo with a NR1 entity

## [12.3.1] - 2021-11-23

### Fixed

- Fixes an issue related to the connection of certain providers

## [12.3.0] - 2021-11-23

### Added

- Adds an intro tour the first time someone opens an error group

### Fixed

- Fixes an issue with the parsing of stack traces in error groups

## [12.2.0] - 2021-11-22

### Changed

- Codemarks created in an error group now reference and link to the error group
- When you select an issue to start work in the Issues section it is now identified via an arrow to the left of the entry
- Error stack trace resolution is now asynchronous and doesn’t block initial error loading

### Fixed

- Addresses [#774](https://github.com/TeamCodeStream/CodeStream/issues/774) &mdash; Pending review comments in GH PR aren't being saved
- Addresses [#765](https://github.com/TeamCodeStream/CodeStream/issues/765) &mdash; Field 'draft' doesn't exist on type 'MergeRequest'
- Addresses [#707](https://github.com/TeamCodeStream/CodeStream/issues/707) &mdash; GLSM "TypeError: Cannot read property 'mergeRequest' of null"
- Addresses [#597](https://github.com/TeamCodeStream/CodeStream/issues/597) &mdash; GitLab self hosted error. Field 'userDiscussionsCount' and 'reviewers' doesn't exist on type 'MergeRequest'

## [12.1.0] - 2021-11-12

### Added

- Adds checks during onboarding for New Relic users to see if colleagues already have an organization on CodeStream

### Changed

- Bypass onboarding step for create/join organization if there are no organizations to join

### Fixed

- Addresses [#764](https://github.com/TeamCodeStream/CodeStream/issues/764) &mdash; GitLab open merge request error field 'workInProgress'

## [12.0.3] - 2021-11-5

### Changed

- Prevent issue codemarks and permalinks when commenting on an error from New Relic
- Display stack traces in errors even when they can't be parsed

### Fixed

- Addresses [#709](https://github.com/TeamCodeStream/CodeStream/issues/709) &mdash; Multi-line PR comments only showing last 4 lines
- Fixes an issue with domain-based joining not working when signing up via GitHub, GitLab or Bitbucket
- Fixes an issue where the activity feed is automatically scrolled to the first error
- Fixes an issue where closing the inline Entities menu in the Observability section collapses the node
- Fixes an issue where deleting a comment in an error via the editor gutter doesn't take effect without a reload
- Fixes a windows-specific file path issue when parsing a stack trace

## [12.0.2] - 2021-10-28

### Changed

- Modification to the script to grab unique pods for the Pixie dynamic logging
- Add entity and account info to error groups without stack traces
- Suppress "Copy Link" in ellipses menu if error group is still pending
- Adds a "Learn More" link to the disconnected state of the Observability section
- Use timestamp from payload to better query New Relic Metrics

### Fixed

- Fixes an issue with an error group reloading after adding a comment
- Fixes an issue with not being able to select a Slack channel for sharing
- Fixes an issue with the "Try using a different email address" link not working when you sign up via a code host

## [12.0.1] - 2021-10-21

### Fixed

- Fixes an issue that prevented you from signing up with a webmail address
- Fixes an issue that allowed you to share a pending error to Slack/MS Teams

## [12.0.0] - 2021-10-21

### Added

- Adds an [integration with New Relic One](https://codestream.com/blog/codestream-12-0-new-relic-one-integration-brings-observability-to-all-developers-in-their-ides) that allows you to discover, investigate and collaborate on errors from your IDE, as well as dynamic logging in production using Pixie and the ability to instrument your projects right from your IDE

## [11.1.1] - 2021-10-7

### Fixed

- Fixes an issue where some users couldn't switch to certain organizations

## [11.1.0] - 2021-10-7

### Added

- Adds support for allowing people to join your CodeStream organization when signing up with specific email domains
- Adds the ability to filter the Activity Feed to just discussions about repos open in your IDE, or even specific folders (i.e. monorepo scenarios)

### Changed

- Eliminates the concept of a team on CodeStream, with everyone from a company now being in a single CodeStream organization
- Replaces the My Team section of the sidebar with a My Organization menu at the top of the CodeStream pane
- Eliminates invitation codes, with teammates now accepting invitations simply by signing up with the email address the invitation was sent to

## [11.0.16] - 2021-9-24

### Fixed

- Fixes an issue with CodeStream overriding GitLab defaults for "Squash commits" and "Delete source branch"

## [11.0.15] - 2021-9-15

### Fixed

- Addresses [#701](https://github.com/TeamCodeStream/CodeStream/issues/701) &mdash; Failed to load MR list from Gitlab.com
- Fixes an issue with returning users not being able to accept updated TOS

## [11.0.14] - 2021-8-26

### Changed

- Custom merge request queries now use proper GitLab syntax
- Addresses [#677](https://github.com/TeamCodeStream/CodeStream/issues/677) &mdash; Merge Request Query for negate
- Addresses [#661](https://github.com/TeamCodeStream/CodeStream/issues/661) &mdash; MR integration doesn't work with project token
- No-reply email addresses, such as @users.noreply.github.com, are no longer suggested throughout CodeStream

### Fixed

- Addresses [#693](https://github.com/TeamCodeStream/CodeStream/issues/693) &mdash; Changing PR remote branch makes the branch unable to be found
- Addresses [#673](https://github.com/TeamCodeStream/CodeStream/issues/673) &mdash; Request codestream/reviews/create failed with message: Cannot create review. Payload exceeds 10MB
- Addresses [#650](https://github.com/TeamCodeStream/CodeStream/issues/650) &mdash; Code fences displayed as single line in Issue Codemarks

## [11.0.13] - 2021-7-15

### Added

- Adds the ability to [filter GitLab custom issue queries](https://guide.codestream.us/userguide/faq/custom-queries-gl/) by project and group

### Fixed

- Addresses [#596](https://github.com/TeamCodeStream/CodeStream/issues/596) &mdash; Error with renamed file in a PR review
- Fixes an issue where commenting outside of the changeset, but very close to it, in a PR results in an error

## [11.0.12] - 2021-6-30

### Changed

- Changes to a pull requests's title and labels are immediately reflected in the Pull/Merge Request section after saving the changes
- Fall back to using first intial for a headshot when headshots in pull requests aren't accessible
- Clicking on images in pull requests now open the full-size image on the web

### Fixed

- Fixes a "Cannot read property 'full' of undefined" error in the Merge Requests section
- Fixes an issue with double quotes needing to be escaped when creating a custom PR filter for GitHub
- Fixes an issue where you can't start a PR review when the commit selection is anything other than "Changes from all commits"

## [11.0.11] - 2021-6-22

### Added

- Adds the ability to create a custom filer in the Issues section for GitLab

### Changed

- Adds confirmation when user cancels a pending pull/merge request review
- Live View is now free for all teams
- Adds copy to the Issues section when there are no results to display

### Fixed

- Fixes an issue with emoji not rendering in labels for pull requests

## [11.0.10] - 2021-6-7

### Changed

- Updated terms-of-service acceptance flow

## [11.0.9] - 2021-6-3

### Changed

- You can now reply to any top-level comment in a merge request, regardless of whether or not it was started as a thread
- Form that automatically pops up to request feedback when you commit is now dismissed after 15 minutes of inactivity
- Changing branches while you have the feedback request form open no longer updates the form

### Fixed

- Addresses [#595](https://github.com/TeamCodeStream/CodeStream/issues/595) &mdash; Connectivity Issues Makes CodeStream Unusable
- Addresses [#590](https://github.com/TeamCodeStream/CodeStream/issues/590) &mdash; Commit selection is reset for a Gitlab MR after posting a comment
- Addresses [#522](https://github.com/TeamCodeStream/CodeStream/issues/522) &mdash; Support multi-line comments in GL MR
- Addresses [#400](https://github.com/TeamCodeStream/CodeStream/issues/400) &mdash; Agent is detected as a new process by Intego NetBarrier every time IntelliJ starts
- Fixes an issue with quote replies in a merge request where the reply text would get included in the quote
- Fixes an issue where resolving a codemark or feedback request marks it as unread in the Codemarks/Feedback Requests section of the CodeStream pane
- Fixes an issue with the Commits tab in a pull/merge request showing commits in the wrong order

## [11.0.8] - 2021-5-21

### Changed

- Updated the UI for custom filters in the Issues section to be consistent with custom queries in the PRs section

### Fixed

- Addresses [#547](https://github.com/TeamCodeStream/CodeStream/issues/547) &mdash; Reviewing Gitlab MR with a partial commit range shows invalid changesets
- Addresses [#541](https://github.com/TeamCodeStream/CodeStream/issues/541) &mdash; Suppress html comments in rendering of issues
- Addresses [#537](https://github.com/TeamCodeStream/CodeStream/issues/537) &mdash; Branch selection in dropdown of Codemarks section should automatically pick up branch change
- Addresses [#522](https://github.com/TeamCodeStream/CodeStream/issues/522) &mdash; Support multi-line comments in GL MR
- Fixes on issue with marker positioning if you change your editor zoom and then open a file with codemarks

## [11.0.7] - 2021-5-13

### Added

- The Pull/Merge Requests section of the CodeStream pane now refreshes every 5 minutes to pick up changes

### Changed

- Addresses [#506](https://github.com/TeamCodeStream/CodeStream/issues/506) &mdash; Don't reset scroll position when switching tabs in a PR
- Custom queries for either GitHub PRs or GitHub issues now requires [at least one qualifier](https://docs.codestream.com/userguide/faq/custom-queries/) that will prevent the query from return results across all of GitHub
- The banner indicating connectivity issues has been replaced with the blanket that covers the entire CodeStream pane

### Fixed

- Addresses [#546](https://github.com/TeamCodeStream/CodeStream/issues/546) &mdash; Cannot open GitHub Enterprise 2.22 PRs
- Addresses [#565](https://github.com/TeamCodeStream/CodeStream/issues/565) &mdash; Toast notifications (and log) replace "this" with feedback request name
- Fixes an issue where an @mention in a codemark shared to Slack would register twice in the count in the badge on the Activty Feed
- Fixes an issue where adding an emoji to a merge request comment would sometimes add it at the start of the comment regardless of the cursor position

## [11.0.6] - 2021-5-7

### Added

- Provide feedback in the UI for on-prem customers when the api server can't communicate with the broadcaster

### Changed

- Repo/branch names at the top of GitHub pull requests are now links to the appropriate branch on GitHub

### Fixed

- Fixes an issue where an apostrophe would get added to the end of email addresses suggested as reviewers in feedback requests
- Fixes an issue with the display of images in comments on a GitLab merge request
- Fixes an issue preventing you from being able to paste when editing most content types on CodeStream
- Fixes an issue where editing an MR comment and adding a code fence results in divs being displayed
- Fixes an issue where the code block doesn't immediately show in the merge request timeline after adding a new comment
- Fixes an issue where you couldn't edit a merge request comment from Diff Hunks view
- Fixes an issue with the responsiveness of the display of the Merge and Pipeline boxes in a merge request

## [11.0.5] - 2021-4-29

### Added

- Adds the ability to toggle the display of pull request descriptions in the Pull Requests section

### Changed

- Establish GitLab v12.10 as the minimum required version for merge-request support

### Fixed

- Addresses [#502](https://github.com/TeamCodeStream/CodeStream/issues/502) &mdash; Can't checkout to the branch in a merge request
- Fixes an issue where clicking on Diff Hunks view in a pull request would result in an error
- Addresses [#454](https://github.com/TeamCodeStream/CodeStream/issues/454) &mdash; Default headshot display to initials when gravatar/headshot can't be loaded for on-prem users
- Addresses [#498](https://github.com/TeamCodeStream/CodeStream/issues/498) &mdash; GitLab MR doesn't show commits created after MR is added
- Fixes an error when creating a codemark
- Fixes an issue where trying to view a pull request via list/tree view results in an error
- Addresses [#429](https://github.com/TeamCodeStream/CodeStream/issues/429) &mdash; Incorrect user/repo listed at bottom of a PR
- Fixes an issue where hitting Esc to close the comment form in a pull request exits you out of the pull request completely
- Fixes an issue where some loading/saving messages in pull requests don't go away after completion
- Fixes an issue where merge requests created with unpushed branches lead to GraphQL error
- Fixes an issue with the display of images in merge request descriptions
- Fixes an issue replying to an existing comment in a merge request while there is a pending review
- Fixes an issue deleting a pending review comment in a merge request
- Fixes an issue with broken headshot display when adding a comment in a merge request
- Fixes an issue where the "requested a review" banner in a pull request doesn't go away on submission of a review
- Fixes an issue where WSL users can't select repo when creating a feedback reqest

## [11.0.4] - 2021-4-22

### Added

- Adds the ability to edit a pending review comment in a GitLab merge request
- Adds a roadblock to indicate that merge request support for GitLab Self Managed requires version 12.10.X or later

### Changed

- Ask user if they want to switch teams when clicking on a permalink for an item owned by a team other than the one you currently have selected
- More efficient use of GitHub api points to prevent users from getting hit with rate-limit errors
- Decrease the number of git operations being performed at extension startup
- When going a quote reply in a pull/merge request, a blank line is automatically inserted before the cursor to prevent entered text from being included in the quote

### Fixed

- Addresses [#514](https://github.com/TeamCodeStream/CodeStream/issues/514) &mdash; Merge request not listed when using proxy
- Addresses [#477](https://github.com/TeamCodeStream/CodeStream/issues/477) &mdash; Add messaging when not all files in a large MR will be listed
- Fixes an issue where the issue you select via Start Work in one team, also appears in the Work In Progress section for all of your teams
- Fixes an error when creating a pull request
- Fixes an issue with the Open File buttons in the Changed Files section of a feedback request not working
- Fixes an issue with creating a pull request on Bitbucket
- Fixes an issue where collapsing/expanding sections in the Pull Requests section would cause all queries to refresh
- Fixes an issue where clicking on a mention in a merge request opens a blank page
- Fixes an issue where a local-changes warning would be shown when creating a pull request when there's weren't any local changes in the selected repository

## [11.0.3] - 2021-4-12

### Fixed

- Addresses [#486](https://github.com/TeamCodeStream/CodeStream/issues/486) &mdash; Unexpected error clicking on a merge request after update to 11.0

## [11.0.2] - 2021-4-12

### Changed

- List of PRs in the Pull Requests section automatically refreshes after reconnecting to a previously disconnected service

### Fixed

- Fixes a display issue with feedback requests where the sidebar was visible behind the FR
- Addresses [#488](https://github.com/TeamCodeStream/CodeStream/issues/488) &mdash; Can't save custom MR query
- Addresses [#486](https://github.com/TeamCodeStream/CodeStream/issues/486) &mdash; Unexpected error clicking on a merge request after update to 11.0
- Addresses [#483](https://github.com/TeamCodeStream/CodeStream/issues/483) &mdash; Error loading git info when trying to ammend a feedback request
- Addresses [#482](https://github.com/TeamCodeStream/CodeStream/issues/482) &mdash; Gitlab open merge request error field 'approvalsRequired'
- Fixes field 'stages' doesn't exist on type 'Pipeline' on GitLab Self-Managed 13.2.3
- Fixes field 'currentUser' doesn't exist on type 'Query' on GitLab Self-Managed 12.X and below
- Fixes field 'approvalsLeft' doesn't exist on type 'MergeRequest'
- Fixes field 'id' doesn't exist on type 'User' on GitLab Self-Managed 12.X and below
- Addresses [#470](https://github.com/TeamCodeStream/CodeStream/issues/470) &mdash; Shouldn't be able to submit review with zero pending comments
- Fixes an issue with the Template dropdown incorrectly being displayed when creating a PR on GitHub
- Fixes an issue with the display of the "source branch is X commit behind the target branch" copy in a merge request
- Fixes an issue with line breaks getting lost in the description of a feedback request
- Fixes an issue where you can't dismiss a feedback request when opening it via a toast notification on top of an open pull request
- Fixes an error clicking on the Files Changed tab of a pull request

## [11.0.1] - 2021-4-7

### Fixed

- Fixes an issue that would cause blue badges to appear for codemarks/feedback requests even if they didn't have unread replies

## [11.0.0] - 2021-4-7

### Added

- Adds support for [managing and reviewing GitLab merge requests](http://www.codestream.com/blog/codestream-11-0-manage-gitlab-merge-requests-code-reviews-and-issues-in-vscode-jetbrains)
- Adds blue unread-message badges in the Feedback Requests and Codemarks sections when there are new replies

### Changed

- Replaced the "Reject" button in feedback requests with "Request Changes"
- Renamed the "Needs Works" section in Feedback Requests to "Changes Requested"

### Fixed

- Fixes an issue where Cmd + Enter submits a feedback request with no changes selected
- Fixes an issue where you'd get prompted to review changes after changing branches
- Fixes an issue where the Linear integration wasn't recognizing multiple teams
- Fixes an issue where the assignees list wasn't complete when creating an issue on GitLab
- Fixes an issue with an extraneous entry appearing in the branch dropdowns when creating a pull request
- Fixes an issue with Shift+Click not working on Windows when trying to select a range of commits to review in a pull request
- Fixes an issue with the Feedback menu item under the headshot menu not working

## [10.7.2] - 2021-3-23

### Changed

- Toast notifications for commits are shown even if a feedback request already exists for the given commmit, as long as the feedback request is still open
- The heading of the Codemarks section now shows the number of open codemarks when the section is collapsed

### Fixed

- Fixes an unexpected error when clicking on the Files Changed tab in a pull request

## [10.7.1] - 2021-3-17

### Added

- Adds the ability to set up the Jira Server (v8.14.0 or later) integration using an API token
- Ability to create a pull request against a fork on GitHub Enterprise

### Changed

- Local changes now only block creation of a pull request when done in the context of a feedback request, otherwise it's just a warning
- When creating a pull request, if the diff is huge it is now not displayed by default
- Minor change to the navigation in the sign up/in flow when authenticating via a 3rd party
- UX improvement to the Notification Settings page
- When a teammate proactively creates a feedback request to review a commit of yours, you are now shown as the code author for that feedback request and it will appear in the "Open" section of the Feedback Requests section

### Fixed

- Addresses [#348](https://github.com/TeamCodeStream/CodeStream/issues/348) &mdash; Fixes an issue with checking out to a pull request's branch when the repo name included upper case letters
- Fixes an issue that would result in an unexpected error when clicking on a feedback request

## [10.7.0] - 2021-3-9

### Added

- Adds toast notifications prompting you to review new commits from a teammate after you do a pull
- Adds the ability to review changes in a pull request since your last review, or for a specific range of commits

### Changed

- When you resovle a codemark the modal is now automatically closed
- When creating a feedback request from an auto-prompt, the first line of the commit message is used as the FR title and anything after a newline character goes into the description
- Moved repository/branch information into the header of feedback requests
- Improved support for SSH aliases to prevent "The git repository for this review is not currently open in the IDE" messages from incorrecly being displayed

### Fixed

- Fixes an issue with the you-don't-have-this-file warning, when you view a codemark in a file that doesn't exist in your branch, not persisting
- Addresses [#406](https://github.com/TeamCodeStream/CodeStream/issues/406) &mdash; Inject as comment inserts at wrong marker location
- Addresses [#338](https://github.com/TeamCodeStream/CodeStream/issues/338) &mdash; multiline code break (newline) markdown not rendering inside code block syntax
- Fixes an issue with attaching files via copy-and-paste
- Fixes an issue with codemarks created on Windows showing a diff for the codeblock when there wasn't one
- Fixes an issue where pull_request_template.md files in uppercase weren't being recognized when creating a PR
- Fixes an issue with the inline display of images with a ? in the file name

## [10.6.2] - 2021-2-26

### Added

- Addresses [#411](https://github.com/TeamCodeStream/CodeStream/issues/411) &mdash; Case sensitive branch names

### Changed

- Even if Line Number is the selected sort, the sorting of the Codemarks section is always Date unless Current File is the selected filter

### Fixed

- Fixes an issue with connecting on on-prem services, such as GitHub Entperise and Bitbucket Server
- Addresses [#408](https://github.com/TeamCodeStream/CodeStream/issues/408) &mdash; Codemark not showing code block with Russian characters
- Fixes an issue when clicking on icons in the editor gutter for pull request comments from Bitbucket or GitLab
- Fixes an issue with viewing diffs for pull requests from forks
- Fixes an issue where manually entering triple backticks when adding a code block to a post breaks the formatting of the post
- Fixes an issue where the contents of the Codemarks section would unecessarily reload when switching files within the same repo
- Fixes an issue when clicking to see git diff in review window would trigger an undefined error

## [10.6.1] - 2021-2-19

- Fixes an issue where a codemark is being created against the wrong file/location when the panel is not pinned

## [10.6.0] - 2021-2-19

### Added

- Adds the ability to review a pull request by a specific commit
- Adds a new onboarding tour focussed on educating new users on CodeStream's key features
- Adds a "Shared To" section to codemarks and feedback requests indicating when the item was shared to Slack
- Adds an [automated post to Slack](https://www.codestream.com/blog/codestream-10-6-discussion-resolutions-published-to-slack) when a shared codemark or feedback request has been resolved- Adds the feedback request title to the toast notification when the request is approved, rejected ot reopened

### Fixed

- Fixes an issue with “disable strict SSL” setting not working for self-hosted services
- Fixes an issue with an HTTPS-Required popup incorrectly showing for new on-prem installations
- Addresses [#388](https://github.com/TeamCodeStream/CodeStream/issues/388) &mdash; Codemark issue with filenames containing "+" char
- Fixes an unexpected error when clicking on a pull request
- Fixes an issue with the count in the heading of the Coedmarks section being incorrect when filter isn't set to the current file
- Fixes an issue commenting in a pull request in a file in a folder that doesn't exist in your current branch
- Fixes an issue with the Slack integration not appearing as a green tile on the Integrations page immediately after connecting
- Fixes an issue with the Locate button not working in a feedback request when you don't have the given repo open
- Fixes an issue with commenting on code in files that are symlinks
- Fixes an issue where a codemark is being created against the wrong file/location when the panel is not pinned

## [10.5.1] - 2021-2-10

### Fixed

- Fixes an issue that caused an 'Unexpected Error' screen on sign-in

## [10.5.0] - 2021-2-9

### Added

- Adds checkbox to the Notifications page to control the new Feedback Request Reminder email notification

### Changed

- Comment codemarks can now be resolved
- The Codemarks section of the sidebar breaks out codemarks by status (open, resolved, archived) with new colors for each
- Default filters on the Search page are now Open Issues, Open Code Comments, and Open Feedback Requests, and is:open / is:closed advanced syntax now includes comment codemarks
- CodeStream on-prem customers can now connect to Jira's cloud service using API tokens instead of OAuth

### Fixed

- Fixes issue that prevented pull request creation on github.io repositories
- Fixes an issue with invitation codes for on-prem customers not correctly setting the CodeStream server URL for the invitee
- Fixes an issue when commenting on a pull request that has been sitting open for more than an hour
- Fixes a formatting issue with issues created on Asana

## [10.4.3] - 2021-2-6

### Fixed

- Addresses [#392](https://github.com/TeamCodeStream/CodeStream/issues/392) &mdash; Codemark not showing code block when created from Windows

## [10.4.2] - 2021-1-29

### Added

- Adds a new tree view in the Changed Files section of feedback requests

### Changed

- Stop sending toast notifications for closed pull requests

### Fixed

- Fixes an issue with commenting in a feedback request in a file with an @ in the name
- Fixes an issue preventing you from being able to edit a feedback request
- Fixes an issue creating an issue codemark on GitLab cloud

## [10.4.1] - 2021-1-26

### Added

- Adds the ability to attach files to a feedback request, or to a reply
- Adds support for custom queries for Jira Server in the Issues section

### Changed

- Automatically populate all reviewer slots in a feedback request, going to recent committers if necessary, if one of the "authorship" assignment options is selected

### Fixed

- Addresses [#380](https://github.com/TeamCodeStream/CodeStream/issues/380) &mdash; Viewing a PR with status checks on GitHub Enterprise generates an error
- Addresses [#378](https://github.com/TeamCodeStream/CodeStream/issues/378) &mdash; AggregateException thrown in VS 2019 with CodeStream installed when trying to activate IntelliSense
- Addresses [#376](https://github.com/TeamCodeStream/CodeStream/issues/376) &mdash; Can't exit preview mode when creating a feedback request
- Fixes an issue where you'd end up in an infinite "Fetching repo..." loop trying to create an issue on Bitbucket
- Fixes an issue creating a permalink when in a WSL environment

## [10.4.0] - 2021-1-19

### Added

- Adds support for [file attachments](https://www.codestream.com/blog/codestream-10-4-file-attachments-github-status-checks) when creating comment or issue codemarks
- Adds support for GitHub status checks in pull requests rendered in CodeStream
- When selecting a Linear issue to start work, the branch name associated with the issue is used
- Adds the ability to pull the latest, if the base branch is behind origin, when previewing diffs while creating a pull request

### Changed

- Prevent the creation of codemarks when in a preview diff while submitting a feedback request

### Fixed

- Addresses [#353](https://github.com/TeamCodeStream/CodeStream/issues/353) &mdash; Codemark glyphs do not show up in WSL environment
- Fixes an issue where starting work on an issue creates a feature branch against the wrong base
- Fixes a data integrity issue that led to a small group of users getting an error clicking on a codemark
- Fixes with the fetching of too much history data from PubNub if client clock is inaccurately set
- Performance improvements
- Fixes an issue with feedback requests assigned to you not appearing in the Approved or Needs Work sections without a reload

## [10.3.0] - 2021-1-8

### Added

- Adds a new integration with the Linear issue-tracking service
- Adds an [integration with GitLens](https://medium.com/teamcodestream/how-we-extended-gitlens-pull-request-functionality-in-visual-studio-code-f4dbecbea4c2) which allows you to create and view pull requests using CodeStream

### Fixed

- Addresses [#364](https://github.com/TeamCodeStream/CodeStream/issues/364) &mdash; Copy button in PR is copying the base branch name instead of the compare branch
- Fixes an issue where the Open File button in the Tree View of the list of files in a PR wouldn't open the correct file if sections of the tree were collapsed

## [10.2.2] - 2020-12-30

### Added

- Split the Feedback Requests section of the sidebar into sections for Open, Approved and Needs Work
- When selecting a ticket to start work, added an option to pull latest if base branch is behind origin
- Added the ability to set a default base branch per repo when creating a feature branch

## [10.2.1] - 2020-12-23

### Added

- Adds a new onboarding flow for some users that guides them through the setup of integrations and creating their first code comment
- Adds support for remotes using SSH aliases

### Changed

- When creating a feedback request only commits from current user are checked by default, and only if they include the most recent commit
- The list in the Pull Requests section automatically updates when you open, close or merge a pull request from CodeStream
- The hovers for icons in the editor gutter now make it clear if the discussion was a comment, issue, feedback request or pull request
- Optimization of git operations to gather commits when creating a feedback request

### Fixed

- Fixes an issue where CodeStream would repeatedly reload
- Fixes an issue that would create an error when clicking on a feedback request due to bad data

## [10.2.0] - 2020-12-17

### Added

- Adds new onboarding settings for team admins that allow people to join teams based on repository access, and allow admins to restrict integration and authentication options
- Adds a warning if you have local changes when trying to create a pull request
- Adds new gear menu to header of the My Team section to access team settings and administration

### Fixed

- Fixes an issue where some users would run into GitHub rate limiting issues when working with pull requests
- Fixes an issue where the markdown preview for commenting in a pull request was always empty
- Fixes an issue where adding multiple code blocks to a codemark would result in some not getting added
- Fixes an issue where a GitHub disconnect banner would incorrectly appear due to lack of internet connectivity

## [10.1.2] - 2020-12-4

### Added

- Adds the "Outdated" label to comments on outdated code displayed in a pull request
- Improved diff creation for feedback requests so that you should rarley see the “a commit required to perform this review was not found in the local repository” message

### Fixed

- Fixes an issue where multiple lines of code displayed in a code fence were collapsed down to a single line
- Fixes an issue where Start Work would break if selected a CodeStream issue and the branch template used only {id}
- Fixes an issue where a feedback request couldn't be submitted against a brand new repo with a single commit
- Fixes an issue with the "show instructions" link at the bottom of a feedback request that has replies
- Fixes an off-by-1 issue in the display of comments on the Conversation tab in pull requests

## [10.1.1] - 2020-11-25

### Fixed

- Fixes an issue that prevented you from starting a review when commenting in a pull request

## [10.1.0] - 2020-11-24

### Added

- Add an integration with Clubhouse that allows you to create stories and see your backlog
- Adds the ability to create a GitHub pull request across forks

### Changed

- Improves the UX on the form to submit a review in a pull request by making it clear that the Cancel button is for cancelling the review, and not dismissing the form
- Clarifies that when commenting on code outside of the changeset in a pull request, while a review is pending, the comment is added at the PR level and not included in the review

### Fixed

- Fixes an issue where the icons for pull request comments would be displayed on the wrong line in the gutter of the diff
- Fixes an issue that would result in an error trying to view a pull request
- Addresses [#296](https://github.com/TeamCodeStream/CodeStream/issues/296) &mdash; "Error 401: Unauthorized" when opening a PR on GitLab Self Managed
- Fixes an issue where the viewed status of files in the pull request would get reset after adding a comment
- Fixes an issue that prevented the creation of single pull request comments with certain GitHub Enterprise instances
- Fixes an issue where files would not be displayed in tree view of a pull request if the folder name was a superset of another folder name

## [10.0.5] - 2020-11-13

### Added

- Adds the ability to react to a comment, issue or feedback request, whereas you previously could only react to a reply

### Changed

- Changed the default branch name template to just use the issue's title
- Clicking on an icon in the gutter of a pull-request diff now scrolls you to the corresponding comment
- Improved logic for naming repositories to prioritize upstream and origin remotes

### Fixed

- Fixes an issue that prevented pull request comments from being displayed immediately as icons in the diff gutter
- Fixes an issue that would prevent you from viewing a pull request that had a team as a reviewer
- Fixes an issue that would generate an error if you reloaded while configuring an on-prem issue tracking/code hosting service

## [10.0.4] - 2020-11-13

### Added

- Adds the ability to mention GitHub collaborators when commenting on a pull request
- Adds typeahead search when selecting branches for a new pull request

### Changed

- After creating a pull request, when you then close it you are brought to the CodeStream sidebar instead of back to the Open a Pull Request page
- Provide more guidance for users trying to sign up/in with GitLab regarding the need to have a public primary email on GitLab
- The "Work in Progress" section is now more performant, with reduced api requests

### Fixed

- Addresses [#322](https://github.com/TeamCodeStream/CodeStream/issues/322) &mdash; When creating a pull request on GitLab or Bitbucket, CodeStream would try to open it in the IDE instead of on the appropriate service
- Addresses [#315](https://github.com/TeamCodeStream/CodeStream/issues/315) &mdash; Creating a PR on GitLab Self-Managed switches base branch with compare branch
- Fixes an issue trying to view a pull request in a repo with more than 100 open or merged pull requests
- Fixes an issue where our polling for updates to a pull request would trigger an error when the user comes back from beign offline
- Fixes an issue with Open Local File not working from the Files Changed tab in a pull request
- Fixes an issue that would prevent you from creating a pull request if you had repos from both GitHub and GitHub Entperise open in your IDE

## [10.0.3] - 2020-11-5

### Added

- Adds support for Azure DevOps issue tracking in the Issues section of the CodeStream pane

### Changed

- After creating a pull request on GitHub Enterprise you are now taken right into the newly created pull request on CodeStream
- Toast notifications for when you're added as a reviewer or assignee to a pull request are now not limited to open pull requests
- Better messaging when you try to create a pull request with no repositories open
- Updated Slack app to use Slack's new granular permissions

### Fixed

- Fixes an issue where pull requests from older versions of GitHub Enterprise wouldn't load
- Fixes an issue where the list of projects and the list of assignees where not list alphabetically when creating an issue on Azure DevOps
- Fixes an issue where you'd receive a toast notification when assiging a pull request to yourself
- Fixes an issue where the default notifications settings weren't being reflected on the Notifications page for new users
- Fixes an issue where the editing of a range in a mult-range codemark caused a change in the ordering of the ranges
- Fixes an issue with some modals having two "X"s to dismiss
- Fixes an issue with ESC not properly dismissing modals/pages
- Fixes an issue where certain actions would inappropriately land you in spatial view

## [10.0.2] - 2020-10-28

### Added

- Adds the ability, in a codemark with multiple code blocks, to intersperse the blocks of code in the codemark text by refencing them with `[#1]`

### Changed

- Changed reference to "requested a review" in activity feed to "requested feedback"
- Replaces "upgrade" link under headshot menu with sales@codestream.com for on-prem customers
- Improve performance and reduce memory usage by caching some expensive git operations

### Fixed

- Addresses [#301](https://github.com/TeamCodeStream/CodeStream/issues/301) &mdash; Creating Feedback Request fails
- Fixes an issue where, after adding a code comment in a pull request, the icon in the diff gutter would not appear immediately
- Fixes an issue where creating a pull request or feedback request from the WIP section didn't default to the correct repo
- Fixes an issue with "/dev/null" entries appearing in list of files when creating a pull request
- Fixes an issue with the Pull Requests section not immediately appearing if you open a GitHub or GitHub Enterprise repository

## [10.0.1] - 2020-10-16

### Fixed

- Fixes an issue where authentication with your code host would seem to fail if you didn't have a repo from that code host open in your IDE

## [10.0.0] - 2020-10-15

### Added

- Adds the ability to submit a review in a pull request without having to first start a review via a code comment
- Code Reviews have been renamed Feedback Requests to better reflect the fact that they are more informal, and are used more frequently, to get feedback on your work in progress throughout the development process
- Adds the ability to jump to your local version of a file from any comment in a pull request
- Adds two new ways to view changes in a pull request. Tree view, which is similar to the current List view, but organizes the files as they’d appear in a source tree. And Diff Hunks view, which is the same view you’re used to seeing on GitHub. List and Tree view provide full-file context, whereas Diff Hunks shows just the lines that changed.
- In any of the three views, mark any file as not viewed if you want to indicate to yourself that you need to come back to it again
- Adds a new Data Export tool, for team admins only, that dumps all code comments (including those done in a feedback request) in CSV format

### Changed

- All-new tree based UI persistently exposes everything you need access to, and everything you need to do
- The interface for commenting on code has been improved so that you’re clear on what code block, if any, has been selected. It’s also easier to add additional ranges.
- When there’s a diff between the code in a codemark and the version you have locally, the original version, the current version, and a diff are all included in the codemark. No need to open a separate diff.
- The Pull Requests section of the sidebar now includes a “Recent” section that shows you your five most recently created PRs, regardless of their current state.
- When reviewing a pull request and commenting on code that isn't part of the changeset, it's now clear that the comment will be added as a PR-level comment and not as part of the review (due to GitHub's limitations)
- When in spatial view of codemarks, there are now clearer indicators of when there are other codemarks above or below the fold

### Fixed

- Fixes an issue where the Work in Progress section would not update unless you first visited the Team tab

## [9.1.0] - 2020-10-6

### Changed

- Implemented Google's diff-match-patch as a fallback for maintaining the location of all markers and pull-request comments

### Fixed

- Fixes an issue with long delays in opening diffs in a code review
- Fixes an issue where the status of viewed files in a PR would get reset if you cancelled the submission of a comment
- Fixes an issue with codemarks being displayed at the top of a file rather than their correct location
- Fixes an issue preventing users from creating pull request comments on the last line of a file
- Fixes an issue that prevented you from closing a pull request from CodeStream
- Fixes an issue where you couldn't open a pull request diff immediately after opening the repo
- Fixes an issue where the "Rebase & merge" button in a PR wouldn't work without a reload

## [9.0.2] - 2020-9-28

### Fixed

- Fixes an issue with the GitHub Enterprise configuration step being skipped when connecting from the Pull Requests section of the Tasks tab
- Fixes an issue where you'd get an error about not having the repo open, when you actually did, when trying to comment on a pull request

## [9.0.1] - 2020-9-23

### Added

- Better error handling for the GitHub pull-request integration, particularly around OAuth issues
- Adds support for Kerberos when creating pull requests from CodeStream
- Pull requests now reflect require-reviewers status

### Changed

- Removed the 5-person team size limit for companies on CodeStream's Free plan

### Fixed

- Fixes an issue where the icon would not appear in the editor gutter right away for a newly created codemark
- Fixes an issue with opening a PR from a repo that you no longer have locally
- Fixes an issue with the caching of GitHub access tokens

## [9.0.0] - 2020-9-17

### Added

- Adds support for GitHub templates when creating a pull request
- Adds the ability to create custom GitHub queries to control which pull requests are displayed on the Tasks tab
- Adds the ability to quickly name a code review or pull request based on ticket name, branch name or commit message

### Changed

- Display of pull requests on the Tasks tab is now broken into sections for Waiting on My Review, Assigned to Me, and Created by Me
- By default, only pull requests associated with repos you have open in your IDE are display, but you also have the ability to show all pull requests
- Allows for the selection of remote branches when creating a PR
- On the Search tab you can now use multiple `tag` arguments to create an AND query
- When the Current File tab is in list view, multi-range codemarks are now only listed once
- When creating a codemark, we now remember the last state of the checkbox(es) for any non-member notifications
- Move cloud authentication options to the top of the signup page

### Fixed

- Fixes an issue with creating codemarks in cshtml files
- Fixes an issue with creating codemarks in a file in a renamed folder on the file system with a new name that varies only by case
- Fixes an issue where the position of codemarks could not be determined

## [8.3.7] - 2020-9-9

### Added

- Adds support for GitHub Enterprise to the new Pull Request integration (beta)
- Adds new keyboard shortcuts for creating pull/merge requests

### Fixed

- Fixes an issue with the repo matching strategy when viewing file diffs in a pull request
- Fixes an issue with an unexpected error when opening certain PRs
- Fixes an issue with CodeStream not correctly recognizing that you're already connected to GitHub when creating a PR
- Fixes an issue where, after opening a new repo, the list of repos didn't updating automatically when starting work on a ticket, creating a PR, or requesting a code review

## [8.3.6] - 2020-9-2

### Fixed

- Fixes an issue with codemarks not appearing on the Current File tab in certain instances

## [8.3.5] - 2020-9-1

### Added

- Adds support for managing GitHub (cloud only) pull requests and doing PR-based code reviews (BETA)

## [8.3.4] - 2020-8-27

### Fixed

- Fixes an issue related to certain upper-case paths
- Addresses [#257](https://github.com/TeamCodeStream/codestream/issues/257) &mdash; Visual Studio 2019 Extension code selection/range fails when path contains two or more spaces.

## [8.3.3] - 2020-8-21

### Fixed

- Fixes an issue with certain scenarios not suggesting appropriate default reviewers using the "authorship" model

## [8.3.2] - 2020-8-13

### Fixed

- Addresses [#224](https://github.com/TeamCodeStream/CodeStream/issues/234) &mdash; Bug with Code range function
- Fixes an issue with the handling of invalid Jira queries
- Fixes an issue with the display of newlines in comments when amending a code review
- Fixes an issue with the handling of renamed files in a code review
- Fixes an issue when editing a codemark with no code block

## [8.3.1] - 2020-8-6

### Fixed

- Fixes an issue where lower case paths were being used in git operations

## [8.3.0] - 2020-8-3

### Added

- Adds the ability to sign into CodeStream with GitLab and Bitbucket
- Adds the ability to jump to a file from the Changed Files section of a code review, in addition to opening the diff
- Adds the ability to upgrade to a paid plan from under the ellipses menu

### Changed

- Team admin capabilities have been relocated to under the ellipses menu for easier access
- Code review progress now survives a reload of your IDE, and is tracked separately for each review update

### Fixed

- Fixes an issue with creating a pull request in projects located inside a subgroup
- Fixes an issues with renamed files in a code review

## [8.2.0] - 2020-7-21

### Added

- Adds the ability to do in-IDE code reviews
- Adds the ability to create custom JQL queries to filter the list of Jira tickets
- Adds self-serve payments when subscribing to CodeStream
- Adds a spinner/indicator when diffs are being calculated as a result of new commits being added to a code review

### Changed

- Improved UX when creating a Jira ticket from CodeStream
- Jira tickets now use approropriate icons based on the ticket type
- Improved "start work" UX, particularly around creating a branch
- When creating a blame map (team admins only) you can now select from a drop-down list of emails
- Improved the display of modals throughout the service
- Search box is not displayed in the "What are you working on?" section if there are no tickets listed
- Restructured the initial landing page in the extension to make things clearer for people signing up

### Fixed

- Fixes an issue where you weren't able to adjust notification settings if your on-prem installation didn't have outbound email configured
- Fixes an issue where illegal characters weren't being stripped out of the name when creating a branch

## [8.1.4] - 2020-7-16

### Added

- Adds the ability to specify your time zone via your Profile page

### Fixed

- Fixes an issue where diffs would be missing when amending a review with pushed commits
- Fixes an issue with extraneous blank lines getting added to code blocks in comments on a code review
- Addresses [#208](https://github.com/TeamCodeStream/CodeStream/issues/208) &mdash;[Object object] error when trying to submit a large review
- Fixes an issue that would allow you to submit a code review before the list of changed files updated based on changes to the selection of commits
- Fixes the broken "skip this" link in the "What are you working on?" section of the Tasks tab

## [8.1.3] - 2020-7-13

### Fixed

- Fixes an issue where you'd get an endless spinner trying to enter an invitation code

## [8.1.2] - 2020-7-9

### Added

- Adds the ability to update your status on Slack when selecting a task to start work on
- Adds the ability to create pull requests in Bitbucket Server
- Adds the ability to select tickets from Jira and Jira Server, and update their statuses when you start work
- Adds a dismissable banner when CodeStream is set up in an editor group instead of its own pane
- Adds ticket status to the display of tickets in "What are you working on?"
- Adds the display of local commits to the Work In Progress section of the Tasks tab

### Changed

- Changed the name of the Work Items tab to Tasks
- Changed the UI for selecting commits to be included in a code review to make it clear that they have to be sequential
- Removed the ability to set a keybinding for individual codemarks
- Improved the UI for selecting a base branch when creating a feature branch from CodeStream
- Reviews in the Open Reviews section of the Tasks tab are now displayed in descending order

### Fixed

- Overall performance improvements when opening files
- Fixes an issue with a source file opening when you hover over a code block in the activity, while CodeStream resides in the editor group
- Fixes an issue with creating a codemark when opening the form while the permalink form is still in view
- Fixes an issue with the Loading spinner display when connecting to an issue tracking service via the Tasks tab
- Fixes an issue where the board/list dropdowns didn't have a default selection when creating an issue on Trello
- Fixes an issue where the form to amend a review would not be displayed fully in view
- Fixes an issue where the blue + button was sometimes still accessible when a modal was being displayed

## [8.1.1] - 2020-7-3

### Added

- Adds the ability to search tickets in the "What are you working on" section of Work Items
- Adds the ability to create an ad-hoc work item or create a ticket on your issue-tracking service
- Adds a button to refresh the list of tickets from your issue tracking service

### Changed

- Simplified the form for creating branch templates for team admins
- The Open Reviews section on the Work Items tab now includes reviews that you requested in additon to reviews assigned to you

### Fixed

- Fixes an issue with a banner not being displayed when you have no connectivity
- Fixes an issue with the wrapping of your status display on the Team tab

## [8.1.0] - 2020-7-1

### Added

- Adds a new Work Items tab that summarizes everything on your plate, including open code reviews, your work in progress, and your backlog from your issue tracker

### Changed

- The + menu has moved from the top navigation to the bottom-right of the CodeStream pane

## [8.0.1] - 2020-6-23

### Added

- Adds "Start Work" support for GitHub Enterprise, Gitlab Self-Managed, and Jira subtasks

### Fixed

- Fixes an issue that caused you to land on Getting Started after every reload or sign-in

## [8.0.0] - 2020-6-22

### Added

- Adds the ability to "start work" by selecting a ticket (Trello, Jira, etc.), moving it to the appropriate in-progress state, and automatically creating a feature branch
- Adds support for creating PRs in Bitbucket (cloud)
- Adds the ability to create add an upstream branch when creating a PR

## [7.4.2] - 2020-6-20

### Added

- Adds the ability to create a pull request on GitHub or GitLab (cloud or on-prem) once a code review has been approved
- Adds a more granular Help submenu
- If your CodeStream email doesn't match your git email, you can now map your git email to your CodeStream email
- Code ownership can also be reassigned as part of assigning reviewers in a code review

## [7.4.1] - 2020-6-9

### Fixed

- Fixes an issue where the current user would be added as a suggested reviewer in a code review

## [7.4.0] - 2020-6-8

### Added

- Adds the ability to notify people via email about codemarks or code review assignments, even if they aren't yet on your CodeStream team

### Changed

- Icons for creating codemarks now appear when you hover in the gutter, or select code in your editor, on most top-level pages and not just on the Current File tab
- Change request titles at the top of a code review now link to the referenced codemark isntead of marking the request complete
- Entry of invite codes is now on the initial page in the extension to make it easier for teammates to join

### Fixed

- Fixes an issue where opening a code review via permalink or from Slack would result in an error in the IDE

## [7.3.1] - 2020-6-5

### Fixed

- Fixes an issue preventing authentication with GitHub

## [7.3.0] - 2020-5-29

### Added

- Adds the ability to ammend a code review with new code changes

### Fixed

- Addresses [#195](https://github.com/TeamCodeStream/CodeStream/issues/195) &mdash; .codestreamignore should accept directory/wildcard/regex exclusions

## [7.2.6] - 2020-5-22

### Fixed

- Fixes an issue that prevented signup via GitHub

## [7.2.5] - 2020-5-21

### Added

- Adds support for authentication with Okta for CodeStream On-Prem installations

## [7.2.4] - 2020-5-19

### Added

- Adds the ability to react to posts with emoji
- Adds the display of the server URL to the bottom of the initial page in the extension, for the benefit of on-prem installations

### Changed

- Expose strictSSL requirement setting for Cloud installations
- Improved display of nested replies in a code review's thread

### Fixed

- Fixes an issue where reviews of uncommitted changes in branches containing unpushed commits include the changes from those commits
- Fixes several performance issues associated with the git watcher
- Fixes an issue with flashing headshots on the Search tab when the editor is scrolled

## [7.2.2] - 2020-5-15

### Changed

- Team tab now provides invite codes for on-prem installations running without outbound email
- PR toggle on the Current File tab is suppressed for on-prem installations not using https

### Fixed

- Addresses [#187](https://github.com/TeamCodeStream/CodeStream/issues/187) &mdash; Git error with empty file
- Addresses [#158](https://github.com/TeamCodeStream/CodeStream/issues/187) &mdash; Can't paste HTML tags
- Fixes an issue where editing a reply removed any formatting
- Fixes an issue where pasted HTML would get rendered in a reply

## [7.2.1] - 2020-5-6

### Added

- Adds new profile pages, accessible by clicking on headshots throughout CodeStream

### Changed

- If you don't have a given repo open when performing a code review you are now able to locate it on disk
- Warning about not having a commit when performing a code review now automatically goes away once you get the commit
- Code review form now automatically recognizes when files are stages or commits are pushed

### Fixed

- Addresses [#181](https://github.com/TeamCodeStream/CodeStream/issues/181) &mdash; Prevent spawning of external git diff tools
- Fixes an issue with repo selection not always being correct the very first time you request a code review
- Fixes an issue where warning about unsaved changes when requesting a code review only display on Windows
- Fixes issues with Esc not always closing various modals and panels
- Fixes an issue with the default code review title not updating when you switched repos
- Fixes an issue where a code review would incorrectly indicate that it included uncommitted local changes

## [7.2.0] - 2020-4-28

### Added

- Adds the ability to require all reviewers assigned to a code review to approve it individually
- Adds the ability for admins to control code review approval requirements
- Adds the ability for adds to control if/how reviewers are suggested for code reviews

### Changed

- The status dropdown and ellipses menu for a code review or issue codemark in the activity feed have been consolidated
- Headshots for issue and code review assignees are now displayed at the right side of activity feed entries
- Truncates the display of the review title when viewing a code review diff
- Updated copy on first extension page to clarify the Create vs Join team choice
- Increased the contrast of menu backgrounds for easier visibility

### Fixed

- Addresses [#178](https://github.com/TeamCodeStream/CodeStream/issues/178) &mdash; Incorrect Jira URL
- Fixes an issue with permanently excluded files appearing in a code review
- Fixes an issue with new or deleted files not being identified as such in code reviews
- Fixes an issue with the ellipses menu missing for closed code reviews
- Fixes an issue where long code review names would render poorly
- Fixes an issue where live-view hovers on the Team tab wouldn't handle large amounts of content

## [7.1.1] - 2020-4-20

### Fixed

- Fixes an issue that omitted the number of changes for modified files in certain code reviews

## [7.1.0] - 2020-4-20

### Added

- Adds new integrations with GitHub Enterprise and GitLab Self-Managed that leverage personal access tokens and no longer require your instance to be publicly accessible
- Adds the ability to send invitation codes on your own in case CodeStream invitation emails are being blocked by your organization
- Adds a way to clear the search box on the Filter & Search tab
- Adds the ability to remove a previously connected Jira Server host

### Changed

- General UI improvements to code reviews, including a warning about open change requests, clearer button copy, etc.

### Fixed

- Fixes an issue where the Submit button on the codemark form was not responsive
- Fixes an issue where new files are still listed in "modified files" even if saved and staged changes are not selected
- Fixes an issue where canceling a review results in the re-rendering of the review form

## [7.0.2] - 2020-4-14

### Fixed

- Fixes an issue with codemarks not appearing in the Current File view for uncommitted files

## [7.0.1] - 2020-4-10

### Added

- Adds the ability to change your email address
- Adds a new guided tour for new users
- Adds a new consolidated Integrations page, simplifying the ellipses menu
- Adds the ability to add a profile photo by specifying a URL
- Adds the ability to remove an invited user from the team
- Adds a list of suggested invitees based on git commit history (for team admins only)

### Changed

- Creating a codemark via the plus menu will now recognize if you have a block of code selected in the editor

### Fixed

- Fixes an issue with assignees not being added to tickets created on Jira
- Fixes an issue with sharing very large posts to Slack

## [7.0.0] - 2020-4-3

### Added

- Code review functionality is no longer in private beta and is now available for all teams
- Adds new "Live View" of what your teammates are working, including warnings about potential merge conflicts
- Adds warnings to the top of the Current File view when a teammate is editing the same file or if there's a potential merge conflict
- Addresses [#162](https://github.com/TeamCodeStream/CodeStream/issues/162) &mdash; Adds admin capabilities and team settings
- Adds the ability for an admin to rename the team
- Adds the ability for an admin to assign/remove admin privileges
- Adds the ability for an admin to remove people from the team
- Adds the ability for an admin to control Live View usage for the team
- Adds the ability for users to change their username
- Adds the ability for users to change their full name
- Adds the ability for users to cancel their accounts

### Changed

- Changes status bar entry from "Sign in..." to "CodeStream" when user is signed out
- Prevents the creation of codemarks when viewing a non-code review diff

### Fixed

- Fixes [#160](https://github.com/TeamCodeStream/CodeStream/issues/160) &mdash; Blank CodeStream pane after starting up VSC
- Fixes [#166](https://github.com/TeamCodeStream/CodeStream/issues/166) &mdash; Error creating codemarks
- Fixes [#168](https://github.com/TeamCodeStream/CodeStream/issues/168) &mdash; Can't post issues to GitHub
- Fixes an issue with the diff for a new file added to a code review being blank

## [6.5.1] - 2020-4-1

### Fixed

- Fixes an issue receiving real-time events for on-prem customers

## [6.5.0] - 2020-3-31

### Added

- Adds the ability to sign into CodeStream with GitHub

## [6.4.0] - 2020-3-27

### Added

- Adds the ability to email and desktop notifications on/off separately
- Adds confirmation message after submitting a code review, or a codemark with no associated code block

### Changed

- When viewing a codemark the entire code block is now clickable and will open the given file

## [6.3.3] - 2020-3-24

### Added

- Mentions on CodeStream now flow through to Slack if there's a match on email address or username
- Adds the ability for the CodeStream panel to react to editors changing their zoom level

### Fixed

- Fixes an issue with the Compare and Apply buttons not appearing right away when there's a diff

## [6.3.2] - 2020-3-19

### Fixed

- Fixes an issue with codemarks getting created without a code block when the file path included Cyrillic characters
- Fixes an issue with codemarks getting created without a code block when the team contained replies from Slack users that weren't a member of the team

## [6.3.1] - 2020-3-17

### Fixed

- Fixes an issue with the "Open & Assigned to Me" filter not including issue codemarks

# [6.3.0] - 2020-3-10

### Added

- Adds the ability to create an issue not connected to a block of code via the + menu in the global nav

### Changed

- More robust Filter & Search tab with an improved UI, [advanced search syntax](https://github.com/TeamCodeStream/CodeStream/wiki/Filter-and-Search), and the ability to save custom filters
- More readable activity feed UI, with author/action separated out from each card

### Fixed

- Fixes an issue sharing to Slack when there are spaces in the remote URL

## [6.2.0] - 2020-2-19

### Added

- Adds the ability to share codemarks to Microsoft Teams

### Fixed

- Fixes an issue with access tokens expiring for the Jira integration

## [6.1.0] - 2020-2-3

### Added

- Adds the ability to create additional CodeStream teams from the ellipses menu in the top nav

### Changed

- The pull-request integrations will now display comments from open PRs if you are on either the source or destination branches

## [6.0.1] - 2020-1-27

### Fixed

- Fixes [#146](]https://github.com/TeamCodeStream/CodeStream/issues/146) &mdash; Unclear that duplicated shortcut label means keychord
- Fixes an issue that could lead to degraded IDE performance when CodeStream is opened with very large source files
- Fixes an issue where the compose menu in the CodeStream pane would not persist if you switched files while code was selected

## [6.0.0] - 2020-1-14

### Added

- Adds a new Activity Feed to notify you about new codemarks and new replies to codemarks
- Adds the ability for CodeStream teams to optionally share codemarks to Slack, without requiring broad access to your workspace
- Adds the ability to share any existing codemark, including those created by teammates, to Slack
- Adds the ability to reply to codemarks from Slack via a "View Discussion & Reply" button
- Adds the ability to specify a default sharing destination on Slack per repo (look for gear menu at top of the channel-selection dropdown)
- Adds new codemark-centric email notifications, which allow you to post replies by simply replying to the email
- Adds new notification settings under the ellipses menu in the top nav
- Adds the ability to manually follow/unfollow individual codemarks to control notifications
- Adds the ability to create a codemark via the "+" button in the top nav, where the code block is optional
- Adds a new Team tab to the top nav where you can invite teammates and see those already on the team
- Adds repo name to the display of codemarks

### Changed

- Assignment of an issue (excluding those shared externally) is now treated like a mention so that the assignee is notified

### Fixed

- Fixes [#139](]https://github.com/TeamCodeStream/CodeStream/issues/139) &mdash; GitHub PR comments not showing up

## [5.2.5] - 2019-12-20

### Fixed

- Fixes an issue with repo matching on startup

## [5.2.4] - 2019-12-19

### Added

- Adds a roadblock to let people know when CodeStream can't connect due to possible proxy issues

### Changed

- The form to create a codemark is now keyboard navigable

### Fixed

- Fixes an issue with creating codemarks that include blank line at the end of a file
- Fixes a broken link on the form to configure the GitLab Self-Managed integration

## [5.2.3] - 2019-11-27

### Added

- Adds support for self-signed SSL certificates for CodeStream On-Prem
- Adds display of CodeStream version number at the bottom of the ellipses menu

### Fixed

- Fixes an issue with very large codemarks not being displayed on Slack
- Fixes an issue with "Open on GitHub" buttons not accounting for .com-githubHandle remote syntax

## [5.2.2] - 2019-11-19

### Added

- Adds support for merge request comments from GitLab via the "PR" toggle on the Current File tab

### Changed

- When you cancel the creation of a codemark you are now prompted to confirm the action<
- By default, codemarks are now displayed as glyphs in the editor even when the Current File tab is selected

### Fixed

- Fixes an issue where the CodeStream entries in the lightbulb menu were duplicated
- Fixes an issue with the display of codemarks, as well as the codemark creation form, near the bottom of a file
- Fixes an issue where Slack DMs sometimes weren't available for sharing a codemark

## [5.2.0] - 2019-11-6

### Changed

- Repo matching logic now also includes commit hashes to better handle scenarios where teammates don't have a common remote URL for the same repo

### Fixed

- Fixes an issue where the codemark compose form and the newly-created codemark would briefly appear at the same time
- Fixes an issue where the current codemark was available for selection as a related codemark

## [5.1.0] - 2019-10-30

### Added

- Adds "Open in IDE", "Open on Web" and "Open on GitHub" (or Bitbucket/GitLab) links to issues created in external issue-tracking services (Jira, Trello, etc.)
- Adds the ability to manually reposition a codemark in cases where its location isn't automatically updated based on changes to the code

### Changed

- Changed the "Open on CodeStream" button in posts to Slack / MS Teams to "Open on Web"
- Improvements on codemark location calulation

### Fixed

- Fixes an issue with editing replies
- Fixes an issue with the dropdowns for Author and Branch on the Search tab not working
- Fixes an issue with the formatting of code blocks in issues created on YouTrack
- Fixes an issue where the "Open in IDE" button, for codemarks with multiple locations, would always open to the first location
- Fixes issues with "Open in IDE" from codemark pages in Firefox

## [5.0.1] - 2019-10-18

### Fixed

- Fixes an issue with codemarks disappearing after a commit

## [5.0.0] - 2019-10-16

### Added

- Add the ability to have multiple blocks of code, even across files/repos, associated with a single codemark
- Adds the ability to create issues on GitLab Enterprise

### Changed

- Codemarks can now be created and shared with your teammates even if you have unpushed commits
- Archived codemarks and resolved issues are now both controlled by the Archived filter on the Current File tab

### Fixed

- Fixes an issue where assignee wasn't being set correctly for issues created on GitLab
- Fixes an issue with the Asana integration where tasks weren't getting created

## [4.0.1] - 2019-10-2

### Added

- Adds the ability to filter codemarks on the Search tab by author, branch or commit

### Fixed

- Fixes an issue with changing issue-tracking services via the dropdown on the codemark form

## [4.0.0] - 2019-10-1

### Added

- Comments on merged-in pull requests from either GitHub or Bitbucket are now displayed right alongside the code blocks they refer to
- The ability to inject a codemark as an inline comment now has an option to include replies

### Fixed

- Fixes an issue where an issue codemark with a blank description would not get posted to Slack
- Fixes an issue where automated closed/opened messages for issue codemarks were not getting posted to Slack
- Fixes the sort order of Jira projects so that they are in alphabetical order
- Fixes an issue where the ability to star a reply was missing for Slack-connected teams
- Fixes an issue where Slack desktop notifications for codemarks would not include any content

## [3.0.1] - 2019-9-20

### Added

- Adds options to codemarks shared on Microsoft Teams to open a codemark on the web, in your IDE or, in the case of issues, on the issue-tracking service
- Adds new tophat to display of codemarks when the referenced code has been deleted

### Changed

- The bookmark codemark type has been removed, to be brought back at a future date

### Fixed

- Fixes [#117](]https://github.com/TeamCodeStream/CodeStream/issues/117) &mdash; Deleting codemark from Search tab causes unexpected error
- Fixes [#116](]https://github.com/TeamCodeStream/CodeStream/issues/116) &mdash; Creating codemark takes you out of List view
- Fixes [#115](]https://github.com/TeamCodeStream/CodeStream/issues/115) &mdash; Tab then enter discards codemark
- Fixes an issue with incorrect range being selected when code highlighted from the bottom up, and context menu used to create codemark
- Fixes an issue with permalinks being displayed on the Search tab

## [3.0.0] - 2019-9-17

### Added

- Adds a "Copy link" menu option for all codemarks so that they can be shared anywhere at any time
- Adds new web-based codemark pages to display codemarks shared via link
- Adds options to codemarks shared on Slack to open a codemark on the web, in your IDE or, in the case of issues, on the issue-tracking service
- When opening a codemark in your IDE from Slack or the web, if you don't happen to have the given repo open, CodeStream will still open the file for you automatically if you've ever opened that repo while signed into CodeStream. If not, we'll prompt you to open the repo, and we'll remember the location so you don't have to do that again.
- Adds a team switcher under the ellipses menu to switch between all of your CodeStream teams
- For on-prem installations, adds a check to make sure that the version of the API server running is compatible with the extension

### Fixed

- Fixes a rate limiting issue experienced by certain teams authenticating with Microsoft Teams
- Fixes an issue with deleting replies to a codemark
- Fixes an issue with syncing with YouTrack after authenticating
- Fixes an issue where a codemark created against unsaved code would not appear immediately

## [2.1.3] - 2019-9-10

### Fixed

- Fixes [#102](]https://github.com/TeamCodeStream/CodeStream/issues/102) &mdash; Unable to prevent auto-opening of the CodeStream pane

## [2.1.2] - 2019-9-9

### Added

- Addresses [#79](]https://github.com/TeamCodeStream/CodeStream/issues/79) &mdash; Adds branch info to codemark display when there's a diff
- Adds the ability to inject a codemark as an inline comment

### Fixed

- Fixes a rate limiting issue experienced by certain teams authenticating with Microsoft Teams
- Fixes an issue where replies to a codemark in a Slack-connected team would briefly appear twice
- Fixes an issue where there was no confirmation message when adding a user to a channel via slash command
- Fixes issues with support for Visual Studio 2019 16.3 Preview 2.0
- Fixes an issue with problems authenticating with Slack when adding real-time chat

## [2.1.1] - 2019-8-21

### Fixed

Activation issue on subsequent folder/solution opens

## [2.1.0] - 2019-8-20

### Added

- Adds Open Folder functionality
- Adds more robust tagging functionality, allowing you to create tags with any color / text label combination
- Adds the ability to link parts of your codebase by adding "related" codemarks to a parent codemark, and then using the links to jump around the codebases

### Changed

- Improved display of collapsed codemarks to make it easy to see tags, assignees, linked issues (i.e., on an external service like Jira), and the presence of replies or related codemarks
- All new cleaner display of expanded codemarks, with replies now displayed in descending order (i.e., most recent first)
- Consistent display of codemarks across all areas of CodeStream
- Smoother scrolling of codemarks in the CodeStream pane

### Fixed

- Fixes [#74](https://github.com/TeamCodeStream/CodeStream/issues/74) &mdash; Extension messes with default settings / LSP is changing the theme
- Fixes an issue with the positioning of the codemark form when creating a codemark at the bottom of the viewport
- Fixes an issue with not being able to change issue-tracking selection once Azure DevOps has been selected
- Fixes an issue with password reset in CodeStream on-prem

## [2.0.0] - 2019-8-1

### Added

- Adds issue-tracking integrations with Jira Server and GitHub Enterprise

### Changed

- Updates the UI for creating issues on external issue tracking services to allow you to be connected to multiple services at once and change the selection on an issue by issue basis
- Codemarks now appear immediately upon submission
- Trailing slashes are stripped off of the Server URL setting for on-prem installations

### Fixed

- Fixes an issue with not all DMs from Slack appearing in the conversation selector when creating a codemark
- Fixes an issue with a lack of notification when viewing a codemark in a file you don't have

## [1.3.4] - 2019-7-26

### Added

- Adds roadblocks when your extension is behind either a required or suggested version of CodeStream

### Fixed

- Fixes [#71](]https://github.com/TeamCodeStream/CodeStream/issues/71) &mdash; You can edit channel selection when editing via thread view

## [1.3.3] - 2019-7-17

### Fixed

- Fixes an issue where clicking on a codemrk from the Search tab or a stream would not open the corresponding source file

## [1.3.2] - 2019-7-16

### Changed

- Added a "Back" link below the password-reset form in case you change your mind

### Fixed

- Fixes [#70](]https://github.com/TeamCodeStream/CodeStream/issues/70) &mdash; Once joined more than one channel, I can't choose into which channel a comment should go to anymore
- Fixes an issue with repos managed by Bitbucket Server incorrectly being identified as being managed by Bitbucket cloud
- Fixes scrolling issues when creating and viewing longer codemarks

## [1.3.1] - 2019-7-10

### Added

- Password reset. Sorry it took so long!
- Enforcement of CodeStream's 30-day free trial, and 5-member limit for teams on the free plan

### Changed

- Optimizations to ipc between our processes and plugin startup

### Fixed

- Fixes an issue where scrolling in the CodeStream pane with the compose modal open would lose any information already entered
- Fixes an issue where a codemark could get posted as a reply to another codemark if you had thread view open
- Fixes a spacing issue on the Sign In page
- Fixes an issue with new UI not being applied to email confirmation and Team Name pages
- Fixes rendering issues with certain Slack bots when using Slack real-time channels

## [1.3.0] - 2019-6-26

### Added

- New Microsoft Teams integration allows you to share codemarks in your organization's existing channels. [Learn more.](https://www.codestream.com/blog/codestream-1-3)
- New Slack integration that reduces the amount of Slack that appears in CodeStream, with the full Channels tab now being optional

### Changed

- Updated the UI of CodeStream's signup flow
- Asana projects are now listed in alphabetical order for selection

### Fixed

- Fixes an issue where adding new lines in your editor exhibited poor performance
- Fixes an issue with code blocks in Trello cards not rendering properly, and not including the line numbers

## [1.2.0] - 2019-6-14

### Changed

- The Invite People page now only shows teammates from your Slack workspace that have signed up for CodeStream

### Fixed

- Fixes an issue that would cause an error when opening a Slack channel with Japanese characters in the name
- Fixes an issue where hovering over an expanded codemark wouldn't highlight the corresponding code block in the editor
- Fixes an issue with text in backticks not rendering properly
- Fixes an issue with new lines being displayed as html in posts on Slack
- Fixes an issue with new lines in codemark text causing display issues on the Search tab
- Fixes an issue with the Asana integration that was preventing projects from being listed
- Fixes an issue with invitation codes incorrectly expiring after 10 minutes
- Fixes an issue with editing a reply from a codemark's thread view

## [1.1.0] - 2019-6-4

### Changed

- Signup flow is now based in the IDE instead of on the web
- For CodeStream teams, invitations are now code-based allowing for quicker signup
- For Slack teams, invitation URLs have been simplified
- Clicking on a codemark in the editor gutter opens the codemark in the Current File tab in CodeStream

### Fixed

- Fixes [#60](]https://github.com/TeamCodeStream/CodeStream/issues/60) &mdash; can't delete codemark in vscode
- Fixes [#57](https://github.com/TeamCodeStream/CodeStream/issues/57) &mdash; Cygwin git support
- Fixes an issue with bookmark titles not being displayed on Slack
- Fixes an issue with code snippets added to a codemark via markdown not rendering
- Fixes an issue with CodeStream impacting typing performance in the editor

## [1.0.2] - 2019-5-22

### Fixed

- Fixes an issue that would cause an alert box to appear on Visual Studio load
- Fixes an issue where a new codemark sometimes wouldn't appear right away
- Fixes an issue where git repos with remote URLs containing port numbers would prevent codemarks from being displayed properly
- Fixes [#61](https://github.com/TeamCodeStream/CodeStream/issues/61) &mdash; Formatting issues with codemarks

## [1.0.1] - 2019-5-15

### Added

- Adds an integration with YouTrack issue tracking

## [1.0.0] - 2019-5-13

### Added

- Adds preemptive warnings about creating codemarks in files that aren't managed by Git, don't have remote URLs, or haven't been saved

### Fixed

- Fixes an issue with the wrapping of filename and line number information in the codemark form

## [0.53.0] - 2019-5-3

### Added

- CodeStream now integrates with Azure DevOps issue tracking

### Changed

- Improved startup performance and reliability
- CodeStream options are now grouped under a sub-menu in the editor context menu
- Improved performance in editor window when the Current File tab in CodeStream is selected
- When editing an issue codemark linked to an external service, assignees are read-only since they can't be edited from CodeStream

### Fixed

- Fixes an issue where archived codemarks were appearing in the gutter and scrollbar
- Fixes an issue where a codelens would be included when highlighting code on hover over a codemark
- Fixes an issue with button backgrounds missing in light mode
- Fixes an issue where codemarks would not be reflected in the editor scrollbar until the window was re-focused
- Fixes an issue with mentions posted in a reply not being treated as a mention in terms of badges and notifications
- Fixes an issue where CodeStream would not recognize when a source file wasn't selected or open
- Fixes an issue when changing the code selection with the codemark form already open
- Fixes an issue with editing posts from the conversation stream

## [0.52.1] - 2019-4-19

### Added

- Adds a guide to keyboard shortcuts in the default view of the Current File tab when there are no codemarks

### Changed

- Updated the Jira integration to accommodate the GDPR-related changes to the Jira Cloud REST APIs, which means that Jira assignees can no longer be mapped to a CodeStream user

### Fixed

- Fixes an issue that prevented users without Git installed from being able to sign in
- Fixes an issue that prevented the editing of replies
- Fixes an issue where the "Open in..." link in issue codemarks wouldn't work
- Fixes an issue where the Current File tab would not immediately recognize a newly opened source file
- Fixes an issue with the Current File tab not behaving properly with split windows or peek windows
- Fixes an issue with VS tool windows being recognized as source files

## [0.52.0] - 2019-4-11

### Added

- Adds a completely new view of codemarks that makes information much more accessible, with the ability to view and edit in-place. [Read more on our blog.](https://blog.codestream.com/index.php/2019/04/10/codestream-v0-52-new-codemarks-view/)
- Adds the ability to "star" a reply so that it's surfaced in the codemarks view
- Adds the ability to assign shortcuts to individual codemarks, allowing you to quickly jump around the codebase
- Adds a toolbar to the bottom of the Current File tab with filters to control whether or not you see completed issues or archived codemarks
- Adds clickable indicators to the toolbar to let you know when there are codemarks above/below your current view
- Archived codemarks and resolved issues are now displayed in a collapsed format in a new gutter at the right side of the CodeStream pane, with the ability to click to expand the display
- Adds a new header treatment for archived codemarks
- Scrolling the view of codemarks in the CodeStream pane will now scroll the source file as well
- Adds a quick overview of codemarks accessible via an info icon at the bottom-right of each codemark

### Changed

- The display of an expanded codemark only includes the code block, as well as the Compare and Apply links, if there’s a diff from what you have locally

### Fixed

- Fixes an issue where using the “selected conversations” filter on the Channels tab, with only a single channel selected, would cause codemarks to get shared to the wrong conversation
- Fixes an issue where a codemark would no longer render on CodeStream if the post was deleted via the Slack client
- Fixes an issue where archived and closed Slack conversations were appearing in the conversation selector when creating a codemark
- Fixes an issue that prevented an edited bookmark from being saved

## [0.51.1] - 2019-4-4

### Fixed

- Fixes a race condition in the extension that may result in an alert box when Visual Studio starts
- Fixes an issue with the Live Share integration not working under VS 2019

## [0.51.0] - 2019-4-2

### Changed

- Changes the `Ctrl+/` `Ctrl+/` shortcut to toggle the CodeStream pane
- Improves the Jira project search to ensure all projects are available for selection

### Fixed

- Fixes [#42](https://github.com/TeamCodeStream/CodeStream/issues/42) &mdash; VS Slack black text
- Fixes an issue with CodeStream causing laggy typing

## [0.50.0] - 2019-3-21

### Added

- Adds a Google Docs-like display of codemarks in the current file, where codemarks are displayed to the right of the source code and scroll up/down along with the source
- Adds a permalink codemark type for sharing a link to a specific block of code
- Adds the ability to close or re-open an issue from the codemark's thread view
- Adds an Archive option to a codemark’s gear menu to hide it when the Current File tab is selected (but it will still be shown on the Search tab)
- Adds [keyboard shortcuts](https://github.com/TeamCodeStream/CodeStream/wiki/Keyboard-Shortcuts) for creating a codemark after selecting some code
- Adds annotations to the editor scroll bar to indicate where codemarks exist in the source file

### Changed

- Opening the CodeStream pane is now much faster
- New icon-based global navigation
- When selecting a channel/DM to share a codemark, the list now honors the “selected conversations” filter from the Channels tab
- Context/lightbulb menus in the editor now have separate entries for creating a comment, issue, bookmark or permalink

### Fixed

- Fixes [#37](https://github.com/TeamCodeStream/CodeStream/issues/37) &mdash; Need to log in CodeStream on VS each time the computer is shutdown
- Fixes an issue with the wrong channel name being displayed at the top of the page when viewing a codemark
- Fixes an issue with links to join a Live Share session not being clickable
- Fixes an issue with “/cc” being include in codemarks shared on Slack when no one was mentioned

## [0.11.0] - 2019-02-15

### Added

- Adds support for network connections via proxies

### Fixed

- Fixes an issue with codemarks occasionally appearing on the wrong line
- Fixes an issue where CodeStream would incorrectly reload immediately after login
- Fixes an issue where the Submit/Cancel buttons would not render correctly when creating a codemark
