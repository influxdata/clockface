import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {SlideToggle} from './SlideToggle'
import {withKnobs, text, radios, boolean} from '@storybook/addon-knobs'
import {ComponentColor, ComponentSize} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const slideToggleStories = storiesOf(
  'SlideToggle Component',
  module
).addDecorator(withKnobs)

slideToggleStories.add('Slide Toggle', () => (
  <SlideToggle
    onChange={() => alert('clicked')}
    active={boolean('active', false)}
    disabled={boolean('disabled', false)}
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    color={ComponentColor[radios('color', mapEnumKeys(ComponentColor))]}
    tooltipText={text('tooltipText', 'Tooltip Text')}
  />
))

slideToggleStories.add('Slide Toggle with Label', () => (
  <div>
    <SlideToggle.Label text={text('text', 'Label Text')} />
    <SlideToggle
      onChange={() => alert('onChange()')}
      active={boolean('active', false)}
      disabled={boolean('disabled', false)}
      size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
      color={ComponentColor[radios('color', mapEnumKeys(ComponentColor))]}
      tooltipText={text('tooltipText', 'Tooltip Text')}
    />
  </div>
))
