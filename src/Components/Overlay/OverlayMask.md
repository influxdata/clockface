# OverlayMask

The `OverlayMask` obscures the content beneath an overlay but only partially. This allows the user to maintain context in their workflow by seeing the previous step beneath the overlay.

### Usage
```tsx
import {Overlay} from '@influxdata/clockface'
```
All components in the `Overlay` family can be accessed from the single class import
```tsx
<Overlay.Mask gradient={Gradients.GundamPilot} />
```

If a `backgroundColor` is passed in it will override the `gradient` prop.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
