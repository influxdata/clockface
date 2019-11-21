# AutoInput

This component is a composed combination of `SelectGroup` and `Input`. It is useful when you want to toggle between automatically selecting a value and having the user input a value. It is essentially a simple toggleable show/hide container for an input of your choosing; we recommend using a regular `Input` component.

### Usage
```tsx
import {AutoInput, AutoInputMode, Input} from '@influxdata/clockface'
```
```tsx
<AutoInput mode={AutoInputMode.Custom} inputComponent={
  <Input />
} />
```

`AutoInput` requires a stateful wrapper to make it work fully. The `onModeChange` prop returns the updated `AutoInputMode` which should make it fairly straightforward. The state of the input can be managed independently,

### Example
<!-- STORY -->


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
