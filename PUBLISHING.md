# Publishing a new version of Clockface

Prerequisites:

1. You have an npmjs.com account (recommended to use your personal; not work email for this)
1. You have two factor authentication (2FA) turned on for your npm account. See [additional steps](#2fa-requirement-and-procedures)
1. You have Administrator access to this repo on GitHub (you are able to push commits)
1. You have Permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
   - contact Bucky to be added if needed (if you just created an npm account, you need this)
   - anybody with an admin permission can add through here: https://www.npmjs.com/settings/influxdata/teams/team/developers/users
1. tags can only be created on the `master` branch, and the working tree must be clean
   - clean means: all the files in the current directory are being managed by git
     (or are being intentionally ignored via .gitignore) and the most recent version of the file has been committed
1. Consider bumping the version in package.json when you create your feature. This way, the release page points to the code being released. To see an example, click the git hash on [this giraffe release (not ideal)](https://github.com/influxdata/giraffe/releases/tag/v2.7.2) and then click the git hash on [this giraffe release (ideal)](https://github.com/influxdata/giraffe/releases/tag/v2.7.5)
1. If a new component is created, export it by adding the path of this new component in [src/index.ts](https://github.com/influxdata/clockface/blob/master/src/index.ts)

Steps

1. run the publish script in the root of the repo and pass in the new version: `./publish 2.7.3`
1. push up the new tag: `git push`
1. update the changelog: [Changelog](https://github.com/influxdata/clockface/blob/master/CHANGELOG.md) file
   - push it up after changing (can do a pr without an issue, if you already know your pr
     number this change can be included in the actual pr with the actual changes too)
1. update the release page on github: https://github.com/influxdata/clockface/releases

   - ensure it is pointing at the correct release/commit

1. next; test it via e2e tests on the ui project; there should only be one pull request in each new version

   - bump up the version number in package.json in the ui project

1. Optional:

Then upload the latest Storybook docs to the GitHub pages site by running:

```
yarn run publishStorybook
```

_NOTE:_ Do not manually change the version in `package.lock`, the publish script will increment automatically

# 2FA Requirement and Procedures

To publish, you must have two factor authentication turned on for your npm account. For assistance setting this up, visit [npm's official docs on this topic](https://docs.npmjs.com/configuring-two-factor-authentication).

Additionally, npm recently updated the way they recognize 2FA during publishing. If you have not done so previously for any other libraries, you may need to set up a publishing token by doing the following. After these steps are taken, then you will be able to publish successfully using the steps outlined [above](#publishing-a-new-version)

1. Log in to npmjs.org
1. Click on your image avatar in the corner
1. Select **Access Tokens**
1. Click on the button **Generate New Token**
1. Name the token and select type: Publish
1. Click Generate Token when ready
1. Copy the token string - _**this is your only chance to copy this string**_
1. Go to your project's local repository
1. Create a **.npmrc** file (if necessary) at the root of the repository
1. Append this line in the .npmrc file:  
   `//registry.npmjs.org/:_authToken=<access_token>`
1. Replace \<access_token\> with the token string
