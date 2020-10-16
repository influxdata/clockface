# TimeInput

An input specifically for typing time format values, which are defined as a number followed by a time unit (w, d, h, m, s).

### Usage

```tsx
import {TimeInput} from '@influxdata/clockface'
```

Unlike standard inputs the `onChange` prop is typed to pass back just a string. If you want to capture the raw event object, it is passed back as the second argument in `onChange`

### Example

<!-- STORY -->

### Customize Units

You could potentially use this component for units other than time. Use the `units` prop to pass in an array of different units as strings. By default it is set to `['s', 'm', 'h', 'd', 'w', 'mo']`s

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
