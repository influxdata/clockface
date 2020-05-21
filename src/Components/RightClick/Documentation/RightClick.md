# RightClick

This is a compact and simple menu triggered by a right click event. This menu will replace the browser's default right click behavior, so consider this drawback when using `RightClick`. Similar to `Popover` and `Overlay` the menu is rendered using portals as a direct child of `<body />` to ensure it appears on top of everything else.

### Usage
```tsx
import {RightClick} from '@influxdata/clockface'
```
First you will need to create a `ref` for your trigger element:
```tsx
private triggerRef: createRef<HTMLDivElement>(null)
```
```tsx
<div ref={triggerRef}>Trigger Element</div>
<RightClick
  triggerRef={triggerRef}
  menu={() => <div />}
>
  <RightClick.MenuItem onClick={() => {
    // do the thing
  }}>Copy></RightClick.MenuItem>
  <RightClick.MenuItem onClick={() =>{
    // do the thing
  }}>Delete></RightClick.MenuItem>
</RightClick>
```

### Example
<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
