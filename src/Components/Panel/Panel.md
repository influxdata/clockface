# Panel

Panel is the parent component of the Panel Family; every member of the component family can be accessed from this single import. It is a container and requires children to be visible. We recommend using the members of the Panel Family to construct your panel.

### Usage
```tsx
import {Panel} from '@influxdata/clockface'

<Panel>

  // Children

</Panel>
```

### Customization

You can use the `ComponentSize` enum to scale the padding and header size of the entire panel. You can pass in a `backgroundColor` or `gradient` to control the colorization of the panel. If both props are passed in the `gradient` prop will override the `backgroundColor` prop.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
