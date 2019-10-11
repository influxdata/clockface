# NavMenu

This is primary navigation component for Clockface applications. It is intentionally minimalistic to maximize screen space for application features. On small screens it moves to the top.

### Usage
```tsx
import {NavMenu} from '@influxdata/clockface'
```
```tsx
<NavMenu>
  <NavMenu.Item>
    <NavMenu.SubItem />
  </NavMenu.Item>
  <NavMenu.Item />
</NavMenu>
```

### As Part of an Application Layout

We recommend using `NavMenu` in combination with `AppWrapper` and `Page` to have all the basics for an application:
```tsx
<AppWrapper>
  <NavMenu />
  <Page />
</AppWrapper>
```

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
