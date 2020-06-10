# SearchDropdown

`SearchDropdown` is a composed combination of the `Dropdown` family with `Input` and a fair bit of custom logic. It's intended for use as a text input that offers suggestions. The component is keyboard controllable which makes it nice and fast for power users. It is slightly opinionated as a component in that it does now allow composable children and favors a string array instead.

### Usage

```tsx
import {SearchDropdown} from '@influxdata/clockface'
```

Handling state:

```tsx
interface State {
  inputValue: string
  selectedOption: string
}
```

```tsx
state = {
  inputValue: '',
  selectedOptions: options[0],
}
```

```tsx
<SearchDropdown
  inputValue={inputValue}
  onInputChange={handleInputChange}
  selectedOption={selectedOption}
  onSelect={handleSelect}
>
```

### Example

<!-- STORY -->

### Custom Matching Function

`SearchDropdown` has a prop called `FilterFunction` which controls what results match the input text. It should have this shape:

```tsx
(inputValue: string, options: string[]) => string[]
```

By default a simple matching function is included so you likely won't have to change this unless you want fuzzy search or something like that.

### Controlling Appearance of Menu Items

Use the `wrapText` prop to suit your needs. You can additionally use the `menuStyle` prop to control the width of the menu relative to the input. For example, you could size the menu to be twice as wide and not wrap. Go crazy. Live your life.

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
