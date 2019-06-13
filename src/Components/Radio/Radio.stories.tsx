// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
  array,
} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Radio} from './Radio'

// Types
import {ComponentColor, ComponentSize, ButtonShape} from '../../Types'

// Notes
const RadioReadme = marked(require('./Radio.md'))
const RadioButtonReadme = marked(require('./RadioButton.md'))
const RadioExampleReadme = marked(require('./RadioExample.md'))

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

const mirepoix = ['Celery', 'Carrot', 'Onion']

radioStories.add(
  'Radio',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Parent width', 240)}px`}}>
        <Radio
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          shape={
            ButtonShape[select('shape', mapEnumKeys(ButtonShape), 'Default')]
          }
        >
          {array('Radio Buttons', mirepoix).map(btn => (
            <Radio.Button
              key={btn}
              id={btn}
              active={btn === text('Active Button', mirepoix[0])}
              value={btn}
              titleText={btn}
              onClick={value =>
                alert(`Radio.Button clicked! Value returned: ${value}`)
              }
            >
              {btn}
            </Radio.Button>
          ))}
        </Radio>
      </div>
    </div>
  ),
  {
    readme: {
      content: RadioReadme,
    },
  }
)

radioStories.add(
  'RadioButton',
  () => (
    <div className="story--example">
      <Radio.Button
        id={text('id', 'example-radio-option')}
        active={boolean('active', false)}
        value={text('value', 'example-radio-option')}
        onClick={value => {
          alert(value)
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
    </div>
  ),
  {
    readme: {
      content: RadioButtonReadme,
    },
  }
)

radioExampleStories.add(
  'Note Editor Mode Toggle',
  withState(initialState)(({store}) => (
    <div className="story--example">
      <div style={{width: `${number('Parent width', 240)}px`}}>
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
  )),
  {
    readme: {
      content: RadioExampleReadme,
    },
  }
)
