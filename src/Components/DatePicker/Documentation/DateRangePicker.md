# Date Range Picker

This is a composed date picker that allows users to select a date range with a start and stop time.

### Usage

```jsx
import {DateRangePicker} from '@influxdata/clockface'
```

```jsx
<DateRangePicker
  timeRange={{
    upper: '1234567890',
    lower: '1234567890',
    seconds: 0,
    format: 'YYYY-MM-DD HH:mm:ss.SSS',
    label: 'my label',
  }}
  onSetTimeRange={() => {
    // do the thing
  }}
/>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
