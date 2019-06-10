// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, color, number} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Icon} from './Icon'

// Types
import {IconFont} from '../../Types'

// Notes
const IconReadme = marked(require('./Icon.md'))

const iconStories = storiesOf('Atomic|Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

iconStories.add(
  'Example',
  () => (
    <div
      className="story--example"
      style={{fontSize: `${number('Font Size', 60)}px`}}
    >
      <Icon
        glyph={IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]}
        color={color('color', '')}
      />
    </div>
  ),
  {
    readme: {
      content: IconReadme,
    },
  }
)
