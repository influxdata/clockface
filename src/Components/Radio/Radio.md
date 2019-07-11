# Radio

Radio is the parent component of the Radio Family; every member of the component family can be accessed from this single import. It is a container and requires children to be visible. We recommend using `<Radio.Button />`.

### Usage
```jsx
import {Radio} from '@influxdata/clockface'
```
```jsx
<Radio>
  // Children
</Radio>
```

### Customization

Radio is essentially just a wrapper for `<Radio.Button />` and its props are centered around customizing appearance rather than functionality. When constructing a Radio consider how it will fill the space. If you want the component to be free standing and have its size determined by its children then use `ButtonShape.Default`. If you want the Radio to fill the width of its parent and have all of its options divide up the width evenly then use `ButtonShape.StretchToFit`.

### Example
<!-- STORY -->

### Managing State

Radio is designed for flexibility when it comes to managing state. Each `<Radio.Button />` has an `active` prop that will render it as the active option. There is no internal logic preventing multiple items from being active simultaneously, so go crazy. `<Radio.Button />` also has a `value` prop of type `any` so that you can have the button return whatever you want on click. If you are offering a set of options represented by objects this is easy to achieve.

```jsx
enum RadioOptions {
  Celery = 'Celery',
  Carrot = 'Carrot',
  Onion = 'Onion',
}
```
You don't need to use an enum but it provides some handy strictness
```jsx
interface State {
  activeOption: RadioOptions
}
```
```jsx
this.state = {
  activeOption: RadioOptions.Celery,
}
```

Here's an example handler function & implementation:

```jsx
private handleRadioClick = (activeOption: RadioOptions): void => {
  this.setState({activeOption})
  // shorthand ftw
}
```
```jsx
<Radio.Button
  id="Celery"
  value={RadioOptions.Celery}
  active={this.state.activeOption === RadioOptions.Celery}
  onClick={this.handleRadioClick}
>
  {RadioOptions.Celery}
</Radio.Button>
```


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
