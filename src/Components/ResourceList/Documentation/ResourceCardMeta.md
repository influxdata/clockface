# ResourceCardMeta

`ResourceListBody` is intended to be a child of `ResourceCard`. It can be accessed via the single `ResourceCard` import as a subclass. All children are wrapped in a `<div />` element to ensure proper styling. Because `ResourceListMeta` is an extension of `FlexBox`, all the flex box props are available minus `margin`, `stretchToFitWidth`, and `stretchToFitHeight`.

### Usage
```tsx
import {ResourceCard} from '@influxdata/clockface'
```
```tsx
<ResourceCard.Meta>
  // Children
</ResourceCard.Meta>
```

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
