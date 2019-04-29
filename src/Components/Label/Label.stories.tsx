// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text, color} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Label} from './Label'

// Types
import {ComponentSize, InfluxColors} from '../../Types'

const labelStories = storiesOf('Elements|Label', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

labelStories.add('Read Only Label', () => (
  <Label
    id="example-label"
    name={text('name', 'Fresh Label')}
    description={text('description', 'I am okay with being labeled')}
    color={color('backgroundColor', `${InfluxColors.Star}`)}
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
  />
))

labelStories.add('Clickable Label', () => (
  <Label
    id="example-label"
    name={text('name', 'Fresh Label')}
    description={text('description', 'I am okay with being labeled')}
    color={color('backgroundColor', `${InfluxColors.Star}`)}
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
    onClick={id => {
      alert(`Label with id: ${id} has been clicked`)
    }}
  />
))

labelStories.add('Removable Label', () => (
  <Label
    id="example-label"
    name={text('name', 'Fresh Label')}
    description={text('description', 'I am okay with being labeled')}
    color={color('backgroundColor', `${InfluxColors.Star}`)}
    size={ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]}
    onDelete={id => {
      alert(`Label with id: ${id} has been deleted`)
    }}
  />
))
