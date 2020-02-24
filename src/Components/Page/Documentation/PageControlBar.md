# PageControlBar

Used alongside `<Page.Contents />` to layout page, this component is for containing the header of the page.

### Usage

```tsx
import {Page} from '@influxdata/clockface'
```

```tsx
<Page.ControlBar>
  // Should always have left & right children, center is optional
  <Page.ControlBarLeft />
  <Page.ControlBarCenter />
  <Page.ControlBarRight />
</Page.ControlBar>
```

If you are planning to use `<Page.ControlBarCenter />` keep in mind it requires a fixed pixel width to be specified. The pixel width is used to ensure the center is actually centered.

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
