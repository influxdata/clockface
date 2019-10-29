// Libraries
import React, {createRef, RefObject} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  select,
  number,
  object,
} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Radio, RadioRef, RadioButtonRef} from '../'

// Types
import {ComponentColor, ComponentSize, ButtonShape} from '../../../Types'

// Notes
import RadioReadme from './Radio.md'
import RadioButtonReadme from './RadioButton.md'
import RadioExampleReadme from './RadioExample.md'

// State
interface StoryState {
  activeItemID: string
}

const initialState: StoryState = {
  activeItemID: 'mode-compose',
}

const radioStories = storiesOf('Components|Radios/Family', module).addDecorator(
  withKnobs
)

const radioExampleStories = storiesOf(
  'Components|Radios/Examples',
  module
).addDecorator(withKnobs)

const mirepoix = ['Celery', 'Carrot', 'Onion']

radioStories.add(
  'Radio',
  () => {
    const radioRef: RefObject<RadioRef> = createRef()
    const radioButtonCeleryRef: RefObject<RadioButtonRef> = createRef()
    const radioButtonCarrotRef: RefObject<RadioButtonRef> = createRef()
    const radioButtonOnionRef: RefObject<RadioButtonRef> = createRef()

    const radioButtonRefs = {
      Celery: radioButtonCeleryRef,
      Carrot: radioButtonCarrotRef,
      Onion: radioButtonOnionRef,
    }

    const logRadioRefs = (): void => {
      /* eslint-disable */
      console.log('Radio', radioRef.current)
      console.log('RadioButton', radioButtonCeleryRef.current)
      console.log('RadioButton', radioButtonCarrotRef.current)
      console.log('RadioButton', radioButtonOnionRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Radio.Radio
          ref={radioRef}
          style={object('style', {width: '200px'})}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          shape={
            ButtonShape[
              select('shape', mapEnumKeys(ButtonShape), 'StretchToFit')
            ]
          }
        >
          {mirepoix.map(btn => (
            <Radio.Button
              ref={radioButtonRefs[btn]}
              key={btn}
              id={btn}
              active={btn === text('Active Button', mirepoix[0])}
              value={btn}
              titleText={btn}
              onClick={value =>
                alert(`RadioButton clicked! Value returned: ${value}`)
              }
            >
              {btn}
            </Radio.Button>
          ))}
        </Radio.Radio>
        <div className="story--test-buttons">
          <button onClick={logRadioRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(RadioReadme),
    },
  }
)

radioStories.add(
  'RadioButton',
  () => {
    const radioButtonRef: RefObject<RadioButtonRef> = createRef()

    const logRadioButtonRef = (): void => {
      /* eslint-disable */
      console.log(radioButtonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Radio.Button
          ref={radioButtonRef}
          id={text('id', 'example-radio-option')}
          active={boolean('active', false)}
          value={text('value', 'example-radio-option')}
          onClick={value => {
            alert(value)
          }}
          disabled={boolean('disabled', false)}
          titleText={text('titleText', 'I am helpful text!')}
          disabledTitleText={text(
            'titleText',
            'Explainer for why this item is disabled'
          )}
        >
          {text('children', 'Button Label')}
        </Radio.Button>
        <div className="story--test-buttons">
          <button onClick={logRadioButtonRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(RadioButtonReadme),
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
      content: marked(RadioExampleReadme),
    },
  }
)
