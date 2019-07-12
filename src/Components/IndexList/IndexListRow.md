# Index List Row

IndexListRows are intended to be the children of `<IndexList.Body />` and contain children of type `<IndexList.Cell />`. They can be accessed via the single `IndexList` import as a subclass.

### Usage
```tsx
import {IndexList} from '@influxdata/clockface'
```
```tsx
<IndexList.Row />
```

### Gotchas

Even though this component offers a `disabled` prop it is purely cosmetic. Children of this component must be disabled as well.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
