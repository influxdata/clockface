// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, text, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {Alert, AlertRef} from '../Alert'

// Types
import {ComponentColor, IconFont} from '../../../Types'

// Notes
import AlertReadme from './Alert.md'

const alertStories = storiesOf('Atomic|Alert', module).addDecorator(withKnobs)

alertStories.add(
  'Example',
  () => {
    const alertRef = createRef<AlertRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(alertRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <Alert
          ref={alertRef}
          color={
            ComponentColor[
              select('color', mapEnumKeys(ComponentColor), 'Primary')
            ]
          }
          icon={
            IconFont[
              select(
                'icon',
                {None: 'none', ...mapEnumKeys(IconFont)},
                'AlertTriangle'
              )
            ]
          }
        >
          {text('text', 'Alert Text')}
        </Alert>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(AlertReadme),
    },
  }
)
