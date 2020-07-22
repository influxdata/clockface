# List

List is the parent component of the List Family; every member of the component family can be accessed from this single import. The List family offers a set of components that can be composed to display items in lists, hence the name. It is generic enough to work with selectable lists or static lists. `List` pairs especially well with `Popover`

### Usage

```tsx
import {List} from '@influxdata/clockface'
```

```tsx
<List style={{width: '250px', height: '100%'}}>
  <List.Item>Hey there,</List.Item>
  <List.Item>It's me</List.Item>
  <List.Divider />
  <List.Item>Your pal List!</List.Item>
</List>
```

### Scrolling

Use the `style` prop to control scrolling. By default `List` will fill the width of its parent, but we recommend giving it at least a `width` and `height` style.

### Customization

List children can be customized individually and are composable to encourage extension.

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
