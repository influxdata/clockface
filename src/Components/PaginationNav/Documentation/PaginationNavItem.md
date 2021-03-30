# PaginationItem

The individual pages of the PaginationNav component. Clicking on it will navigate you directly to the clicked page.

### Usage

```tsx
import {PaginationNav} from '@influxdata/clockface'
```

```tsx
//If both direction and page provided, it defaults to direction
//Item with direction
<PaginationNav.Item
  direction={Direction.Left}
  size={'Medium'}
  isActive={false}
></PaginationNav.Item>
```

```tsx
//Item with page
<PaginationNav.Item
  page={'10'}
  size={'Medium'}
  isActive={false}
></PaginationNav.Item>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
