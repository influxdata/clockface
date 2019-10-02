# Table

Table is a simple extension of an HTML5 table. Composing a table should feel exactly the same, except there are some cool additional features such as easy control of padding, highlighting rows in different colors, and hover interactions. 

### Usage
```tsx
import {Table} from '@influxdata/clockface'
```
All `Table` family components can be accessed from the same class import:
```tsx
<Table>
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell />
      <Table.HeaderCell />
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell />
      <Table.Cell />
    </Table.Row>
  </Table.Body>
  <Table.Footer />
</Table>
```

### Example
<!-- STORY -->

### Coloring Rows

In some cases, such as highlighting an erroneous row of data, you may want to mark a row as having a certain state. You can pass in the `ComponentColor` data type into the `color` prop of each row:

```tsx
<Table.Row color={ComponentColor.Danger}>
  <Table.Cell />
  <Table.Cell />
  <Table.Cell />
</Table.Row>
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
