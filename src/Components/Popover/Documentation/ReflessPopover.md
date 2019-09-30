# ReflessPopover

This composed version of a `Popover` is for when:

- You don't want to deal with a `ref` to use the `Popover` component
- Your layout will not be disrupted by having your trigger element wrapped in a `<div />`

### Usage

```tsx
import {
  ReflessPopover,
  PopoverPosition,
  PopoverInteraction,
} from '@influxdata/clockface'
```

```tsx
<ReflessPopover
  position={PopoverPosition.Above}
  showEvent={PopoverInteraction.Hover}
  hideEvent={PopoverInteraction.Hover}
  contents={() => <div />}
>
  // Trigger element goes here
</ReflessPopover>
```

##### Ref Type

```tsx
import {ReflessPopoverRef} from '@influxdata/clockface'
```

### Example

<!-- STORY -->

### Is Your Layout Looking Funky?

In most cases you can fix the layout by applying inline styles to the trigger wrapper `<div />` via the `triggerStyle` prop. If that is not working for you we suggest using a regular `Popover` component to avoid layout disruption.

### Trying to Make a Custom Popover?

By default `Popover` will apply reasonable default styles to the dialog to save you time. However you may be building a more specialized design and want more control. Rather than fight the default styles you can simply turn them off:

```tsx
<ReflessPopover enableDefaultStyles={false} />
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
