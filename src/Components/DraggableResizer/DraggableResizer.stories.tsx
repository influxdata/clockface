// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, select, number} from '@storybook/addon-knobs'
import {withState} from '@dump247/storybook-state'
import {mapEnumKeys} from '../../Utils/storybook'

// Types
import {Orientation, Gradients} from '../../Types'

// Components
import {DraggableResizer} from './DraggableResizer'

// Notes
import DraggableResizerReadme from './DraggableResizer.md'
import DraggableResizerPanelReadme from './DraggableResizerPanel.md'
import DraggableResizerExampleAReadme from './DraggableResizerExampleA.md'
import DraggableResizerExampleBReadme from './DraggableResizerExampleB.md'

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
          handlePositions =>
            console.log(`this.setState({handlePositions: ${handlePositions}})`) // eslint-disable-line
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
      content: marked(DraggableResizerReadme),
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
      content: marked(DraggableResizerPanelReadme),
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
      content: marked(DraggableResizerExampleAReadme),
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
      content: marked(DraggableResizerExampleBReadme),
    },
  }
)
