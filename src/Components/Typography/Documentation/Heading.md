# Heading

This is a all-purpose element for rendering text headings in your UI.

### Usage
```tsx
import {Heading, Typeface, HeadingElement, FontWeight} from '@influxdata/clockface'
```
```tsx
<Heading
  element={HeadingElement.H1}
  type={Typeface.Rubik}
  weight={FontWeight.Bold}
  underline={false}
  selectable={true}
/>
```

The `element` prop controls the HTML element in addition to the appearance of the Heading. However there may be times when you want the HTML element to diverge from the appearance of the element. In this case you can use the optional `appearance` prop to control the appearance of the element independently of the HTML element type.

### Example
<!-- STORY -->

---

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
