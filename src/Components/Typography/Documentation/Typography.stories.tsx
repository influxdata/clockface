// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Heading, HeadingRef} from '../'

// Types
import {HeadingElement, Typeface, FontWeight} from '../../../Types'

// Notes
import HeadingReadme from './Heading.md'

const headingStories = storiesOf('Atomic|Heading', module).addDecorator(
  withKnobs
)

headingStories.add(
  'Example',
  () => {
    const headingRef: RefObject<HeadingRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log('Heading', headingRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Heading
          ref={headingRef}
          element={
            HeadingElement[select('element', mapEnumKeys(HeadingElement), 'H1')]
          }
          appearance={
            HeadingElement[
              select(
                'appearance',
                {Inherit: '', ...mapEnumKeys(HeadingElement)},
                'Inherit'
              )
            ]
          }
          type={Typeface[select('type', mapEnumKeys(Typeface), 'Rubik')]}
          weight={
            FontWeight[select('weight', mapEnumKeys(FontWeight), 'Medium')]
          }
          underline={boolean('underline', false)}
          selectable={boolean('selectable', false)}
          onClick={() => alert('clicked')}
        >
          {text('text', 'Gigantic Mental Fortitude')}
        </Heading>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(HeadingReadme),
    },
  }
)
