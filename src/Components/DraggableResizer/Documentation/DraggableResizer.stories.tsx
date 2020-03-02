// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import {useState} from '@storybook/addons'

// Types
import {Orientation, Gradients} from '../../../Types'

// Components
import {DraggableResizer, DraggableResizerPanelRef} from '../'

// Notes
import DraggableResizerReadme from './DraggableResizer.md'
import DraggableResizerPanelReadme from './DraggableResizerPanel.md'
import DraggableResizerExampleAReadme from './DraggableResizerExampleA.md'
import DraggableResizerExampleBReadme from './DraggableResizerExampleB.md'

const draggableResizerExamplesStories = storiesOf(
  'Layout|Draggable Resizer/Examples',
  module
).addDecorator(withKnobs)

const draggableResizerStories = storiesOf(
  'Layout|Draggable Resizer/Family',
  module
).addDecorator(withKnobs)

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
  () => {
    const draggableResizerPanelRef = createRef<DraggableResizerPanelRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(draggableResizerPanelRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <DraggableResizer.Panel
          ref={draggableResizerPanelRef}
          minSizePixels={50}
          sizePercent={0.5}
        >
          <div className="mockCard" />
        </DraggableResizer.Panel>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DraggableResizerPanelReadme),
    },
  }
)

draggableResizerExamplesStories.add(
  '2 Panels',
  () => {
    const [position, updatePosition] = useState<number[]>([0.5])
    const draggableResizerPanelRef1 = createRef<DraggableResizerPanelRef>()
    const draggableResizerPanelRef2 = createRef<DraggableResizerPanelRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(draggableResizerPanelRef1.current)
      console.log(draggableResizerPanelRef2.current)
      /* eslint-enable */
    }

    return (
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
          handlePositions={position}
          onChangePositions={handlePositions => updatePosition(handlePositions)}
        >
          <DraggableResizer.Panel ref={draggableResizerPanelRef1}>
            <div className="mockCard">
              <span>1</span>
            </div>
          </DraggableResizer.Panel>
          <DraggableResizer.Panel ref={draggableResizerPanelRef2}>
            <div className="mockCard">
              <span>2</span>
            </div>
          </DraggableResizer.Panel>
        </DraggableResizer>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DraggableResizerExampleAReadme),
    },
  }
)

draggableResizerExamplesStories.add(
  '4 Panels',
  () => {
    const [positions, updatePositions] = useState<number[]>([0.25, 0.5, 0.75])

    const draggableResizerPanelRef1 = createRef<DraggableResizerPanelRef>()
    const draggableResizerPanelRef2 = createRef<DraggableResizerPanelRef>()
    const draggableResizerPanelRef3 = createRef<DraggableResizerPanelRef>()
    const draggableResizerPanelRef4 = createRef<DraggableResizerPanelRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(draggableResizerPanelRef1.current)
      console.log(draggableResizerPanelRef2.current)
      console.log(draggableResizerPanelRef3.current)
      console.log(draggableResizerPanelRef4.current)
      /* eslint-enable */
    }

    return (
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
          handlePositions={positions}
          onChangePositions={handlePositions =>
            updatePositions(handlePositions)
          }
        >
          <DraggableResizer.Panel ref={draggableResizerPanelRef1}>
            <div className="mockCard">
              <span>1</span>
            </div>
          </DraggableResizer.Panel>
          <DraggableResizer.Panel ref={draggableResizerPanelRef2}>
            <div className="mockCard">
              <span>2</span>
            </div>
          </DraggableResizer.Panel>
          <DraggableResizer.Panel ref={draggableResizerPanelRef3}>
            <div className="mockCard">
              <span>3</span>
            </div>
          </DraggableResizer.Panel>
          <DraggableResizer.Panel ref={draggableResizerPanelRef4}>
            <div className="mockCard">
              <span>4</span>
            </div>
          </DraggableResizer.Panel>
        </DraggableResizer>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(DraggableResizerExampleBReadme),
    },
  }
)
