// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from 'src/Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {SlideToggle} from 'src/Components/SlideToggle/SlideToggle'
import {FlexBox} from 'src/Components/FlexBox/FlexBox'

// Types
import {
  ComponentColor,
  ComponentSize,
  FlexDirection,
  AlignItems,
} from 'src/Types'

// Notes
import SlideToggleReadme from 'src/Components/SlideToggle/SlideToggle.md'
import SlideToggleLabelReadme from 'src/Components/SlideToggle/SlideToggleLabel.md'
import ControlsListReadme from 'src/Components/SlideToggle/ControlsList.md'
import SlideToggleWithLabelsReadme from 'src/Components/SlideToggle/SlideToggleWithLabels.md'

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

const slideToggleStories = storiesOf('Components|Slide Toggles/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const slideToggleExampleStories = storiesOf(
  'Components|Slide Toggles/Examples',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

slideToggleStories.add(
  'SlideToggle',
  () => (
    <div className="story--example">
      <SlideToggle
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
    </div>
  ),
  {
    readme: {
      content: marked(SlideToggleReadme),
    },
  }
)

slideToggleStories.add(
  'SlideToggleLabel',
  () => (
    <div className="story--example">
      <SlideToggle.Label
        text={text('text', 'Label Text')}
        size={
          ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
        }
        active={boolean('active', true)}
        wrapText={boolean('wrapText', false)}
      />
    </div>
  ),
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
