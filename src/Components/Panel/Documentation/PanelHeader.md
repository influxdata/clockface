# Panel Header

Panel Headers are best used to denote the title of a panel. They can be accessed via the single `Panel` import as a subclass. `PanelHeader` extends `FlexBox` so the child layout can be controlled using the same props.

### Usage
```tsx
import {Panel} from '@influxdata/clockface'
```
```tsx
<Panel.Header>
  <h2>Title!</h2>
  // Additional children such as a button or dropdown
</Panel.Header>
```

### Titling

We recommend using any of the HTML header elements as a panel title. As of version `1.0.7` `PanelTitle` is deprecated.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
