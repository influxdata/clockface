// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, color} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {ColorPicker} from './ColorPicker'
import {ColorPickerSwatch} from './ColorPickerSwatch'

const colorPickerStories = storiesOf('Components|Color Pickers', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

colorPickerStories.add('ColorPicker Component', () => (
  <div className="story--container story-large">
    <ColorPicker color={color('color', '#311F94')} onChange={() => {}} />
  </div>
))

colorPickerStories.add('ColorPickerSwatch Component', () => (
  <div className="story--container story-large clearfix">
    <ColorPickerSwatch
      hex={color('hex', '#311F94')}
      name={text('name', 'Void')}
      onClick={() => {}}
    />
  </div>
))
