# Index List Body

IndexListBody is intended to be the first child of `IndexList`, similar to `<tbody />` in a plain HTML table. It can be accessed via the single `IndexList` import as a subclass.

### Usage
```tsx
import {IndexList} from '@influxdata/clockface'
```
```tsx
<IndexList.Body>
  // List rows go here
</IndexList.Body>
```

IndexListBody requires a element (ideally `<EmptyState />`) be passed in to its `emptyState` prop. This element is rendered when the `children` prop becomes undefined or has length of 0. This can happen if a filtering mechanism is built into the list and no results match the query, in which case the empty state would communicate that to the user. The `columnCount` prop is passed into the `colSpan` atrribute of the empty state's container cell and ensures the empty state takes up the full width of the table.

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
