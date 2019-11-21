# SelectGroup

SelectGroup is the parent component of the SelectGroup Family; every member of the component family can be accessed from this single import. It is a container and requires children to be visible. We recommend using `<SelectGroup.Option />`. Under the hood `SelectGroupOption` has an input of either `type="radio"` (the default) or `type="checkbox"` for multi-select. Depending on which type you choose you will have to manage state a little differently.

### Usage
```tsx
import {SelectGroup} from '@influxdata/clockface'
```
```tsx
<SelectGroup>
  <SelectGroup.Option />
  <SelectGroup.Option />
  <SelectGroup.Option />
  // Children
</SelectGroup>
```

### Customization

SelectGroup is essentially just a wrapper for `<SelectGroup.Option />` and its props are centered around customizing appearance rather than functionality. When constructing a SelectGroup consider how it will fill the space. If you want the component to be free standing and have its size determined by its children then use `ButtonShape.Default`. If you want the SelectGroup to fill the width of its parent and have all of its options divide up the width evenly then use `ButtonShape.StretchToFit`.

### Example
<!-- STORY -->

### Managing State

There are two recommended ways to manage state for `SelectGroup` and it depends on which type of `SelectGroupOption` you are using. If you want single-select, use `type={InputToggleType.SelectGroup}` and if you want multi-select use `type={InputToggleType.Checkbox}`. The difference is similarly having a single string as the `activeOption` or an array of strings as `activeOptions`. The example below illustrates how to manage state with a single-select `SelectGroup`.

```tsx
const mirepoix = [
  'Celery',
  'Carrot',
  'Onion',
]
```
```tsx
const [radioState, setSelectGroupState] = useState<string>(mirepoix[0])
```

Here's an example handler function & implementation:

```tsx
const handleSelectGroupClick = (activeOption: SelectGroupOptions): void => {
  setSelectGroupState(activeOption)
}
```
```tsx
mirepoix.map((veg, i) => (
  <SelectGroup.Option
    id={veg}
    // If you are using single-select, all SelectGroupOptions must have
    // a matching name prop
    name="mirepoix"
    // If you are using multi-select, each SelectGroupOption must have
    // a unique name prop
    value={veg}
    active={radioState === veg}
    onClick={handleSelectGroupClick}
    tabIndex={i + 1}
  >
    {veg}
  </SelectGroup.Option>
))
```


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
