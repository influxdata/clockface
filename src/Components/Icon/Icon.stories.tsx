// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select} from '@storybook/addon-knobs'
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
  <div className="story--container story-large embiggen">
    <Icon glyph={IconFont[select('glyph', mapEnumKeys(IconFont), 'Bell')]} />
  </div>
))
