# Color Picker

Color Picker is a pre-composed component for easy color selection. The component expands to fill the available area, so use the parent element to control the size of the Color Picker.

### Usage
```tsx
import {ColorPicker} from '@influxdata/clockface'
```

### Example
<!-- STORY -->

### Validation
By default the input will validate the `color` prop passed in as a hexcode. If you want to accept `rgb` values or other color formats pass in a custom `validationFunc` prop. Validation functions should return either an error message (as a string) or `null` in the case that the inputted value is valid.

### Customization
By default the Color Picker uses the Clockface palette but you can display any selection of colors. The Color Picker's `colors` props takes an array of `Color` objects.

```tsx
interface Color {
  hex: string
  name: string
}
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
