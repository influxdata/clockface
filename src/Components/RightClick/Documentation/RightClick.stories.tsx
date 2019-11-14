// Libraries
import React, {useRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text, object, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {RightClick, RightClickRef} from '../'

// Types
import {ComponentColor} from '../../../Types'

// Notes
import RightClickReadme from './RightClick.md'

const rightClickStories = storiesOf(
  'Atomic|RightClick/Base',
  module
).addDecorator(withKnobs)

rightClickStories.add(
  'RightClick',
  () => {
    const triggerRef = useRef<HTMLDivElement>(null)
    const rightClickMenuRef = useRef<RightClickRef>(null)

    const logRef = (): void => {
      /* eslint-disable */
      console.log(rightClickMenuRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="clickTestZone" ref={triggerRef}>
          Right Click Me
        </div>
        <RightClick.RightClick
          ref={rightClickMenuRef}
          triggerRef={triggerRef}
          disabled={boolean('disabled', false)}
          className={text('className', '')}
          style={object('style', {})}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
        >
          <RightClick.MenuItem
            onClick={value => {
              alert(value)
            }}
            value="Cabbage"
          >
            Cabbage
          </RightClick.MenuItem>
          <RightClick.MenuItem
            onClick={value => {
              alert(value)
            }}
            value="Carrot"
          >
            Carrot
          </RightClick.MenuItem>
          <RightClick.Divider />
          <RightClick.MenuItem
            onClick={value => {
              alert(value)
            }}
            value="Turnip"
          >
            Turnip
          </RightClick.MenuItem>
          <RightClick.MenuItem
            onClick={value => {
              alert(value)
            }}
            value="Radish"
            disabled={true}
          >
            Radish
          </RightClick.MenuItem>
          <RightClick.MenuItem onClick={logRef} value="Turnip">
            Log Ref
          </RightClick.MenuItem>
        </RightClick.RightClick>
      </div>
    )
  },
  {
    readme: {
      content: marked(RightClickReadme),
    },
  }
)
