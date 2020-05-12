# Dismissable Panel

Here is an example of a panel that utilizes the `onDismiss` prop. Dismissable panels are a great way to announce new features or changes in the experience to the user.

### Usage
```tsx
import {Panel} from '@influxdata/clockface'
```
```tsx
<Panel>
  <Panel.Header onDismiss={() => {
    // do the thing
  }}>
  <Panel.Body>
    // Contents
  </Panel.Body>
</Panel>
```

We recommend having the function passed in to `onDismiss` remove the panel from the DOM.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
