# Danger Zone Panel

In some cases there are actions you really want to warn a user about. This is an example of a Panel that makes use of the `gradient` prop to communicate the danger.

### Usage
```tsx
import {Panel} from '@influxdata/clockface'
```
```tsx
<Panel>
  <Panel.Header />
  <Panel.Body gradient={Gradients.DocScott}>
    // Contents
  </Panel.Body>
</Panel>
```

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
