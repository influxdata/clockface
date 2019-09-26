# Panel Header

Panel Headers are best used to denote the title of a panel. They can be accessed via the single `Panel` import as a subclass.

### Usage
```tsx
import {Panel} from '@influxdata/clockface'
```
```tsx
<Panel.Header>
  <Panel.Title>Title!</Panel.Title>
  // Additional children such as a button or dropdown
</Panel.Header>
```

### Customization

We recommend using `<Panel.Title />` as the child element, but you can also pass in whatever you want. `PanelHeader` makes use of `FlexBox` so the positioning scheme can be controlled using the same props.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
