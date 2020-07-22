# ListDivider

`ListDivider` is part of the `List` component family and can be accessed from the single import. Hence the name this component is useful for dividing the contents of `List` into sections.

### Usage

```tsx
import {List, ComponentSize} from '@influxdata/clockface'
```

```tsx
<List.Divider size={ComponentSize.Small} text="Section Name" />
```

If the `text` prop is left empty the divider will render as a thin horizontal line. Should the specified `text` exceed the width of the `List` the divider will truncate it with ellipsis.

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
