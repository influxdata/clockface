// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, select, number} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from '../../../.storybook/utils'

// Types
import {Orientation, Gradients} from '../../Types'

// Components
import {DraggableResizer} from './DraggableResizer'

// Notes
const DraggableResizerReadme = marked(require('./DraggableResizer.md'))
const DraggableResizerPanelReadme = marked(
  require('./DraggableResizerPanel.md')
)
const DraggableResizerExampleAReadme = marked(
  require('./DraggableResizerExampleA.md')
)
const DraggableResizerExampleBReadme = marked(
  require('./DraggableResizerExampleB.md')
)

// State
interface StoryState {
  handlePositions: number[]
}

const twoPanelsInitialState: StoryState = {
  handlePositions: [0.5],
}

const fourPanelsInitialState: StoryState = {
  handlePositions: [0.25, 0.5, 0.75],
}

const draggableResizerExamplesStories = storiesOf(
  'Layout|Draggable Resizer/Examples',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const draggableResizerStories = storiesOf(
  'Layout|Draggable Resizer/Family',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const exampleHandlePositionRange = {
  range: true,
  min: 0,
  max: 1,
  step: 0.01,
}

draggableResizerStories.add(
  'DraggableResizer',
  () => (
    <div className="mockPage padded">
      <DraggableResizer
        handleOrientation={
          Orientation[
            select('handleOrientation', mapEnumKeys(Orientation), 'Vertical')
          ]
        }
        handleGradient={
          Gradients[
            Gradients[
              select('handleGradient', mapEnumKeys(Gradients), 'PastelGothic')
            ]
          ]
        }
        handlePositions={[
          number('handlePositions', 0.5, exampleHandlePositionRange),
        ]}
        onChangePositions={
        handlePositions => console.log(`this.setState({handlePositions: ${handlePositions}})`) // eslint-disable-line
        }
      >
        <DraggableResizer.Panel>
          <div className="mockCard" />
        </DraggableResizer.Panel>
        <DraggableResizer.Panel>
          <div className="mockCard" />
        </DraggableResizer.Panel>
      </DraggableResizer>
    </div>
  ),
  {
    readme: {
      content: DraggableResizerReadme,
    },
  }
)

draggableResizerStories.add(
  'DraggableResizerPanel',
  () => (
    <div className="story--example">
      <DraggableResizer.Panel minSizePixels={50} sizePercent={0.5}>
        <div className="mockCard" />
      </DraggableResizer.Panel>
    </div>
  ),
  {
    readme: {
      content: DraggableResizerPanelReadme,
    },
  }
)

draggableResizerExamplesStories.add(
  '2 Panels',
  withState(twoPanelsInitialState)(({store}) => (
    <div className="mockPage padded">
      <DraggableResizer
        handleOrientation={
          Orientation[
            select('handleOrientation', mapEnumKeys(Orientation), 'Vertical')
          ]
        }
        handleGradient={
          Gradients[
            Gradients[
              select('handleGradient', mapEnumKeys(Gradients), 'PastelGothic')
            ]
          ]
        }
        {...store.state}
        onChangePositions={handlePositions => store.set({handlePositions})}
      >
        <DraggableResizer.Panel>
          <div className="mockCard">
            <span>1</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel>
          <div className="mockCard">
            <span>2</span>
          </div>
        </DraggableResizer.Panel>
      </DraggableResizer>
    </div>
  )),
  {
    readme: {
      content: DraggableResizerExampleAReadme,
    },
  }
)

draggableResizerExamplesStories.add(
  '4 Panels',
  withState(fourPanelsInitialState)(({store}) => (
    <div className="mockPage padded">
      <DraggableResizer
        handleOrientation={
          Orientation[
            select('handleOrientation', mapEnumKeys(Orientation), 'Vertical')
          ]
        }
        handleGradient={
          Gradients[
            Gradients[
              select('handleGradient', mapEnumKeys(Gradients), 'PastelGothic')
            ]
          ]
        }
        {...store.state}
        onChangePositions={handlePositions => store.set({handlePositions})}
      >
        <DraggableResizer.Panel>
          <div className="mockCard">
            <span>1</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel>
          <div className="mockCard">
            <span>2</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel>
          <div className="mockCard">
            <span>3</span>
          </div>
        </DraggableResizer.Panel>
        <DraggableResizer.Panel>
          <div className="mockCard">
            <span>4</span>
          </div>
        </DraggableResizer.Panel>
      </DraggableResizer>
    </div>
  )),
  {
    readme: {
      content: DraggableResizerExampleBReadme,
    },
  }
)
