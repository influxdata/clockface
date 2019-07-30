# AutoInput

This component is a composed combination of `Radio` and `Input`. It is useful when you want to toggle between automatically selecting a value and having the user input a value.

### Usage
```tsx
import {AutoInput} from '@influxdata/clockface'
```
```tsx
<AutoInput />
```

NOTE: The `inputMin` and `inputMax` props only make sense if you are also passing in `inputType={InputType.Number}`. The `inputMaxLength` prop only works when `inputType={InputType.Text}`.

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
