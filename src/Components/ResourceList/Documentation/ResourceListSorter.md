# ResourceListSorter

`ResourceListSorter` is a sortable header intended for use as a child of `ResourceListHeader`. It can be accessed via the single `ResourceList` import as a subclass.

### Usage
```tsx
import {ResourceList} from '@influxdata/clockface'
```
```tsx
<ResourceList.Sorter />
```

### Example
<!-- STORY -->

### Enabling Sorting

`ResourceListSorter`s have some handy features that making sorting easier. First you will need a stateful component that wraps `ResourceList`. This stateful component should have at least 3 pieces of state: 

| State Key | Type |  |
|:-----------------|:--------|----------------------------------------------------------------------------------|
| `sortKey` | `string` | The identifier for the currently sorted column, can be `null` if no sort applied |
| `sortDirection` | `Sort` | Keeps track of which direction sorting is happening in |
| `items` | `[]` | List of items; enables sorting and/or filtering |

Next, pass a handler function into each `<ResourceList.Sorter />` you want to be sortable:

```tsx
private handleSort = (nextSort: Sort, sortKey: string): void => {
  this.setState({
    sortDirection: nextSort,
    sortKey,
  })
}
```
```tsx
<ResourceList.Sorter onClick={this.handleSort} />
```

When a sorter is clicked it cycles to the next available sort state and passes that back. This ensures that sort states are cycled through in a consistent manner.

Make sure each each `<ResourceList.Sorter />` receives state:

```tsx
const {sortKey, sortDirection, items} = this.state
```
```tsx
items.map(item => (
  <ResourceList.Sorter
    sortKey={item.sortKey}
    sort={item.sortKey === sortKey ? sortDirection : null}
    // In this example the list is sorted by only one key at a time
  />
))
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
