# FormElement

This is the basic building block for laying out forms. It is designed to be generic and work with any component as a child, though it is most commonly used with `Input`.

### Usage

```tsx
import {Form} from '@influxdata/clockface'
```
```tsx
<Form.Element label="Enter # of Puppies">
  <Input status={status} value={inputValue} onChange={handleChange} />
</Form.Element>
```

### Accessibility

If you are using `FormElement` with `Input` as a child and want the input to render as a child of `<label />` simply pass in a value to the option `htmlFor` prop. If a value is passed in the HTML Element of `FormElement` will be a `label` instead of a `div`.

```tsx
<Form.Element label="Puppy Name" htmlFor="puppy-name">
  <Input id="puppy-name" status={status} value={inputValue} onChange={handleChange} />
</Form.Element>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
