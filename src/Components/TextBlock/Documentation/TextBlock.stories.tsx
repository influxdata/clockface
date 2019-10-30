// Libraries
import React, {CSSProperties, RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  text,
  select,
  color,
  boolean,
  object,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {TextBlock, TextBlockRef} from '../'

// Types
import {ComponentSize} from '../../../Types'

// Notes
import TextBlockReadme from './TextBlock.md'

const textBlockStories = storiesOf('Atomic|TextBlock', module).addDecorator(
  withKnobs
)

const customTextBlockStyles: CSSProperties = {
  backgroundImage: 'linear-gradient(90deg, #ff0054 0%, rgba(0,212,255,1) 100%)',
  width: '200px',
  textAlign: 'center',
}

textBlockStories.add(
  'Example',
  () => {
    const textBlock1Ref: RefObject<TextBlockRef> = createRef()
    const textBlock2Ref: RefObject<TextBlockRef> = createRef()
    const textBlock3Ref: RefObject<TextBlockRef> = createRef()
    const textBlock4Ref: RefObject<TextBlockRef> = createRef()

    const logLabelRefs = (): void => {
      /* eslint-disable */
      console.log('TextBlock 1', textBlock1Ref.current)
      console.log('TextBlock 2', textBlock2Ref.current)
      console.log('TextBlock 3', textBlock3Ref.current)
      console.log('TextBlock 4', textBlock4Ref.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div style={{margin: '15px'}}>
          <TextBlock
            ref={textBlock1Ref}
            text="No backgroundColor or textColor"
            size={
              ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
            }
            monospace={boolean('monospace', false)}
          />
        </div>
        <div style={{margin: '15px'}}>
          <TextBlock
            ref={textBlock2Ref}
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
            ref={textBlock3Ref}
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
            ref={textBlock4Ref}
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
        <div className="story--test-buttons">
          <button onClick={logLabelRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(TextBlockReadme),
    },
  }
)
