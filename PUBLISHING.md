# Publishing a new version of Clockface

#### Prepublishing

- Create a branch titled `bump-version-0.0.0` (insert version number)
- Increment the package version in `package.json`
- Add a header for the next version in `CHANGELOG.md`
- Build the documentation site via `npm run build-storybook`
- Merge `bump-version-0.0.<your version number>` into master

#### Publishing
- Be a member of the NPM organization `influxdata`
- Run `npm publish` from your CLI
