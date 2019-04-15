// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, radios, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {SlideToggle} from './SlideToggle'

// Types
import {ComponentColor, ComponentSize} from '../../Types'

const slideToggleStories = storiesOf('Components|Slide Toggles', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

slideToggleStories.add('SlideToggle Component', () => (
  <SlideToggle
    onChange={() => alert('clicked')}
    active={boolean('active', false)}
    disabled={boolean('disabled', false)}
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    color={ComponentColor[radios('color', mapEnumKeys(ComponentColor))]}
    tooltipText={text('tooltipText', 'Tooltip Text')}
  />
))

slideToggleStories.add('SlideToggle Component with Label', () => (
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
