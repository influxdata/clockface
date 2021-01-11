# Publishing a new version of Clockface

Ensure that 

- You have administrator access to this repo on GitHub
- You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
- You are logged into Yarn (`yarn login`)
- You are on `master` and the working tree is clean
- The `CHANGELOG.md` is up to date for the latest release

Then run the publish script in the root of the repo:

*NOTE:* Do not manually change the version in `package.lock`, the publish script will increment automatically
```
./publish
```
You can follow `./publish` by either `patch`, `major`, or `minor`. If nothing is specified the default is `patch`
These terms are from [Semantic Versioning](https://semver.org/)

- `major` version when you make incompatible API changes,
- `minor` version when you add functionality in a backwards compatible manner, and
- `patch` version when you make backwards compatible bug fixes.

Then upload the latest Storybook docs to the GitHub pages site by running:

```
yarn run publishStorybook
```

Then update the [Changelog](https://github.com/influxdata/clockface/blob/master/CHANGELOG.md) with a header for the newest version:

```
# Changelog

### 0.0.1 (Unreleaased)

### 0.0.0

 - Change
 - Change
 - Change
```
