# Pagination

Pagination Nav is used for navigating through data that cannot be encapsulated within a single page.

### Usage

```tsx
import {PaginationNav} from '@influxdata/clockface'
```

```tsx
<PaginationNav.PaginationNav
  ref={paginationRef}
  totalPages={10}
  currentPage={1}
  pageRangeOffset={1}
  onChange={page => {
    someFunction(page)
  }}
  hideDirectionIcon={false}
  size={'Medium'}
  enableArrowPaginate={false}
></PaginationNav.PaginationNav>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
