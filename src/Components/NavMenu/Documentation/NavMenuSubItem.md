# NavMenuSubItem

The second tier of navigation items

### Usage
```tsx
import {NavMenu} from '@influxdata/clockface'
```
```tsx
<NavMenu.SubItem />
```

### React Router

Becuase we wanted to avoid having React Router as a dependency `NavMenuItem` and `NavMenuSubItem` make use of render props to allow `<Link />` elements to be passed in.
The `titleLink` and `iconLink` props should be passed the same element to ensure consistency:

```tsx
// Using anchor tags
<NavMenu.Item titleLink={className => <a href="http://www.myurl.com" className={className}>Item Title</a>} />
```
```tsx
// Using a router link
<NavMenu.Item titleLink={className => <a to="/pages/home" className={className}>Item Title</a>} />
```

### Styling

`<NavMenu.SubItem />` receives its styles by being a child of `<NavMenu.Item />`

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
