# Panels

Panels are a great way to contain and organize information on a page. They can be customized to signify different meanings by changing their background color or gradient.

### Usage
```js
import {Panel} from '@influxdata/clockface';
```
The entire Panel Family can be accessed by importing the parent `Panel` component:
```js
<Panel>
  <Panel.Header title="Cool Things">
  <Panel.Body>
    // Contents
  </Panel.Body>
</Panel>
```
We recommend using `Panel` in combination with `Grid` and `ComponentSpacer` to produce clean layouts.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
