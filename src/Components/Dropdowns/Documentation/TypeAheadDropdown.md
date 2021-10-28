# Type Ahead Dropdown

This is composed variation of a Dropdown
with typeahead, composed here to enable a better user experience.
intended for a common use case to save time.

It keeps its own state, and can take styling and testIDs from the parent/caller.
All the 'items' to be selected must conform to the SelectableOption interface; it must have an id, and it should have a name
for display. The control takes a default name to show when there is no name.

### Usage

```tsx
import {TypeAheadDropdown} from '@influxdata/clockface'
```

ARGHH REWRITE
This composed dropdown has two key props: `selectedOption` and `options`
which deal with only strings for quicker and simpler usage. The component is relatively dumb in that it won't throw errors if the string passed into `selectedOption` isn't found in `options`, or if `options` contains duplicate items. This flexibility allows for a couple different UX approaches:

- No option selected by default, dropdown shows suggestive text such as "Choose an Option"
- A option is selected by default and the component always has a selected option

### Example

<!-- STORY -->

##### Managing state

REDO
Here's an example of how to manage Select Dropdown state:

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

<SelectDropdown
  selectedOption={selectedOption}
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
