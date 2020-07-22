# ThresholdBar

ThresholdBar is a component for displaying percentage in a graphical manner.

### Usage
```tsx
import {ThresholdBar} from '@influxdata/clockface'

<ThresholdBar />
```

### Defining Thresholds

The ThresholdBar comes with a default set of thresholds at 0%, 70%, & 90%. You can specify your own thresholds by passing an a array of objects to the `thresholds` prop. Each object should have a `floor` value (exclusive), `color` for the text/bar, and a `gradient` for the bar.

```tsx
const thresholds = [
  {
    floor: 0,
    color: InfluxColors.Honeydew,
    gradient: Gradients.HotelBreakfast
  },
  {
    floor: 25,
    color: InfluxColors.Thunder,
    gradient: Gradients.CaliforniaCampfire
  },
  {
    floor: 50,
    color: InfluxColors.Curacao,
    gradient: Gradients.SavannaHeat
  },
]
```

### Color Customization

You can pass in a `Color` or `Gradient` to control the colorization of the ThresholdBar. If both props are passed in the `Gradient` prop will override the `Color` prop on the bar and the color will only apply to the text.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
