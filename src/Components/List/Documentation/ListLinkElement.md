# ListItem with `linkElement` Prop

In some cases using `onClick` to handle click behavior is not ideal and you may want to use a link based approach. The `linkElement` prop is for just that use case.

### Usage

```tsx
import {List} from '@influxdata/clockface'
```

```tsx
<List.Item
  selected={true}
  value="Banana"
  color={ComponentColor.Primary}
  size={ComponentSize.Small}
  wrapText={false}
  title="A nice wholesome fruit"
  disabled={false}
  linkElement={<a href="url" />}
>
  Banana
</List.Item>
```

For best results do not pass an an element into `linkElement` with children. It is intended to replace the `<div />` as the outermost element while maintaining the same children already passed in to `ListItem`. If you need to attach a `ref` that is one of the only cases to use attributes of the passed in element.

### Example

<!-- STORY -->

### Gotchas

Because the element passed in to `linkElement` is cloned with a handful of props from `ListItem`, you may see attributes on the element getting replaced by attributes from `ListItem`. Please use `ListItem` as the source of truth for all attributes, if possible.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
