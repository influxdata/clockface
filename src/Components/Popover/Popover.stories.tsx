// Libraries
import * as React from 'react'
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
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {Popover} from './Base/Popover'
import {ReflessPopover} from './Composed/ReflessPopover'
import {QuestionMarkTooltip} from './Composed/QuestionMarkTooltip'
import {DismissButton} from '../Button/Composed/DismissButton'

// Types
import {
  PopoverType,
  PopoverInteraction,
  PopoverPosition,
  ComponentColor,
} from '../../Types'

// Notes
import PopoverReadme from './Base/Popover.md'
import ReflessPopoverReadme from './Composed/ReflessPopover.md'
import QuestionMarkTooltipReadme from './Composed/QuestionMarkTooltip.md'

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

    return (
      <div className="story--example">
        <div
          className="mockComponent mockButton"
          ref={triggerRefA}
          style={{marginRight: '60px'}}
        >
          Popover Trigger Element
        </div>
        <div className="mockComponent mockButton" ref={triggerRefB}>
          Hover Me
        </div>
        <Popover
          triggerRef={triggerRefA}
          visible={boolean('visible', false)}
          enableDefaultStyles={false}
          contents={onHide => (
            <>
              PopoverContents
              <DismissButton onClick={onHide} />
            </>
          )}
          className={text('className', '')}
          style={object('style', exampleStyle)}
          caretSize={number('caretSize', 8)}
          distanceFromTrigger={number('distanceFromTrigger', 4)}
          showEvent={
            PopoverInteraction[
              select('showEvent', mapEnumKeys(PopoverInteraction), 'Click')
            ]
          }
          hideEvent={
            PopoverInteraction[
              select('hideEvent', mapEnumKeys(PopoverInteraction), 'Click')
            ]
          }
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
        <Popover
          triggerRef={triggerRefB}
          enableDefaultStyles={boolean('enableDefaultStyles', true)}
          contents={() => (
            <>
              I'm just a simple popover looking for my
              <br />
              place in this <strong>vast and beautiful</strong> world.
              <br />
              Will you help me?
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
  () => (
    <div className="story--example">
      <ReflessPopover
        visible={boolean('visible', false)}
        enableDefaultStyles={boolean('enableDefaultStyles', false)}
        contents={onHide => (
          <>
            PopoverContents
            <DismissButton onClick={onHide} />
          </>
        )}
        className={text('className', '')}
        style={object('style', exampleStyle)}
        triggerStyle={object('triggerStyle', {display: 'inline-block'})}
        caretSize={number('caretSize', 8)}
        distanceFromTrigger={number('distanceFromTrigger', 4)}
        showEvent={
          PopoverInteraction[
            select('showEvent', mapEnumKeys(PopoverInteraction), 'Click')
          ]
        }
        hideEvent={
          PopoverInteraction[
            select('hideEvent', mapEnumKeys(PopoverInteraction), 'Click')
          ]
        }
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
        type={PopoverType[select('type', mapEnumKeys(PopoverType), 'Outline')]}
      >
        <div className="mockComponent mockButton">Popover Trigger Element</div>
      </ReflessPopover>
    </div>
  ),
  {
    readme: {
      content: marked(ReflessPopoverReadme),
    },
  }
)

composedPopoverStories.add(
  'QuestionMarkTooltip',
  () => (
    <div className="story--example">
      <QuestionMarkTooltip
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
    </div>
  ),
  {
    readme: {
      content: marked(QuestionMarkTooltipReadme),
    },
  }
)
