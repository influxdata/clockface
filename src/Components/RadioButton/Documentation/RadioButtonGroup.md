# Radio Button

This is a group wrapper for when you have multiple radio buttons.

### Usage

```tsx
import {Button} from '@influxdata/clockface'
```

```tsx
<RadioButtonGroup
  ref={radioButtonGroupRef}
  orientation={ComponentOrientation.horizontal}
  name={'hello-1'}
  onChange={() => {}}
>
  <RadioButton
    value="test-1"
    id="test-1"
    type={InputToggleType.Radio}
    toolTipText={'toolTip Text')}
    size={ComponentSize.small}
    ref={radioButtonRef1}
    labelText={'Radio Button'}
  />
  <RadioButton
    value="test-2"
    id="test-2"
    type={InputToggleType.Radio}
    toolTipText={'toolTip Text')}
    size={ComponentSize.small}
    ref={radioButtonRef2}
    labelText={'Radio Button'}
  />
  <RadioButton
    value="test-3"
    id="test-3"
    type={InputToggleType.Radio}
    toolTipText={'toolTip Text')}
    size={ComponentSize.small}
    ref={radioButtonRef3}
    labelText={'Radio Button'}
  />
</RadioButtonGroup>
```

### Example

<!-- STORY -->

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->
