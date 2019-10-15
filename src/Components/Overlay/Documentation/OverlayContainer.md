# OverlayContainer

This component is a wrapper for the three overlay content components: `Header`, `Body`, and `Footer`. The container will grow wider until it hits the specified `maxWidth` prop. At the very least you should have `<Overlay.Header />` as a child because an overlay without a header is likely confusing.

### Usage
```tsx
import {Overlay} from '@influxdata/clockface'
```
All components in the `Overlay` family can be accessed from the single class import
```tsx
<Overlay.Container maxWidth={600}>
  // Header, Body, or Footer go here
</Overlay.Container>
```

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
