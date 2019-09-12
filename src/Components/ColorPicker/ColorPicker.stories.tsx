// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, color, number, boolean, object} from '@storybook/addon-knobs'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {ColorPicker} from 'src/Components/ColorPicker/ColorPicker'

// Types
import {InfluxColors} from 'src/Types'

// Notes
import ColorPickerReadme from 'src/Components/ColorPicker/ColorPicker.md'
import ColorPickerCustomReadme from 'src/Components/ColorPicker/ColorPickerCustom.md'

const colorPickerStories = storiesOf('Components|Color Picker/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const colorPickerExampleStories = storiesOf(
  'Components|Color Picker/Examples',
  module
)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

colorPickerStories.add(
  'ColorPicker',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Parent Width (px)', 300)}`}}>
        <ColorPicker
          color={color('color', `${InfluxColors.Honeydew}`)}
          onChange={color => {
            alert(`Swatch selected: ${color}`)
          }}
          maintainInputFocus={boolean('maintainInputFocus', false)}
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(ColorPickerReadme),
    },
  }
)

const customColors = [
  {
    hex: '#7e0037',
    name: '',
  },
  {
    hex: '#98003b',
    name: '',
  },
  {
    hex: '#b20040',
    name: '',
  },
  {
    hex: '#cb0045',
    name: '',
  },
  {
    hex: '#e5004a',
    name: '',
  },
  {
    hex: '#ff004f',
    name: '',
  },
  {
    hex: '#ff313b',
    name: '',
  },
  {
    hex: '#ff6128',
    name: '',
  },
  {
    hex: '#ff9214',
    name: '',
  },
  {
    hex: '#ffc200',
    name: '',
  },
  {
    hex: '#ffcc27',
    name: '',
  },
  {
    hex: '#ffd64e',
    name: '',
  },
  {
    hex: '#ffe075',
    name: '',
  },
  {
    hex: '#ffe99b',
    name: '',
  },
  {
    hex: '#fff3c2',
    name: '',
  },
  {
    hex: '#fffde9',
    name: '',
  },
]

colorPickerExampleStories.add(
  'Custom Color Palette',
  () => (
    <div className="story--example">
      <div style={{width: `${number('Parent Width (px)', 300)}px`}}>
        <ColorPicker
          swatchesPerRow={number('swatchesPerRow', 4)}
          color={color('color', `${customColors[3].hex}`)}
          onChange={color => {
            alert(`Swatch selected: ${color}`)
          }}
          maintainInputFocus={boolean('maintainInputFocus', false)}
          colors={object('colors', customColors)}
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(ColorPickerCustomReadme),
    },
  }
)
