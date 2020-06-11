# Popover

Popovers are similar to Overlays in that they are triggered by a (usually) small UI element and then offer more information or actions to the user. Popovers are different becuase they generally are easier to dismiss and the actions they offer to not demand as much focus. Popovers are also smaller and less intrusive.

This component can be configured to operate entirely on hover interactions which, makes it essentially a tooltip. The popover dialog will initially appear according to the `position` prop, but if for some reason the dialog would go off the viewport it will be intelligently repositioned to appear wholly in the viewport.

### Usage
```tsx
import {Popover, PopoverPosition, PopoverInteraction} from '@influxdata/clockface'
```
First you will need to create a `ref` for your trigger element:
```tsx
private triggerRef: createRef<HTMLDivElement>()
```
```tsx
<div ref={triggerRef}>Trigger Element</div>
<Popover
  triggerRef={triggerRef}
  position={PopoverPosition.Above}
  showEvent={PopoverInteraction.Hover}
  hideEvent={PopoverInteraction.Hover}
  contents={() => <div />}
/>
```

The requisite event handlers are automatically bound to the trigger element. Make sure your trigger element does not have event handlers that will conflict with `Popover`.


### Included Dismiss Button

if you want to have an explicit dismiss button in the top right corner of the popover, you can use this component:
```tsx
<Popover
  contents={onHide => (
    <div>
      <Popover.DismissButton onClick={onHide} />
    </div>
  )}
/>
```
Make sure to use the available `onHide` argument and pass it into your dismiss button

### Example
<!-- STORY -->

### Want more control over style within a Popover?

By default `Popover` will apply reasonable default styles to the dialog to save you time. However you may be building a more specialized design and want more control. Rather than fight the default styles you can simply turn them off:
```tsx
<Popover enableDefaultStyles={false} />
```

### Gotchas

By default all `Popover` instances will be in focus when they appear so that pressing the `Escape` key dismisses them. If a `Popover` has its state controlled externally via the `visible` prop then the `Escape` key listener is disabled in deference.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
