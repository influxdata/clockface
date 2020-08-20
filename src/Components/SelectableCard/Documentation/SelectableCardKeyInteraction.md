# SelectableCard Keyboard Interactions

If you want users to be able to use a set of `SelectableCard`s via keyboard interactions you will have to do some manual setup:

- Give a unique `tabIndex` prop to each card
- Add a handler to the `onKeyPress` card (in addition to `onClick`)

### Usage

```tsx
import {SelectableCard} from '@influxdata/clockface'
```

```tsx
<SelectableCard
  id="myCardID"
  icon={IconFont.Checkmark}
  tabIndex={000}
  onClick={(id, e) => {
    // Toggle selected state
  }}
  onKeyDown={(id, e) => {
    // Toggle selected state
  }}
  selected={selected}
>
  Image goes here
</SelectableCard>
```

### Best Practices

Both `onClick` and `onKeyDown` expect functions with the first argument being `id`. So long as you pass something in to `id` it will be passed back in the event handlers. This will save you an anonymous function to handle this kind of thing. The second argument is the event object.

- `onClick` -> `e: MouseEvent<SelectableCardRef>`
- `onKeyDown` -> `e: KeyboardEvent<SelectableCardRef>`

```tsx
const handleKeyDown = (
  id: string,
  e: KeyboardEvent<SelectableCardRef>
): void => {
  // 32 is the keyCode for spacebar
  if (e.keyCode === 32) {
    addCardIDToSelected(id)
  }
}
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
