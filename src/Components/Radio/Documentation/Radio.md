# Radio

Radio is the parent component of the Radio Family; every member of the component family can be accessed from this single import. It is a container and requires children to be visible. We recommend using `<Radio.Button />`. Under the hood `RadioButton` has an input of either `type="radio"` (the default) or `type="checkbox"` for multi-select. Depending on which type you choose you will have to manage state a little differently.

### Usage
```tsx
import {Radio} from '@influxdata/clockface'
```
```tsx
<Radio>
  <Radio.Button />
  <Radio.Button />
  <Radio.Button />
  // Children
</Radio>
```

### Customization

Radio is essentially just a wrapper for `<Radio.Button />` and its props are centered around customizing appearance rather than functionality. When constructing a Radio consider how it will fill the space. If you want the component to be free standing and have its size determined by its children then use `ButtonShape.Default`. If you want the Radio to fill the width of its parent and have all of its options divide up the width evenly then use `ButtonShape.StretchToFit`.

### Example
<!-- STORY -->

### Managing State

There are two recommended ways to manage state for `Radio` and it depends on which type of `RadioButton` you are using. If you want single-select, use `type={InputToggleType.Radio}` and if you want multi-select use `type={InputToggleType.Checkbox}`. The difference is similarly having a single string as the `activeOption` or an array of strings as `activeOptions`. The example below illustrates how to manage state with a single-select `Radio`.

```tsx
const mirepoix = [
  'Celery',
  'Carrot',
  'Onion',
]
```
You don't need to use an enum but it provides some handy strictness
```tsx
const [radioState, setRadioState] = useState<string>(mirepoix[0])
```

Here's an example handler function & implementation:

```tsx
const handleRadioClick = (activeOption: RadioOptions): void => {
  setRadioState(activeOption)
}
```
```tsx
mirepoix.map((veg, i) => (
  <Radio.Button
    id={veg}
    // If you are using single-select, all RadioButtons must have
    // a matching name prop
    name="mirepoix"
    // If you are using multi-select, each RadioButton must have
    // a unique name prop
    value={veg}
    active={radioState === veg}
    onClick={handleRadioClick}
    tabIndex={i}
  >
    {veg}
  </Radio.Button>
))
```


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
