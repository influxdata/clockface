# Page Header

Used alongside `<Page.Contents />` to layout page, this component is for containing the header of the page.

### Usage

```tsx
import {Page} from '@influxdata/clockface'
```

```tsx
<Page.Header>
  // Should always have left & right children, center is optional
  <Page.HeaderLeft />
  <Page.HeaderCenter />
  <Page.HeaderRight />
</Page.Header>
```

If you are planning to use `<Page.HeaderCenter />` keep in mind it requires a fixed pixel width to be specified. The pixel width is used to ensure the center is actually centered.

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
