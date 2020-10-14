# TimeInput

An input specifically for typing time format values, which are defined as a number followed by a time unit (w, d, h, m, s).

### Usage

```tsx
import {TimeInput} from '@influxdata/clockface'
```

Unlike standard inputs the `onChange` prop is typed to pass back just a string. If you want to capture the raw event object, it is passed back as the second argument in `onChange`

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
