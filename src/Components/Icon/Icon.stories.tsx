import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Icon} from './Icon'
import {withKnobs, select} from '@storybook/addon-knobs'
import {IconFont} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const iconStories = storiesOf('Icon', module).addDecorator(withKnobs)

iconStories.add('Icon Component', () => (
  <div className="story--container story-large embiggen">
    <Icon glyph={IconFont[select('icon', mapEnumKeys(IconFont), 'Bell')]} />
  </div>
))
