// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number, boolean, text} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {Popover} from './Popover'
import {TextPopover} from './TextPopover'
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
import TextPopoverReadme from './TextPopover.md'

const popoverStories = storiesOf('Atomic|Popover/Base', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const composedPopoverStories = storiesOf('Atomic|Popover/Composed', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

popoverStories.add(
  'Popover',
  () => (
    <div className="story--example">
      <Popover
        visible={boolean('visible', false)}
        contents={onHide => (
          <div
            style={{
              width: `${number('dialog width px', 250)}px`,
              height: `${number('dialog height px', 200)}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
            }}
          >
            PopoverContents
            <DismissButton onClick={onHide} />
          </div>
        )}
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
            select('color', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        type={PopoverType[select('type', mapEnumKeys(PopoverType), 'Solid')]}
      >
        <div className="mockComponent mockButton">Popover Trigger Element</div>
      </Popover>
    </div>
  ),
  {
    readme: {
      content: marked(PopoverReadme),
    },
  }
)

composedPopoverStories.add(
  'TextPopover',
  () => (
    <div className="story--example">
      <TextPopover
        visible={boolean('visible', false)}
        text={text('text', 'Howdy friend!')}
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
            select('color', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        dismissButtonColor={
          ComponentColor[
            select('dismissButtonColor', mapEnumKeys(ComponentColor), 'Default')
          ]
        }
        showDismissButton={boolean('showDismissButton', false)}
        type={PopoverType[select('type', mapEnumKeys(PopoverType), 'Solid')]}
      >
        <div className="mockComponent mockButton">Popover Trigger Element</div>
      </TextPopover>
    </div>
  ),
  {
    readme: {
      content: marked(TextPopoverReadme),
    },
  }
)
