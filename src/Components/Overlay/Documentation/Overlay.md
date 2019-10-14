# Overlay

Overlays (also known as Modals) are a way to focus the user on a specific task without causing them to lose context by rendering a new page or view. They can help lessen the impact of a workflow with many steps by focusing the user on each step rather than hitting them with all the steps at once. Overlays are also useful as a quick way to get confirmation from the user before executing a dangerous action.

### Usage
```tsx
import {Overlay} from '@influxdata/clockface'
```
All components in the `Overlay` family can be accessed from the single class import
```tsx
<Overlay visible={true}>
  <Overlay.Container maxWidth={600}>
    <Overlay.Header />
    <Overlay.Body>
      // Contents go here
    </Overlay.Body>
    <Overlay.Footer>
      // Action buttons go here
    </Overlay.Footer>
  </Overlay.Container>
</Overlay>
```

### Example
<!-- STORY -->

### Managing State

An overlay requires a stateful wrapper in order to work properly. At the very least you need a single state key, and handlers for showing/hiding the overlay:

```tsx
interface State {
  isOverlayVisible: boolean
}
```
```tsx
this.state = {
  isOverlayVisible: false,
}
```
```tsx
private handleShowOverlay = (): void => {
  this.setState({isOverlayVisible: true})
}
```
```tsx
private handleHideOverlay = (): void => {
  this.setState({isOverlayVisible: false})
}
```

In this case you would pass `isOverlayVisible` into the `visible` prop of your `Overlay`.

### Customization

One of the key components rendered by `Overlay` is the "mask" which obscures contents below the overlay. `Overlay` has a render prop called `renderMaskElement` which is designed to receive a component of type `<Overlay.Mask />` but you could pass in whatever you want so long as the CSS includes the same positioning rules. The mask has a specific gradient by default but you can choose your own gradient using the `Gradients` data type:

```tsx
import {Overlay, Gradients} from '@influxdata/clockface'
```
```tsx
<Overlay renderMaskElement={<Overlay.Mask gradient={Gradients.GundamPilot} />}>
  // Container goes here
</Overlay>
```

### Gotchas

In order for the overlay to appear on top of other UI components it makes use of CSS fixed positioning and a high z-index. If you are having trouble with an overlay check out the positioning and z-index styles of the component wrapping the overlay.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
