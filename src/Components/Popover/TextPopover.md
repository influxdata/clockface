# Text Popover

This is a simplified version of `Popover` that doesn't require any customization of the `contents` prop and assumes you just want to display plaintext or text elements. See the `Popover` documentation for more detail on implementing this components.

### Usage
```tsx
import {TextPopover, PopoverPosition, PopoverInteraction} from '@influxdata/clockface'
```
```tsx
<TextPopover
  position={PopoverPosition.Above}
  showEvent={PopoverInteraction.Hover}
  hideEvent={PopoverInteraction.Hover}
  text="Howdy friend!"
>
  <div>Trigger Element</div>
</TextPopover>
```

The popover dialog will initially appear according to the `position` prop, but if for some reason the dialog would go off the viewport it will be intelligently repositioned to appear wholly in the viewport.

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
