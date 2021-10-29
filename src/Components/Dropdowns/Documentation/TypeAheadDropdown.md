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
This composed dropdown has two key props: `items` and `onSelect`
All the 'items' to be selected must conform to the SelectableOption interface; it must have an id, and it should have a name
for display

if there is no name to display, then the optional `defaultNameText` shows instead.
If there is no value for `defaultNameText`,
then the empty string is shown instead.

`onSelect` : a method called when an item is selected.
when the text field is cleared, then the selection is cleared as well.

- No option selected by default, dropdown shows either the `placeholderText`, if present,
  or the default 'Select a Value'

### Example

<!-- STORY -->

##### Sample Values

```tsx
const items = [
  {name: 'Apple', id: '0'},
  {name: 'Peach', id: '5'},
  {name: 'Tomato', id: '10'},
  {name: 'Grape', id: '20'},
  {name: 'Orange', id: '40'},
  {name: 'Lemon', id: '30'},
  {name: 'Watermelon', id: '70'},
  {name: 'Kiwi', id: '8'},
  {name: 'Banana', id: '9'},
  {name: 'Strawberry', id: '1099'},
  {id: '1234.3.33'},
]

const onSelect = (item: SelectableItem) => {
  console.log('ooh! selected item: ', item)
}

const selectedOption = {name: 'Lemon', id: '30'}
```

And here's rendering the component:

```tsx
<TypeAheadDropDown
    style={{width: '250px', marginRight: '45px'}}
    onSelect={onSelect}
    items={items}
    buttonTestId='buttonTestID'
    menuTestID='menuTest'
    itemTestIdPrefix= 'my-prefix'
    defaultNameText='default empty name here'
    selectedOption={selectedOption}
    sortNames={true}
    menuTheme={DropdownMenuTheme.Amethyst}
    testIDSuffix='example'
/>
</div>
```

---

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
