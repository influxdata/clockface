// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  color,
  number,
  boolean,
  object,
  text,
} from '@storybook/addon-knobs'

// Components
import {ColorPicker, ColorPickerRef} from '../ColorPicker'

// Types
import {InfluxColors} from '../../../Types'

// Notes
import ColorPickerReadme from './ColorPicker.md'
import ColorPickerCustomReadme from './ColorPickerCustom.md'

const colorPickerStories = storiesOf(
  'Components|Color Picker/Family',
  module
).addDecorator(withKnobs)

const colorPickerExampleStories = storiesOf(
  'Components|Color Picker/Examples',
  module
).addDecorator(withKnobs)

colorPickerStories.add(
  'ColorPicker',
  () => {
    const colorPickerRef = createRef<ColorPickerRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(colorPickerRef.current)
      /* eslint-enable */
    }

    const defaultStyle = {width: '400px'}

    return (
      <div className="story--example">
        <ColorPicker
          ref={colorPickerRef}
          style={object('style', defaultStyle)}
          color={text('color', `${InfluxColors.Honeydew}`)}
          onChange={(color, status) => {
            alert(`Color: ${color}, Status: ${status}`)
          }}
          maintainInputFocus={boolean('maintainInputFocus', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ColorPickerReadme),
    },
  }
)

const customColors = [
  {
    hex: '#7e0037',
    name: '#7e0037',
  },
  {
    hex: '#98003b',
    name: '#98003b',
  },
  {
    hex: '#b20040',
    name: '#b20040',
  },
  {
    hex: '#cb0045',
    name: '#cb0045',
  },
  {
    hex: '#e5004a',
    name: '#e5004a',
  },
  {
    hex: '#ff004f',
    name: '#ff004f',
  },
  {
    hex: '#ff313b',
    name: '#ff313b',
  },
  {
    hex: '#ff6128',
    name: '#ff6128',
  },
  {
    hex: '#ff9214',
    name: '#ff9214',
  },
  {
    hex: '#ffc200',
    name: '#ffc200',
  },
  {
    hex: '#ffcc27',
    name: '#ffcc27',
  },
  {
    hex: '#ffd64e',
    name: '#ffd64e',
  },
  {
    hex: '#ffe075',
    name: '#ffe075',
  },
  {
    hex: '#ffe99b',
    name: '#ffe99b',
  },
  {
    hex: '#fff3c2',
    name: '#fff3c2',
  },
  {
    hex: '#fffde9',
    name: '#fffde9',
  },
]

colorPickerExampleStories.add(
  'Custom Color Palette',
  () => {
    const colorPickerRef = createRef<ColorPickerRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(colorPickerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div style={{width: `${number('Parent Width (px)', 300)}px`}}>
          <ColorPicker
            ref={colorPickerRef}
            swatchesPerRow={number('swatchesPerRow', 4)}
            color={color('color', `${customColors[3].hex}`)}
            onChange={color => {
              alert(`Swatch selected: ${color}`)
            }}
            maintainInputFocus={boolean('maintainInputFocus', false)}
            colors={object('colors', customColors)}
          />
        </div>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ColorPickerCustomReadme),
    },
  }
)
