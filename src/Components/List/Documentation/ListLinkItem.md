# ListLinkItem

`ListLinkItem` is part of the `List` component family and can be accessed from the single import. It is intended as an alternative to `ListItem` when you need to use `<Link />` or `<a />` elements instead of `onClick` behavior.

### Usage

```tsx
import {List} from '@influxdata/clockface'
```

```tsx
<List.LinkItem>
  <a href="#">Item Text</a>
</List.LinkItem>
```

It is not recommended to pass children other than `<Link />` or `<a />` into this component. Any components that you would normally pass in as children pass in as children of the `<Link />` or `<a />` element instead

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
