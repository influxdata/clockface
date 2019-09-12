// Libraries
import React, {CSSProperties} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {
  withKnobs,
  text,
  select,
  color,
  boolean,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'

// Components
import {TextBlock} from 'src/Components/TextBlock/TextBlock'

// Types
import {ComponentSize} from 'src/Types'

// Notes
import TextBlockReadme from 'src/Components/TextBlock/TextBlock.md'

const textBlockStories = storiesOf('Atomic|TextBlock', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

const customTextBlockStyles: CSSProperties = {
  backgroundImage: 'linear-gradient(90deg, #ff0054 0%, rgba(0,212,255,1) 100%)',
  width: '200px',
  textAlign: 'center',
}

textBlockStories.add(
  'Example',
  () => (
    <div className="story--example">
      <div style={{margin: '15px'}}>
        <TextBlock
          text="No backgroundColor or textColor"
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          monospace={boolean('monospace', false)}
        />
      </div>
      <div style={{margin: '15px'}}>
        <TextBlock
          text={text('text', 'I am customizable!')}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          backgroundColor={color('backgroundColor', '')}
          monospace={boolean('monospace', false)}
        />
      </div>
      <div style={{margin: '15px'}}>
        <TextBlock
          text={text('text', 'I am customizable!')}
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          backgroundColor={color('backgroundColor', '')}
          textColor={color('textColor', '')}
          monospace={boolean('monospace', false)}
        />
      </div>
      <div style={{margin: '15px'}}>
        <TextBlock
          text="I can be styled"
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
          backgroundColor={color('backgroundColor', '')}
          textColor={color('textColor', '')}
          monospace={boolean('monospace', false)}
          style={object('style', customTextBlockStyles)}
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
