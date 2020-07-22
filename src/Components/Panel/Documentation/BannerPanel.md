# BannerPanel

BannerPanel is a display component that can be used at the top of pages to convey information that's not as severe as an alert. It is a flat panel with no header or footer and an optional icon prop.

### Usage
```tsx
import {BannerPanel} from '@influxdata/clockface'

<BannerPanel>

  // Children

</BannerPanel>
```

### Customization

You can use the `ComponentSize` enum to scale the padding and header size of the entire Panel. You can pass in a `backgroundColor` or `gradient` to control the colorization of the panel. If both props are passed in the `gradient` prop will override the `backgroundColor` prop.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
