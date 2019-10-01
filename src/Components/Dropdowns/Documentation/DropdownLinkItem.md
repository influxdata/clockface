# Dropdown Link Item

DropdownLinkItem is part of the Dropdown component family and can be accessed from the single import. It is intended for a specific use case: placing `<Link />` or `<a />` elements inside a dropdown item and having them receive the same styling. This element receives most of its styles from being a child of `<Dropdown.Menu />`.

### Usage
```tsx
import {Dropdown} from '@influxdata/clockface'

<Dropdown.LinkItem />
```
It is not recommended to pass children other than `<Link />` or `<a />` into this component.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
