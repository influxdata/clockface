# Natural Language Form

This type of form is intended to read like a sentence, hence the name "Natural Language". This example makes use of a large variety of componets to achieve the design.

### Usage
```tsx
import {FlexBox, Panel, TextBlock, SelectDropdown, Input, DismissButton} from '@influxdata/clockface'
```

### Example
<!-- STORY -->


### Controlling the Layout

- Each `<FlexBox>` controls wrapping. If you want to ensure that some children always stay on separate lines use 2 spacers
- `<TextBlock />` elements are automatically sized based on their contents
- `<FlexBox.FlexChild>` can be set to a fixed width and also be set to take up a certain proportion of the width (for those familiar with flex box this will make sense). You can specify either property or both and the layout should work fine.
- The form will expand to fill the width of its parent, so we recommend giving the parent a fixed width. While you could place a natural language form inside a fluid width parent, the results would be unpredictable and hard to control.

---

### Best Practices

This type of form looks best when each section is full so that the left and right edges of the form line up nicely. However if there are not enough items in the last section it is best to not force them to fill the space.

If you are not sure when to use `grow` or `basis` we recommend using proportional sizing for inputs (they are less affected by size changes) and fixed widths for dropdowns or radios.

---

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
