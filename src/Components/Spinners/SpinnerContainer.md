# SpinnerContainer

This component is intended to wrap a spinner and show it conditionally based on `RemoteDataState`. Using a spinner outside of this component may produce unexpected results.

### Usage
```tsx
import {SpinnerContainer} from '@influxdata/clockface'
```

The type of spinner can be controlled by passing in differente components into the `spinnerComponent` prop. We recommend using `TechnoSpinner`, `SparkleSpinner` or `WaitingText`, but if you have a custom spinner you could use that as well.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
