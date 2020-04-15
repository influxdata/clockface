# Tabs

`Tabs` are a great way to offer navigation within a page or component. They can be customized to suit a variety of use cases.

### Usage
```tsx
import {Tabs} from '@influxdata/clockface'
```
```tsx
<Tabs>
  <Tabs.Tab />
  <Tabs.Tab />
  <Tabs.Tab />
</Tabs>
```

### Responsive Tabs (aka Dropdown mode)

If you are looking to use `Tabs` in a responsive layout or even exclusively on a small screen simply pass in a number to the `dropdownBreakpoint` prop. When the browser width drops below the `dropdownBreakpoint` the component will render as a space-efficient dropdown instead of tabs. There are a couple props that only apply if the breakpoint exists:

- `dropdownAlignment` controls the horizontal alignment of the dropdown content
- `dropdownLabel` is what appears in the dropdown as the selected item, which should be the same as the label of your active tab

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
