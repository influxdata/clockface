# DapperScrollbars

DapperScrollbars is a wrapped and pre-styled version of [react-scrollbars-custom](https://github.com/xobotyi/react-scrollbars-custom) that replaces default browser scrolling functionality. This component does not expose all the props of `react-scrollbars-custom` but will eventually.

### Usage
```tsx
import {DapperScrollbars} from '@influxdata/clockface'
```

There are essentially 2 main ways to use this component:

1. **Fixed** - Give the scrollable area a specific height & width, let the content determine whether scrolling happens

2. **AutoSize** - Give the scrollable area a maximum height & width, let the container grow with the based on content until the maximum size is reached.

### Example of Fixed Scrolling
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
