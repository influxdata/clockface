# Page Header

Used alongside `<Page.Contents />` to layout  page, this component is for containing the header of the page.

### Usage
```tsx
import {Page} from '@influxdata/clockface'
```
```tsx
<Page.Header>
  // Should always have left & right children, center is optional
  <Page.Header.Left />
  <Page.Header.Center />
  <Page.Header.Right />
</Page.Header>
```

If you are planning to use `<Page.Header.Center />` keep in mind it requires a fixed pixel width to be specified. The pixel width is used to ensure the center is actually centered.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
