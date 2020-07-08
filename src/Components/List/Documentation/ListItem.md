# ListItem

`ListItem` is part of the `List` component family and can be accessed from the single import.

### Usage

```tsx
import {List} from '@influxdata/clockface'
```

```tsx
<List.Item
  selected={true}
  onClick={handleClick}
  value="Banana"
  color={ComponentColor.Primary}
  size={ComponentSize.Small}
  wrapText={false}
  title="A nice wholesome fruit"
  disabled={false}
>
  Banana
</List.Item>
```

### Example

<!-- STORY -->

### Want icons, dots, or checkboxes?

Also includes in the `List` family are a hanful of components to embellish `ListItem` with. Children of `ListItem` are laid out horizontally, so if you want something on the right side of your `ListItem` place that node last. See more examples in the **Examples** section

Example with a checkbox:

```tsx
<List.Item>
  // Type accepts "checkbox" or "dot"
  <List.Indicator type="checkbox">
  Item text
</List.Item>
```

Example with an icon:

```tsx
<List.Item>
  <List.Icon glyph={IconFont.Checkmark}>
  Item text
</List.Item>
```

### Gotchas

Any child nodes of type `string` are automatically wrapped in an element intended to manage text wrapping and layout alongside indiciators

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
