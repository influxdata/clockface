// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select, color, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {TextBlock} from './TextBlock'

// Types
import {ComponentSize, InfluxColors} from '../../Types/index'

// Notes
import TextBlockReadme from './TextBlock.md'

const textBlockStories = storiesOf('Atomic|TextBlock', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

textBlockStories.add(
  'Example',
  () => (
    <div className="story--example">
      <div style={{margin: '30px'}}>
        <TextBlock
          text="TextBlock without backgroundColor or textColor"
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          monospace={boolean('monospace', false)}
        />
      </div>
      <div style={{margin: '30px'}}>
        <TextBlock
          text={text('text', 'I am customizable!')}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          backgroundColor={color('backgroundColor', `${InfluxColors.Amethyst}`)}
          monospace={boolean('monospace', false)}
        />
      </div>
      <div style={{margin: '30px'}}>
        <TextBlock
          text={text('text', 'I am customizable!')}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          backgroundColor={color('backgroundColor', `${InfluxColors.Amethyst}`)}
          textColor={color('textColor', `${InfluxColors.Krypton}`)}
          monospace={boolean('monospace', false)}
        />
      </div>
    </div>
  ),
  {
    readme: {
      content: marked(TextBlockReadme),
    },
  }
)
