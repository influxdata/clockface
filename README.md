# Clockface

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo
[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.com/package/@influxdata/clockface
[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://github.com/influxdata/clockface

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A React + Typescript UI Kit for building Chronograf and other Time Series visualization applications.

[Documentation](https://influxdata.github.io/clockface)

### Usage

```js
npm install @influxdata/clockface
```
Import the Clockface stylesheet to your React app's `index.jsx` file
```js
import '@influxdata/clockface/dist/index.css'
```

### Milestones

- Version 1.0
  - All components defined in InfluxDB's local Clockface folder have been ported to this repo
  - InfluxDB no longer uses locally defined Clockface components
  - InfluxDB's local Clockface folder is deleted

