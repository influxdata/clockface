// Libraries
import React, {CSSProperties, RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Icon} from './Icon'

// Types
import {IconFont} from '../../Types'

// Notes
import IconReadme from './Icon.md'

const iconStories = storiesOf('Atomic|Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const iconStyleExample: CSSProperties = {color: '#6BDFFF', fontSize: '60px'}

iconStories.add(
  'Example',
  () => {
    const iconRef: RefObject<HTMLSpanElement> = createRef()

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
