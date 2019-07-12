# Index List Header Cell

IndexListHeaderCells are intended to be the children of `<IndexList.Header />`. They can be accessed via the single `IndexList` import as a subclass.

### Usage
```tsx
import {IndexList} from '@influxdata/clockface'
```
```tsx
<IndexList.HeaderCell />
```

### Example
<!-- STORY -->

### Enabling Sorting

IndexListHeaderCells have some handy features that making sorting easier. First you will need a stateful component that wraps `IndexList`. This stateful component should have at least 3 pieces of state: 

| State Key | Type |  |
|:-----------------|:--------|----------------------------------------------------------------------------------|
| `sortKey` | `string` | The identifier for the currently sorted column, can be `null` if no sort applied |
| `sortDirection` | `Sort` | Keeps track of which direction sorting is happening in |
| `items` | `[]` | List of items; enables sorting and/or filtering |

Next, pass a handler function into each `<IndexList.HeaderCell />` you want to be sortable:

```tsx
private handleSort = (nextSort: Sort, sortKey: string): void => {
  this.setState({
    sortDirection: nextSort,
    sortKey,
  })
}
```
```tsx
<IndexList.HeaderCell onClick={this.handleSort} />
```

When a header cell is clicked it cycles to the next available sort state and passes that back. This ensures that sort states are cycled through in a consistent manner.

Make sure each each `<IndexList.HeaderCell />` receives state:

```tsx
const {sortKey, sortDirection, items} = this.state
```
```tsx
items.map(item => (
  <IndexList.HeaderCell
    sortKey={item.sortKey}
    sort={item.sortKey === sortKey ? sortDirection : null}
    // In this example the list is sorted by only one key at a time
  />
))
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
