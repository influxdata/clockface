// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  select,
  number,
  boolean,
  text,
  object,
} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Popover, PopoverRef} from '..'
import {ReflessPopover, ReflessPopoverRef} from '../Composed/ReflessPopover'
import {
  QuestionMarkTooltip,
  QuestionMarkTooltipRef,
} from '../Composed/QuestionMarkTooltip'

// Types
import {
  PopoverType,
  PopoverInteraction,
  PopoverPosition,
  ComponentColor,
} from '../../../Types'

// Notes
import PopoverReadme from './Popover.md'
import ReflessPopoverReadme from './ReflessPopover.md'
import QuestionMarkTooltipReadme from './QuestionMarkTooltip.md'

const popoverStories = storiesOf('Atomic|Popover/Base', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const composedPopoverStories = storiesOf('Atomic|Popover/Composed', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const exampleStyle = {
  width: '250px',
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

popoverStories.add(
  'Popover',
  () => {
    const triggerRefA = React.createRef<HTMLDivElement>()
    const triggerRefB = React.createRef<HTMLDivElement>()
    const popover1Ref = createRef<PopoverRef>()
    const popover2Ref = createRef<PopoverRef>()

    const log1Ref = (): void => {
      /* eslint-disable */
      console.log(popover1Ref.current)
      /* eslint-enable */
    }

    const log2Ref = (): void => {
      /* eslint-disable */
      console.log(popover2Ref.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div
          className="mockComponent mockButton"
          ref={triggerRefA}
          style={{marginRight: '60px'}}
        >
          Click Me
        </div>
        <div className="mockComponent mockButton" ref={triggerRefB}>
          Hover Me
        </div>
        <Popover.Popover
          ref={popover1Ref}
          triggerRef={triggerRefA}
          visible={boolean('visible', false)}
          enableDefaultStyles={false}
          contents={(onHide: any) => (
            <>
              PopoverContents
              <Popover.DismissButton onClick={onHide} />
              <div className="story--test-buttons">
                <button onClick={log1Ref}>Log Ref</button>
              </div>
            </>
          )}
          className={text('className', '')}
          style={object('style', exampleStyle)}
          caretSize={number('caretSize', 8)}
          distanceFromTrigger={number('distanceFromTrigger', 4)}
          showEvent={PopoverInteraction.Click}
          hideEvent={PopoverInteraction.Click}
          position={
            PopoverPosition[
              select('position', mapEnumKeys(PopoverPosition), 'Below')
            ]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          type={
            PopoverType[select('type', mapEnumKeys(PopoverType), 'Outline')]
          }
        />
        <Popover.Popover
          ref={popover2Ref}
          triggerRef={triggerRefB}
          enableDefaultStyles={boolean('enableDefaultStyles', true)}
          contents={() => (
            <>
              <div style={{marginTop: '30px'}}>
                I'm just a simple popover looking for my
                <br />
                place in this <strong>vast and beautiful</strong> world.
                <br />
                Will you help me?
              </div>
              <div className="story--test-buttons">
                <button onClick={log2Ref}>Log Ref</button>
              </div>
            </>
          )}
          showEvent={PopoverInteraction.Hover}
          hideEvent={PopoverInteraction.Hover}
          position={PopoverPosition.ToTheRight}
          color={ComponentColor.Secondary}
          type={PopoverType.Solid}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(PopoverReadme),
    },
  }
)

composedPopoverStories.add(
  'ReflessPopover',
  () => {
    const popoverRef = createRef<ReflessPopoverRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(popoverRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <ReflessPopover
          ref={popoverRef}
          visible={boolean('visible', false)}
          enableDefaultStyles={boolean('enableDefaultStyles', false)}
          contents={onHide => (
            <>
              PopoverContents
              <Popover.DismissButton onClick={onHide} />
            </>
          )}
          className={text('className', '')}
          style={object('style', exampleStyle)}
          triggerStyle={object('triggerStyle', {display: 'inline-block'})}
          caretSize={number('caretSize', 8)}
          distanceFromTrigger={number('distanceFromTrigger', 4)}
          showEvent={PopoverInteraction.Click}
          hideEvent={PopoverInteraction.Click}
          position={
            PopoverPosition[
              select('position', mapEnumKeys(PopoverPosition), 'Below')
            ]
          }
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          type={
            PopoverType[select('type', mapEnumKeys(PopoverType), 'Outline')]
          }
        >
          <div className="mockComponent mockButton">
            Popover Trigger Element
          </div>
        </ReflessPopover>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ReflessPopoverReadme),
    },
  }
)

composedPopoverStories.add(
  'QuestionMarkTooltip',
  () => {
    const popoverRef = createRef<QuestionMarkTooltipRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(popoverRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <QuestionMarkTooltip
          ref={popoverRef}
          diameter={number('diameter', 18)}
          tooltipContents={text('tooltipContents', 'Hello world!')}
          className={text('className', '')}
          style={object('style', {})}
          tooltipStyle={object('tooltipStyle', {})}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(QuestionMarkTooltipReadme),
    },
  }
)
