# Radio Button

RadioButton is the member of the Radio Family; every member of the component family can be accessed from the same single import. We recommend using it as a child of `<Radio />` because it receives its appearance from its parent.

### Usage
```tsx
import {Radio} from '@influxdata/clockface'
```
```tsx
<Radio.Button>
  // Children
</Radio.Button>
```

### Example
<!-- STORY -->

### Customizability

The `value` prop can return whatever you want. It does not need to match the displayed label of the RadioButton. Thsi is very useful if you want to use objects in state instead of just strings. Here's an example:

```tsx
const items = [
  {
    name: 'Apple',
    type: 'fruit',
    id: '09322',
    desc: 'A crunchy refreshing fruit',
  },
  {
    name: 'Pear',
    type: 'fruit',
    id: '09323',
    desc: 'Makes a great brandy',
  },
  {
    name: 'Carrot',
    type: 'vegetable',
    id: '09324',
    desc: 'A healthy snack',
  },
]
```
```tsx
items.map(item => (
  <Radio.Button
    key={item.id}
    id={item.id}
    value={item}
    titleText={item.desc}
    onClick={this.clickHandler}
    active={this.state.activeID === item.id}
  >
    {item.name}
  </Radio.Button>
))
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
