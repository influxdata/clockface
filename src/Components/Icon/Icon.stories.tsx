// Libraries
import React, {CSSProperties} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, number, object} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Icon} from 'src/Components/Icon/Icon'

// Types
import {IconFont} from 'src/Types'

// Notes
import IconReadme from 'src/Components/Icon/Icon.md'

const iconStories = storiesOf('Atomic|Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const iconStyleExample: CSSProperties = {color: '#6BDFFF'}

iconStories.add(
  'Example',
  () => (
    <div
      className="story--example"
      style={{fontSize: `${number('Font Size', 60)}px`}}
    >
      <Icon
        glyph={IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]}
        style={object('style', iconStyleExample)}
      />
    </div>
  ),
  {
    readme: {
      content: marked(IconReadme),
    },
  }
)
