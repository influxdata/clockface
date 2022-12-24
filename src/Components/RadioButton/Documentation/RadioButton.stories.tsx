// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  RadioButton,
  RadioButtonRef,
  RadioButtonGroup,
  RadioButtonGroupRef,
} from '../'

// Types

// Notes
import RadioButtonReadMe from './RadioButton.md'
import RadioButtonGroupReadMe from './RadioButtonGroup.md'
import {
  InputToggleType,
  ComponentSize,
  ComponentOrientation,
} from '../../../Types'

const RadioButtonStories = storiesOf(
  'Component|RadioButton',
  module
).addDecorator(withKnobs)

RadioButtonStories.add(
  'RadioButton',
  () => {
    const radioButtonRef: RefObject<RadioButtonRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(radioButtonRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <RadioButton
          value="test-1"
          id="test-1"
          type={InputToggleType.Radio}
          toolTipText={text('titleText', 'Title Text')}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          ref={radioButtonRef}
          labelText={text('labelText', 'Radio Button')}
          /* eslint-disable */
          onChange={value => console.log(value)}
          /* eslint-disable */
        ></RadioButton>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(RadioButtonReadMe),
    },
  }
)

RadioButtonStories.add(
  'RadioButtonGroup',
  () => {
    const radioButtonGroupRef: RefObject<RadioButtonGroupRef> = createRef()
    const radioButtonRef1: RefObject<RadioButtonRef> = createRef()
    const radioButtonRef2: RefObject<RadioButtonRef> = createRef()
    const radioButtonRef3: RefObject<RadioButtonRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(radioButtonGroupRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <RadioButtonGroup
          ref={radioButtonGroupRef}
          orientation={
            ComponentOrientation[
              select(
                'orientation',
                mapEnumKeys(ComponentOrientation),
                'Horizontal'
              )
            ]
          }
          name={'hello-1'}
          /* eslint-disable */
          onChange={value => console.log(value)}
          /* eslint-disable */
        >
          <RadioButton
            value="test-1"
            id="test-1"
            type={InputToggleType.Radio}
            toolTipText={text('titleText', 'Title Text')}
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
            ref={radioButtonRef1}
            labelText={'Hello 1'}
          ></RadioButton>
          <RadioButton
            value="test-2"
            id="test-2"
            type={InputToggleType.Radio}
            toolTipText={text('titleText', 'Title Text')}
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
            ref={radioButtonRef2}
            labelText={'Hello 2'}
          ></RadioButton>
          <RadioButton
            value="test-3"
            id="test-3"
            type={InputToggleType.Radio}
            toolTipText={text('titleText', 'Title Text')}
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
            ref={radioButtonRef3}
            labelText={'Hello 3'}
          ></RadioButton>
        </RadioButtonGroup>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(RadioButtonGroupReadMe),
    },
  }
)
