# OverlayHeader

All overlays should have a header, which contains a title and an optional dismiss button. Best practice is to always have a dismiss button in the header and a cancel button in the footer, since users will tend to look for one or the other as a way out. However in some cases you may want to force the user to make a decision and in that context dismissing may be ambiguous.

### Usage
```tsx
import {Overlay} from '@influxdata/clockface'
```
All components in the `Overlay` family can be accessed from the single class import
```tsx
<Overlay.Header title="Holla!" />
```

If a function is passed into `onDismiss` the dismiss button is rendered. This component will stretch to fill the width of its parent.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
