// Libraries
import React, {CSSProperties, RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Icon, IconRef} from '../'

// Types
import {IconFont} from '../../../Types'

// Notes
import IconReadme from './Icon.md'

const iconStories = storiesOf('Atomic|Icon', module).addDecorator(withKnobs)

iconStories.add(
  'Example',
  () => {
    const iconStyleExample: CSSProperties = {color: '#6BDFFF', fontSize: '60px'}
    const iconRef: RefObject<IconRef> = createRef()

    const logIconRef = (): void => {
      /* eslint-disable */
      console.log(iconRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Icon
          ref={iconRef}
          glyph={IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]}
          style={object('style', iconStyleExample)}
        />
        <div className="story--test-buttons">
          <button onClick={logIconRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IconReadme),
    },
  }
)
