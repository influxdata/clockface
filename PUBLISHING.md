# Publishing a new version of Clockface

Ensure that 

- You have administrator access to this repo on GitHub
- You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
- You are logged into Yarn (`yarn login`)
- You are on `master` and the working tree is clean
- The `CHANGELOG.md` is up to date for the latest release

Then run the publish script in the root of the repo:
NOTE: Do not manually change the version in `package.lock`, the publish script will increment automatically
```
./publish
```

Then upload the latest Storybook docs to the GitHub pages site by running:

```
yarn run publishStorybook
```

Then update the changelog with a header for the newest version:

```
# Changelog

### 0.0.1 (Unreleaased)

### 0.0.0

 - Change
 - Change
 - Change
```
