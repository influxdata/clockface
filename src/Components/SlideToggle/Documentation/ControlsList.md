# Controls List

Here's an example that uses the entire SlideToggle family to construct a control panel like you might see in an options view. This example uses a stateful wrapper so the JSX example is obscured, unfortunately. 

### Usage
```tsx
import {SlideToggle} from '@influxdata/clockface'
```
```tsx
<SlideToggle />
```

### Example
<!-- STORY -->

### Implementation

This example uses a `FlexBox` to align the components. Each `SlideToggleLabel`'s `active` prop is passed the same value as its associated `SlideToggle` so their states match visually.

Here's how to structure this example's state:

```tsx
interface State {
  optionA: boolean
  optionB: boolean
  optionC: boolean
}
```

Here's a handler function:

```tsx
private handleSlideToggleChange = (): void => {
  this.setState({optionA: !this.state.optionA})
}
```

Here's the JSX:

```tsx
const {optionA, optionB, optionC} = this.state
```

```tsx
<FlexBox
  direction={FlexDirection.Column}
  alignItems={AlignItems.Stretch}
  margin={ComponentSize.Large}
>
  <FlexBox
    direction={FlexDirection.Row}
    alignItems={AlignItems.Center}
    margin={ComponentSize.Medium}
    stretchToFitWidth={true}
  >
    <SlideToggle
      onChange={this.handleSlideToggleChange}
      active={optionA}
      size={ComponentSize.ExtraSmall}
    />
    <SlideToggle.Label
      text="Send email notifications"
      active={optionA}
    />
  </FlexBox>
  <FlexBox
    direction={FlexDirection.Row}
    alignItems={AlignItems.Center}
    margin={ComponentSize.Medium}
    stretchToFitWidth={true}
  >
    <SlideToggle
      onChange={this.handleSlideToggleChange}
      active={optionB}
      size={ComponentSize.ExtraSmall}
    />
    <SlideToggle.Label
      text="Send a raven"
      active={optionB}
    />
  </FlexBox>
  <FlexBox
    direction={FlexDirection.Row}
    alignItems={AlignItems.Center}
    margin={ComponentSize.Medium}
    stretchToFitWidth={true}
  >
    <SlideToggle
      onChange={this.handleSlideToggleChange}
      active={optionC}
      size={ComponentSize.ExtraSmall}
    />
    <SlideToggle.Label
      text="Send an owl"
      active={optionC}
    />
  </FlexBox>
</FlexBox>
```


<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
