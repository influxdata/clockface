# DraggableResizer

`DraggableResizer` is a handy container for situations in which you want to allow the user to control the layout a bit more. This component is best exemplified by the **Data Explorer** in InfluxDB 2.0. This component requires a stateful wrapper in order to work correctly. If you want to remember the handle positions beyond a refresh we recommend storing them in local storage.

### Usage
```tsx
import {DraggableResizer} from '@influxdata/clockface'
```
```tsx
<DraggableResizer>
  <DraggableResizer.Panel />
  <DraggableResizer.Panel />
</DraggableResizer>
```

### Example
<!-- STORY -->

### Implementation

The `handlePositions` prop controls how many as well as the positions of the handles. It is critical that the number of panels passed in is 1 more than the number of handles. While you could pass in a different component as a child, `DraggableResizer` works best when its children are of type `<DraggableResizer.Panel />`. Panels do not have any visible styling other than sizing. They are `position: relative` so to best style their contents we recommend placing `<div style={{position: 'absolute', overflow: 'hidden', width: '100%', height: '100%'}} />` as a child of each panel.

Setting up state:

```tsx
interface State {
  handlePositions: number[]
}
```
```tsx
this.state = {
  handlePositions: [
    0.25,
    0.5,
  ]
}
```

Setting up the drag handler:

```tsx
private handleChangePositions = (handlePositions: number[]): void => {
  this.setState({handlePositions})
}
```

And putting it all together:

```tsx
<DraggableResizer
  onChangePositions={this.handleChangePositions}
  handlePositions={this.state.handlePositions}
>
  // You want to have 1 more panel than number of handles
  <DraggableResizer.Panel>
    // Panels are position:relative to help facilitate styling of children
    <div style={{position: 'absolute', overflow: 'hidden', width: '100%', height: '100%'}} />
  </DraggableResizer.Panel>
  <DraggableResizer.Panel />
  <DraggableResizer.Panel />
</DraggableResizer>
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
