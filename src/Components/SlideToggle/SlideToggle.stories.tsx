// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {SlideToggle} from './SlideToggle'
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'

// Types
import {
  ComponentColor,
  ComponentSize,
  FlexDirection,
  AlignItems,
} from '../../Types'

// Notes
const SlideToggleReadme = marked(require('./SlideToggle.md'))
const SlideToggleLabelReadme = marked(require('./SlideToggleLabel.md'))
const ControlsListReadme = marked(require('./ControlsList.md'))
const SlideToggleWithLabelsReadme = marked(
  require('./SlideToggleWithLabels.md')
)

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
      content: SlideToggleReadme,
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
      />
    </div>
  ),
  {
    readme: {
      content: SlideToggleLabelReadme,
    },
  }
)

slideToggleExampleStories.add(
  'SlideToggle with labels',
  () => (
    <div className="story--example">
      <ComponentSpacer
        direction={FlexDirection.Row}
        alignItems={AlignItems.Center}
        margin={ComponentSize.Medium}
      >
        <SlideToggle.Label
          text="Apples"
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
          text="Oranges"
          active={boolean('active', false)}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        />
      </ComponentSpacer>
    </div>
  ),
  {
    readme: {
      content: SlideToggleWithLabelsReadme,
    },
  }
)

slideToggleExampleStories.add(
  'Controls List',
  withState(initialState)(({store}) => (
    <div className="story--example">
      <div style={{width: '250px'}}>
        <ComponentSpacer
          direction={FlexDirection.Column}
          alignItems={AlignItems.Stretch}
          margin={ComponentSize.Large}
        >
          <ComponentSpacer
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
          </ComponentSpacer>
          <ComponentSpacer
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
          </ComponentSpacer>
          <ComponentSpacer
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
          </ComponentSpacer>
        </ComponentSpacer>
      </div>
    </div>
  )),
  {
    readme: {
      content: ControlsListReadme,
    },
  }
)
