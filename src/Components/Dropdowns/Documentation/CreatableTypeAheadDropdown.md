# Creatable Type Ahead Dropdown

This is composed variation of a Dropdown with typeahead that enables users to create new options along with choosing existing options.

### Usage

```tsx
import {CreatableTypeAheadDropdown} from '@influxdata/clockface'
```

This composed dropdown has two key props: `selectedOption` and `options` which deal with only strings for quicker and simpler usage. The component is relatively dumb in that it won't throw errors if the string passed into `selectedOption` isn't found in `options`, or if `options` contains duplicate items. `selectedOption` may or may not be in `options`. This flexibility allows for a couple different UX approaches:

- No option selected by default, dropdown shows all options
- An option is selected by default,
  - If `selectedOption` is in `options`, dropdown shows the selected option along with other options
  - If `selectedOption` is not in `options`, dropdown shows all options

The typeahead text input is clearable with an 'x' button in the right that shows up when there is content. Pressing on the 'x' will clear the text input AND set the selection of this control to null.

### Example

<!-- STORY -->

##### Managing state

Here's an example of how to manage Creatable Type Ahead Dropdown state:

```tsx
const options = [
  'A',
  'B',
  'C',
]

this.state = {
  selectedOption: 'A',
}

private handleSelect = (selectedOption: string): void => {
  this.setState({selectedOption})
}
```

And here's rendering the component:

```tsx
const {selectedOption} = this.state

<CreatableTypeAheadDropdown
  selectedOption={selectedOption}
  options={options}
  onSelect={this.handleSelect}
/>
```

---

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
