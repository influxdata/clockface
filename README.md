# Clockface

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A React + Typescript UI Kit for building Chronograf and other Time Series visualization applications.

Documentation: https://influxdata.github.io/clockface

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

### Patterns

#### Component Families

Components with sub-components are sub-classed to improve readablity of code and ease of use.
Family parent is the only component in the family to import a stylesheet and all styles are namespaced accordingly.
Style namespacing is largely based on BEM.

Example:

```
import {Garden} from '@influxdata/clockface'

<Garden> // Family Parent
  <Garden.Fence />
  <Garden.PlanterBox />
</Garden>
```

You can tell these are all related because of the `Garden` family namespace

```
.garden {
  display: flex;
}

.garden--fence {
  color: white;
}

.garden--planter-box {
  flex: 1 0 50%;
}
```

#### Common Prop Types

Clockface offers a variety of Types to make customizing the UI kit simple. For example, any component that can be rendered in different colors takes the `ComponentColor` type. Use of these common prop types throughout the UI kit ensures consistency.
