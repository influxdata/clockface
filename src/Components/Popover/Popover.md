# Popover

Popovers are similar to Overlays in that they are triggered by a (usually) small UI element and then offer more information or actions to the user. Popovers are different becuase they generally are easier to dismiss and the actions they offer to not demand as much focus. Popovers are also smaller and less intrusive.

This component can be configured to operate entirely on hover interactions which, makes it essentially a tooltip.

### Usage
```tsx
import {Popover, PopoverPosition, PopoverInteraction} from '@influxdata/clockface'
```
```tsx
<Popover
  position={PopoverPosition.Above}
  showEvent={PopoverInteraction.Hover}
  hideEvent={PopoverInteraction.Hover}
  contents={() => <div />}
>
  <div>Trigger Element</div>
</Popover>
```

The popover dialog will initially appear according to the `position` prop, but if for some reason the dialog would go off the viewport it will be intelligently repositioned to appear wholly in the viewport.

### Example
<!-- STORY -->

### Customizable Interactions

In most cases `Popover` works great with symmetric hide and show events. However in some cases you make want to have a popover appear with little effort, but demand more attention to dismiss. For example, a tutorial popover may have a "Next" button inside it that dismisses the popover, and queues the next. In order to achieve this you can take advantage of the `Popover`'s `contents` render prop:

```tsx
<Popover
  showEvent={PopoverInteraction.Click}
  hideEvent={PopoverInteraction.None}
  initiallyVisible={true}
  contents={onHide => (
    <div>
      // Tutorial text goes here
      <Button onClick={onHide} text="Next" />
    </div>
  )}
>
  <div>Trigger Element</div>
</Popover>
```

### Gotchas

The popover dialog makes use of `position: fixed` and `z-index: 9999` to ensure it is never obscured. In order to keep the dialog positioned next to the trigger the component listens for scroll and resize events while the popover is visible. This causes the dialog to re-render more often, which may be troublesome depending on what kind of component you render as the contents.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
