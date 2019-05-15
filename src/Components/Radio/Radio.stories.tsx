// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, boolean, select} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Radio} from './Radio'

// Types
import {ComponentColor, ComponentSize, ButtonShape} from '../../Types'

// State
interface StoryState {
  activeItemID: string
}

const initialState: StoryState = {
  activeItemID: 'mode-compose',
}

const radioStories = storiesOf('Components|Radios/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const radioExampleStories = storiesOf('Components|Radios/Examples', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

radioStories.add('Radio', () => (
  <Radio
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
    color={
      ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Default')]
    }
    shape={ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]}
  />
))

radioStories.add('RadioButton', () => (
  <Radio.Button
    id={text('id', 'example-radio-option')}
    active={boolean('active', false)}
    value={text('value', 'example-radio-option')}
    onClick={value => {
      console.log(value) // eslint-disable-line
    }}
    disabled={boolean('disabled', false)}
    titleText={text('titleText', 'I am helpful text ')}
    disabledTitleText={text(
      'titleText',
      'Explainer for why this item is disabled'
    )}
  >
    {text('children', 'Button Label')}
  </Radio.Button>
))

radioExampleStories.add(
  'Note Editor Mode Toggle',
  withState(initialState)(({store}) => (
    <div className="story--example">
      <div style={{width: '240px'}}>
        <Radio
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          shape={ButtonShape.StretchToFit}
        >
          <Radio.Button
            titleText="Compose your Note using Markdown"
            id="mode-compose"
            active={store.state.activeItemID === 'mode-compose'}
            value="mode-compose"
            onClick={activeItemID => store.set({activeItemID})}
          >
            Compose
          </Radio.Button>
          <Radio.Button
            titleText="See a preview of your Note"
            id="mode-preview"
            active={store.state.activeItemID === 'mode-preview'}
            value="mode-preview"
            onClick={activeItemID => store.set({activeItemID})}
          >
            Preview
          </Radio.Button>
        </Radio>
      </div>
    </div>
  ))
)
