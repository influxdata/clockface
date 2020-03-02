# TreeNav

This is primary navigation component for Clockface applications. It is the most flexible and discoverable component to handle navigation needs.

### Usage
```tsx
import {TreeNav} from '@influxdata/clockface'
```
```tsx
<TreeNav
  expanded={false}
  headerElement={<></>}
  userElement={<></>}
  bannerElement={<></>}
>
  <TreeNav.Item id="a" label="A">
    <TreeNav.SubMenu>
      <TreeNav.SubItem id="a1" label="A1" />
      <TreeNav.SubItem id="a2" label="A2" />
      <TreeNav.SubItem id="a3" label="A3" />
    </TreeNav.SubMenu>
  </TreeNav.Item>
  <TreeNav.Item id="b" label="B" />
  <TreeNav.Item id="c" label="C" />
</TreeNav>
```

### As Part of an Application Layout

We recommend using `TreeNav` in combination with `AppWrapper` and `Page` to have all the basics for an application:
```tsx
<AppWrapper>
  <TreeNav />
  <Page />
</AppWrapper>
```

### Example
<!-- STORY -->

### Links vs onClick Behavior

Items and SubItems in the `TreeNav` family support both approaches to click behavior. If you are using the `<Link />` component provided by react router we recommend passing that into the `linkElement` render prop. It is implemented this way so that the `<Link />` element can recieve the proper classnames without you needing to manually keep them in sync.

Alternatively you can use the `onClick` prop, but keep in mind if you pass in both the `linkElement` prop will supercede the `onClick` prop.

### Handling Expand & Collapse Behavior

`TreeNav` optionally supports two modes: expanded and collapsed. You can have the menu be fixed in either state but if you want the user to be able to toggle between the two states you will have to manage that state externally.

Use the `onToggleClick` and `expanded` props to enable to functionality.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
