# Color Picker

Color Picker is a pre-composed component for easy color selection. The component expands to fill the available area, so use the parent element to control the size of the Color Picker.

### Usage
```jsx
import {ColorPicker} from '@influxdata/clockface'
```

### Example
<!-- STORY -->

### Customization

By default the Color Picker uses the Clockface palette but you can display any selection of colors. The Color Picker's `colors` props takes an array of `Color` objects.

```jsx
interface Color {
  hex: string
  name: string
}
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
