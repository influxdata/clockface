# NavMenuItem

The first tier of navigation items. It can optionally contain `NavMenu.SubItem`

### Usage
```tsx
import {NavMenu} from '@influxdata/clockface'
```
```tsx
<NavMenu.Item />
```

### React Router

Becuase we wanted to avoid having React Router as a dependency `NavMenuItem` and `NavMenuSubItem` make use of render props to allow `<Link />` elements to be passed in.
The `titleLink` and `iconLink` props should be passed the same element to ensure consistency:

```tsx
// Using anchor tags
<NavMenu.Item
  iconLink={className => <a href="http://www.myurl.com" className={className}><Icon /></a>}
  titleLink={className => <a href="http://www.myurl.com" className={className}>Item Title</a>}
/>
```
```tsx
// Using a router link
<NavMenu.Item
  iconLink={className => <a to="/pages/home" className={className}><Icon /></a>}
  titleLink={className => <a to="/pages/home" className={className}>Item Title</a>}
/>
```

### Creating Sub-Items

Simply pass in `<NavMenu.SubItem />` as children of `<NavMenu.Item />` and they will appear below the title link

### Styling

`<NavMenu.Item />` receives its styles by being a child of `<NavMenu />`

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
