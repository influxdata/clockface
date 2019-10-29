// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {SlideToggle, SlideToggleRef, SlideToggleLabelRef} from '../'
import {FlexBox} from '../../FlexBox'

// Types
import {
  ComponentColor,
  ComponentSize,
  FlexDirection,
  AlignItems,
} from '../../../Types'

// Notes
import SlideToggleReadme from './SlideToggle.md'
import SlideToggleLabelReadme from './SlideToggleLabel.md'
import ControlsListReadme from './ControlsList.md'
import SlideToggleWithLabelsReadme from './SlideToggleWithLabels.md'

// State
interface StoryState {
  optionA: boolean
  optionB: boolean
  optionC: boolean
}

const initialState: StoryState = {
  optionA: true,
  optionB: false,
  optionC: false,
}

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

slideToggleStories.add(
  'SlideToggleLabel',
  () => {
    const slideToggleLabelRef: RefObject<SlideToggleLabelRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(slideToggleLabelRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <SlideToggle.Label
          ref={slideToggleLabelRef}
          text={text('text', 'Label Text')}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          active={boolean('active', true)}
          wrapText={boolean('wrapText', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SlideToggleLabelReadme),
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
        <SlideToggle.Label
          text={text('Left Label: text', 'Apples')}
          wrapText={boolean('Left Label: wrapText', false)}
          active={!boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        />
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
        <SlideToggle.Label
          text={text('Right Label: text', 'Oranges')}
          wrapText={boolean('Right Label: wrapText', false)}
          active={boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        />
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
  withState(initialState)(({store}) => (
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
              onChange={() => store.set({optionA: !store.state.optionA})}
              active={store.state.optionA}
              size={ComponentSize.ExtraSmall}
              color={
                ComponentColor[
                  select('color', mapEnumKeys(ComponentColor), 'Secondary')
                ]
              }
            />
            <SlideToggle.Label
              text="Send email notifications"
              active={store.state.optionA}
            />
          </FlexBox>
          <FlexBox
            direction={FlexDirection.Row}
            alignItems={AlignItems.Center}
            margin={ComponentSize.Medium}
            stretchToFitWidth={true}
          >
            <SlideToggle
              onChange={() => store.set({optionB: !store.state.optionB})}
              active={store.state.optionB}
              size={ComponentSize.ExtraSmall}
              color={
                ComponentColor[
                  select('color', mapEnumKeys(ComponentColor), 'Secondary')
                ]
              }
            />
            <SlideToggle.Label
              text="Send a raven"
              active={store.state.optionB}
            />
          </FlexBox>
          <FlexBox
            direction={FlexDirection.Row}
            alignItems={AlignItems.Center}
            margin={ComponentSize.Medium}
            stretchToFitWidth={true}
          >
            <SlideToggle
              onChange={() => store.set({optionC: !store.state.optionC})}
              active={store.state.optionC}
              size={ComponentSize.ExtraSmall}
              color={
                ComponentColor[
                  select('color', mapEnumKeys(ComponentColor), 'Secondary')
                ]
              }
            />
            <SlideToggle.Label
              text="Send an owl"
              active={store.state.optionC}
            />
          </FlexBox>
        </FlexBox>
      </div>
    </div>
  )),
  {
    readme: {
      content: marked(ControlsListReadme),
    },
  }
)
