// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {Popover} from './Popover'
import {PopoverDismissButton} from './PopoverDismissButton'

// Types
import {
  PopoverType,
  PopoverInteraction,
  PopoverPosition,
  ComponentColor,
} from '../../Types'

// Notes
import PopoverReadme from './Popover.md'

const tooltipStories = storiesOf('Atomic|Popover', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

tooltipStories.add(
  'Example',
  () => (
    <div className="story--example">
      <Popover
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
            <PopoverDismissButton onClick={onHide} />
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
