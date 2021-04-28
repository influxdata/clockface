# Publishing a new version of Clockface

Prerequisites:

1. You have an npmjs.com account (recommended to use your personal; not work email for this)
   - enable 2fa for your account (two factor authentication)
1. You have Administrator access to this repo on GitHub (you are able to push commits)
1. You have Permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
   - contact Bucky to be added if needed (if you just created an npm account, you need this)
   - anybody with an admin permission can add through here: https://www.npmjs.com/settings/influxdata/teams/team/developers/users
1. tags can only be created on the `master` branch, and the working tree must be clean
   - clean means: all the files in the current directory are being managed by git
     (or are being intentionally ignored via .gitignore) and the most recent version of the file has been committed
1. Consider bumping the version in package.json when you create your feature. This way, the release page points to the code being released. To see an example, click the git hash on [this giraffe release (not ideal)](https://github.com/influxdata/giraffe/releases/tag/v2.7.2) and then click the git hash on [this giraffe release (ideal)](https://github.com/influxdata/giraffe/releases/tag/v2.7.5)

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
