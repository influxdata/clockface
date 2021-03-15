# Publishing a new version of Clockface

Prerequisites:

1. You have an npmjs.com account (recommended to use your personal; not work email for this)
   - enable 2fa for your account (two factor authentication)
2. You have Administrator access to this repo on GitHub (you are able to push commits)
3. You have Permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
   - contact Bucky to be added if needed (if you just created an npm account, you need this)
   - anybody with an admin permission can add through here: https://www.npmjs.com/settings/influxdata/teams/team/developers/users
4. tags can only be created on the `master` branch, and the working tree must be clean
   - clean means: all the files in the current directory are being managed by git
     (or are being intentionally ignored via .gitignore) and the most recent version of the file has been committed

Steps

1. run the publish script in the root of the repo: `./publish`
   - When the script asks you for the version; put in the new number ('2.6.4' for example (without the quotes))
2. push up the new tag: `git push`
3. update the changelog: [Changelog](https://github.com/influxdata/clockface/blob/master/CHANGELOG.md) file
   - push it up after changing (can do a pr without an issue, if you already know your pr
     number this change can be included in the actual pr with the actual changes too)
4. update the release page on github: https://github.com/influxdata/clockface/releases

   - ensure it is pointing at the correct release/commit

5. next; test it via e2e tests on the ui project; there should only be one pull request in each new version

   - bump up the version number in package.json in the ui project

6. Optional:

Then upload the latest Storybook docs to the GitHub pages site by running:

```
yarn run publishStorybook
```

_NOTE:_ Do not manually change the version in `package.lock`, the publish script will increment automatically
