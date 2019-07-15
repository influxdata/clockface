# DraggableResizerPanel

`DraggableResizerPanel` is a member of the `DraggableResizer` component family and can be accessed from the single DraggablePanel import. It receives its styling by being a child of `DraggableResizer`. 

### Usage
```tsx
import {DraggableResizer} from '@influxdata/clockface'
```
```tsx
<DraggableResizer.Panel />
```

*Note:* because `DraggableResizer` is using a no-wrap flexbox layout scheme, `DraggableResizerPanel` can become distorted because it can't shrink below the size of its children. To get around this we recommend styling a dive inside the panel as such:

```tsx
<DraggabelResizer.Panel>
  <div style={{position: 'absolute', overflow: 'hidden', width: '100%', height: '100%'}}>
    // Panel contents go here
  </div>
</DraggableResizer.Panel>
```

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
