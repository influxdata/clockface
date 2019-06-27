# Publishing a new version of Clockface

Ensure that 


- You have administrator access to this repo on GitHub
- You have permissions to publish to the [influxdata](https://www.npmjs.com/org/influxdata) organization on npm
- You are logged into Yarn (`yarn login`)
- You are on `master` and the working tree is clean

Then run the publish script in the root of the repo:

```
./publish
```

Then upload the latest Storybook docs to the GitHub pages site by running:

```
yarn run publishStorybook
```
