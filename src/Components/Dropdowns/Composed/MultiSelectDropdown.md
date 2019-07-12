# Multi-Select Dropdown

This is composed variation of a Dropdown intended for a common use case to save time. The Multi-Select Dropdown mimics the functionality of the HTML `<select>` element, except allowing multiple options to be selected. Its appearance can be customized to an extent and its state must be managed by a wrapper component. If you are looking to create a dropdown with more custom behavior try building one using the Dropdown Family of components instead.

### Usage
```tsx
import {MultiSelectDropdown} from '@influxdata/clockface'
```

This composed dropdown has two key props: `selectedOptions` and `options` which deal with only strings for quicker and simpler usage. The component is relatively dumb in that it won't throw errors if the string array passed into `selectedOptions` doesn't have any matches in `options`, or if `options` contains duplicate items. This flexibility allows for a couple different UX approaches:

- No option selected by default, dropdown shows suggestive text such as "Choose an Option"
- A option is selected by default and the component always has a selected option


### Example
<!-- STORY -->

##### Managing state

Here's an example of how to manage Multi-Select Dropdown state:

```tsx
const options = [
  'A',
  'B',
  'C',
]
```
```tsx
this.state = {
  selectedOptions: ['A'],
}
```
```tsx
private handleSelect = (selectedOption: string): void => {
  const {selectedOptions} = this.state
  if (selectedOptions.includes(selectedOption)) {
    const filteredOptions = selectedOptions.filter(o => o !== selectedOption)
    return this.setState({selectedOptions: filteredOptions})
  }

  const filteredOptions = [...selectedOptions, selectedOption]

  this.setState({selectedOptions: filteredOptions})

}
```

And here's rendering the component:
```tsx
const {selectedOptions} = this.state

<MultiSelectDropdown
  selectedOptions={selectedOptions}
  options={options}
  onSelect={this.handleSelect}
/>
```

---

##### Customizing the options list

Dropdowns can feature dividers with or without titles mixed into the options list. This component provides a few shortcuts to achieve this:

```tsx
options = [
  'Apple',
  // This produces the standard Dropdown Iten
  '---',
  // This produces a Divider with no text
  '---Fruits',
  // This produces a Divider with text
]
```


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
