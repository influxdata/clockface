// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, boolean, number} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {FlexBox, FlexBoxRef, FlexBoxChildRef} from '../'

// Types
import {
  AlignItems,
  FlexDirection,
  JustifyContent,
  ComponentSize,
} from '../../../Types'

// Notes
import FlexBoxReadme from './FlexBox.md'
import FlexBoxChildReadme from './FlexBoxChild.md'

const componentSpacerStories = storiesOf('Layout|FlexBox', module).addDecorator(
  withKnobs
)

componentSpacerStories.add(
  'FlexBox',
  () => {
    const flexBoxRef: RefObject<FlexBoxRef> = createRef()

    const handleLogRef = (): void => {
      /* eslint-disable */
      console.log(flexBoxRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <FlexBox.FlexBox
          ref={flexBoxRef}
          direction={
            FlexDirection[
              select('direction', mapEnumKeys(FlexDirection), 'Row')
            ]
          }
          alignItems={
            AlignItems[select('alignItems', mapEnumKeys(AlignItems), 'Center')]
          }
          justifyContent={
            JustifyContent[
              select(
                'justifyContent ',
                mapEnumKeys(JustifyContent),
                'FlexStart'
              )
            ]
          }
          margin={
            ComponentSize[
              select(
                'margin',
                {None: '', ...mapEnumKeys(ComponentSize)},
                'None'
              )
            ]
          }
          stretchToFitWidth={boolean('stretchToFitWidth', false)}
          stretchToFitHeight={boolean('stretchToFitHeight', false)}
        >
          <div
            className="mockComponent box"
            style={{height: '40px', width: '40px'}}
          />
          <div
            className="mockComponent box"
            style={{height: '60px', width: '60px'}}
          />
          <div
            className="mockComponent box"
            style={{height: '80px', width: '80px'}}
          />
          <div
            className="mockComponent box"
            style={{height: '100px', width: '100px'}}
          />
          <div
            className="mockComponent box"
            style={{height: '120px', width: '120px'}}
          />
        </FlexBox.FlexBox>
        <div className="story--test-buttons">
          <button onClick={handleLogRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FlexBoxReadme),
    },
  }
)

componentSpacerStories.add(
  'FlexChild',
  () => {
    const flexBoxRef: RefObject<FlexBoxRef> = createRef()
    const flexBoxChildARef: RefObject<FlexBoxChildRef> = createRef()
    const flexBoxChildBRef: RefObject<FlexBoxChildRef> = createRef()
    const flexBoxChildCRef: RefObject<FlexBoxChildRef> = createRef()
    const flexBoxChildDRef: RefObject<FlexBoxChildRef> = createRef()

    const handleLogRefs = (): void => {
      /* eslint-disable */
      console.log('FlexBox', flexBoxRef.current)
      console.log('FlexBoxChild A', flexBoxChildARef.current)
      console.log('FlexBoxChild B', flexBoxChildBRef.current)
      console.log('FlexBoxChild C', flexBoxChildCRef.current)
      console.log('FlexBoxChild D', flexBoxChildDRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <FlexBox.FlexBox
          ref={flexBoxRef}
          direction={FlexDirection.Row}
          alignItems={AlignItems.Center}
          justifyContent={JustifyContent.FlexStart}
          margin={
            ComponentSize[
              select(
                'margin',
                {None: '', ...mapEnumKeys(ComponentSize)},
                'Small'
              )
            ]
          }
          stretchToFitWidth={true}
        >
          <FlexBox.Child
            ref={flexBoxChildARef}
            basis={number('Child A: basis', 40)}
            grow={number('Child A: grow', 0)}
            shrink={number('Child A: shrink', 0)}
          >
            <div className="mockComponent stretch">A</div>
          </FlexBox.Child>
          <FlexBox.Child
            ref={flexBoxChildBRef}
            basis={number('Child B: basis', 0)}
            grow={number('Child B: grow', 1)}
            shrink={number('Child B: shrink', 0)}
          >
            <div className="mockComponent stretch">B</div>
          </FlexBox.Child>
          <FlexBox.Child
            ref={flexBoxChildCRef}
            basis={number('Child C: basis', 0)}
            grow={number('Child C: grow', 2)}
            shrink={number('Child C: shrink', 0)}
          >
            <div className="mockComponent stretch">C</div>
          </FlexBox.Child>
          <FlexBox.Child
            ref={flexBoxChildDRef}
            basis={number('Child D: basis', 80)}
            grow={number('Child D: grow', 0)}
            shrink={number('Child D: shrink', 0)}
          >
            <div className="mockComponent stretch">D</div>
          </FlexBox.Child>
        </FlexBox.FlexBox>
        <div className="story--test-buttons">
          <button onClick={handleLogRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(FlexBoxChildReadme),
    },
  }
)
