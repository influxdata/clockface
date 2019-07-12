# Index List Cell

IndexListCells are intended to be the children of `<IndexList.Row />`. They can be accessed via the single `IndexList` import as a subclass.

### Usage
```tsx
import {IndexList} from '@influxdata/clockface'
```
```tsx
<IndexList.Cell />
```

### Gotchas

- To control the width of a specific column pass in a `width` prop to the `<IndexList.HeaderCell />` associated with that column
- In order for `revealOnHover` to work correctly the children of the cell must not be a text node and the cell must be a child of `<IndexList.Row />`

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
