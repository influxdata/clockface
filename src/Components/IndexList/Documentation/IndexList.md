# Index List

IndexList is the parent component of the IndexList Family; every member of the component family can be accessed from this single import. It is a container and requires children to be visible. We recommend using the members of the IndexList Family to construct your panel. This component family is essentially a pre-styled table with some added fanciness.

### Usage
```tsx
import {IndexList} from '@influxdata/clockface'
```

IndexList is structured just like a table is:

```tsx
<IndexList>
  <IndexList.Header>
    <IndexList.HeaderCell />
    <IndexList.HeaderCell />
  </IndexList.Header>
  <IndexList.Body>
    <IndexList.Row>
      <IndexList.Cell />
      <IndexList.Cell />
    </IndexList.Row>
  </IndexList.Body>
</IndexList>
```

### Common Patterns

In the InfluxDB UI it is common to have the last column in each row contain actions that pertain to the resource being listed (ex: Delete, Clone, Export). Since these buttons can be loud and distracting when there are many rows we take advantage of the `revealOnHover` prop in `<IndexList.RowCell />`. This allows the contents of that cell to appear when the entire row is hovered.

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
