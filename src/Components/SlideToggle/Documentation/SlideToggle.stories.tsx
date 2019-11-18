// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {SlideToggle, SlideToggleRef} from '../'
import {FlexBox} from '../../FlexBox'
import {InputLabel} from '../../Inputs/InputLabel'

// Types
import {
  ComponentColor,
  ComponentSize,
  FlexDirection,
  AlignItems,
} from '../../../Types'

// Notes
import SlideToggleReadme from './SlideToggle.md'
import ControlsListReadme from './ControlsList.md'
import SlideToggleWithLabelsReadme from './SlideToggleWithLabels.md'
import {useState} from '@storybook/addons'

const slideToggleStories = storiesOf(
  'Components|Slide Toggles/Family',
  module
).addDecorator(withKnobs)

const slideToggleExampleStories = storiesOf(
  'Components|Slide Toggles/Examples',
  module
).addDecorator(withKnobs)

slideToggleStories.add(
  'SlideToggle',
  () => {
    const slideToggleRef: RefObject<SlideToggleRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(slideToggleRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SlideToggle.SlideToggle
          ref={slideToggleRef}
          onChange={() => alert('clicked')}
          active={boolean('active', false)}
          disabled={boolean('disabled', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Default')
            ]
          }
          tooltipText={text('tooltipText', 'Tooltip Text')}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SlideToggleReadme),
    },
  }
)

slideToggleExampleStories.add(
  'SlideToggle with labels',
  () => (
    <div className="story--example">
      <FlexBox
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
        margin={ComponentSize.Medium}
      >
        <InputLabel
          wrapText={boolean('Left Label: wrapText', false)}
          active={!boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          {text('Left Label: text', 'Apples')}
        </InputLabel>
        <SlideToggle
          onChange={() => alert('clicked')}
          active={boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
        />
        <InputLabel
          wrapText={boolean('Right Label: wrapText', false)}
          active={boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          {text('Right Label: text', 'Oranges')}
        </InputLabel>
      </FlexBox>
    </div>
  ),
  {
    readme: {
      content: marked(SlideToggleWithLabelsReadme),
    },
  }
)

slideToggleExampleStories.add(
  'Controls List',
  () => {
    const [optionA, updateOptionA] = useState<boolean>(true)
    const [optionB, updateOptionB] = useState<boolean>(false)
    const [optionC, updateOptionC] = useState<boolean>(false)

    return (
      <div className="story--example">
        <div style={{width: '250px'}}>
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
                onChange={() => updateOptionA(!optionA)}
                active={optionA}
                size={ComponentSize.ExtraSmall}
                color={
                  ComponentColor[
                    select('color', mapEnumKeys(ComponentColor), 'Secondary')
                  ]
                }
              />
              <InputLabel active={optionA}>Send email notifications</InputLabel>
            </FlexBox>
            <FlexBox
              direction={FlexDirection.Row}
              alignItems={AlignItems.Center}
              margin={ComponentSize.Medium}
              stretchToFitWidth={true}
            >
              <SlideToggle
                onChange={() => updateOptionB(!optionB)}
                active={optionB}
                size={ComponentSize.ExtraSmall}
                color={
                  ComponentColor[
                    select('color', mapEnumKeys(ComponentColor), 'Secondary')
                  ]
                }
              />
              <InputLabel active={optionB}>Send a raven</InputLabel>
            </FlexBox>
            <FlexBox
              direction={FlexDirection.Row}
              alignItems={AlignItems.Center}
              margin={ComponentSize.Medium}
              stretchToFitWidth={true}
            >
              <SlideToggle
                onChange={() => updateOptionC(!optionC)}
                active={optionC}
                size={ComponentSize.ExtraSmall}
                color={
                  ComponentColor[
                    select('color', mapEnumKeys(ComponentColor), 'Secondary')
                  ]
                }
              />
              <InputLabel active={optionC}>Send an owl</InputLabel>
            </FlexBox>
          </FlexBox>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ControlsListReadme),
    },
  }
)
