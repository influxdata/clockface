// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, radios, boolean, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Radio} from './Radio'

// Types
import {ComponentColor, ComponentSize, ButtonShape} from '../../Types'

const radioStories = storiesOf('Components|Radios', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

enum RadioOption {
  First = 'First',
  Second = 'Second',
  Third = 'Third',
}

radioStories.add('Radio Component', () => (
  <Radio
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
    color={
      ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Default')]
    }
    shape={ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]}
  >
    <Radio.Button
      titleText={text('tooltipText', 'Tooltip Text')}
      disabledTitleText={text('disabledTooltipText', 'Disabled Tooltip Text')}
      id={RadioOption.First}
      active={
        RadioOption[radios('active', mapEnumKeys(RadioOption))] ==
        RadioOption.First
      }
      disabled={boolean('disabled', false)}
      value={RadioOption.First}
      onClick={() => alert(`${RadioOption.First} clicked`)}
    >
      {text('option 1 text', 'First')}
    </Radio.Button>
    <Radio.Button
      titleText={text('tooltipText', 'Tooltip Text')}
      disabledTitleText={text('disabledTooltipText', 'Disabled Tooltip Text')}
      id={RadioOption.Second}
      active={
        RadioOption[radios('active', mapEnumKeys(RadioOption))] ==
        RadioOption.Second
      }
      disabled={boolean('disabled', false)}
      value={RadioOption.Second}
      onClick={() => alert(`${RadioOption.Second} clicked`)}
    >
      {text('option 2 text', 'Second')}
    </Radio.Button>
    <Radio.Button
      titleText={text('tooltipText', 'Tooltip Text')}
      disabledTitleText={text('disabledTooltipText', 'Disabled Tooltip Text')}
      id={RadioOption.Third}
      active={
        RadioOption[radios('active', mapEnumKeys(RadioOption))] ==
        RadioOption.Third
      }
      disabled={boolean('disabled', false)}
      value={RadioOption.Third}
      onClick={() => alert(`${RadioOption.Third} clicked`)}
    >
      {text('option 3 text', 'Third')}
    </Radio.Button>
  </Radio>
))
