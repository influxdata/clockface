# Natural Language Form

`NaturalLanguage` is an alternative to the forms offered in the standard `Form` family. The set of components is intended to help construct forms that appear to read like a sentence, hence the name "Natural Language".

### Usage
```tsx
import {NaturalLanguage} from '@influxdata/clockface'
```
```tsx
<NaturalLanguage>
  // All forms must have at least 1 section
  <NaturalLanguage.Section>
    <NaturalLanguage.Element>
      // Elements are for wrapping components such as inputs, dropdowns, or radios
    </NaturalLanguage.Element>
    // Text is for adding in static text blocks between interactive elements
    <NaturalLanguage.Text text="Howdy" />
  </NaturalLanguage.Section>
  // The dismiss button is useful for removal of the entire form
  <NaturalLanguage.DismissButton />
</NaturalLanguage>
```

### Example
<!-- STORY -->


### Controlling the Layout

- Each `<NaturalLanguage.Section>` controls wrapping. If you want to ensure that some children always stay on separate lines use 2 sections
- Text elements are automatically sized based on their contents
- `<NaturalLanguage.Element>` can be set to a fixed width and also be set to take up a certain proportion of the width (for those familiar with flex box this will make sense). You can specify either property or both and the layout should work fine.
- The form will expand to fill the width of its parent, so we recommend giving the parent a fixed width. While you could place a `NaturalLanguage` form inside a fluid width parent, the results would be unpredictable and hard to control.

---

### Best Practices

This type of form looks best when each section is full so that the left and right edges of the form line up nicely. However if there are not enough items in the last section it is best to not force them to fill the space.

If you are not sure when to use `fixedWidth` or `proportionalSize` we recommend using proportional sizing for inputs (they are less affected by size changes) and fixed widths for dropdowns or radios.

---

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
