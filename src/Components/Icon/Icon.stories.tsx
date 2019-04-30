// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, color, number} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Icon} from './Icon'

// Types
import {IconFont} from '../../Types'

const iconStories = storiesOf('Elements|Icon', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

iconStories.add('Icon Component', () => (
  <div
    className="story--example"
    style={{fontSize: `${number('Font Size', 60)}px`}}
  >
    <Icon
      glyph={IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]}
      color={color('color', '')}
    />
  </div>
))
