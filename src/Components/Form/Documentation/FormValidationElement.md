# FormValidationElement

This component is intended to wrap a text input specifically and provides real time validation as the user types. 

### Usage

```tsx
import {Form, Input} from '@influxdata/clockface'
```

You will need to store form state somewhere, and optionally validation state.

```tsx
this.state = {
  inputValue: '',
  inputState: ComponentStatus.Default
}
```
```tsx
<Form.ValidationElement value={inputValue} validationFunc={handleValidation}>
  {status => <Input status={status} value={inputValue} onChange={handleChange} />}
</Form.ValidationElement>
```

### Constructing a Validation Function

Here's an example validation function:
```tsx
const handleValidation = (value: string): string | null => {
  if (value.trim() === '') {
    return 'This field cannot be empty'
  }

  if (value.length >= 21) {
    return 'Must be 20 characters or less'
  }

  return null
}
```

When the validation function returns a `string` it means there was an error, and the `string` is used as the error message. If the function returns `null` it means the value is valid.

### Example

*Note:* The validation will not fire on render, only until the user has typed in the input. This prevents inputs being rendered in error state before the user has had a chance to fill out the form.

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
