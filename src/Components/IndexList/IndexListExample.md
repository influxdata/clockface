# Example: Simple Table

Here's a simple example of an IndexList in action

### Usage
```tsx
import {IndexList} from '@influxdata/clockface'
```

### Common Patterns

In the InfluxDB UI it is common to have the last column in each row contain actions that pertain to the resource being listed (ex: Delete, Clone, Export). Since these buttons can be loud and distracting when there are many rows we take advantage of the `revealOnHover` prop in `<IndexList.RowCell />`. This allows the contents of that cell to appear when the entire row is hovered.

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
