// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number, boolean, text, object} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {Popover} from './Popover'
import {ReflessPopover} from './ReflessPopover'
import {DismissButton} from '../Button/Composed/DismissButton'

// Types
import {
  PopoverType,
  PopoverInteraction,
  PopoverPosition,
  ComponentColor,
} from '../../Types'

// Notes
import PopoverReadme from './Popover.md'
import ReflessPopoverReadme from './ReflessPopover.md'

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
    const triggerRef = React.createRef<HTMLDivElement>()

    return (
      <div className="story--example">
        <div className="mockComponent mockButton" ref={triggerRef}>Popover Trigger Element</div>
        <Popover
          triggerRef={triggerRef}
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
