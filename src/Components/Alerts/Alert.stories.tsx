// Libraries
import React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../Utils/storybook'

// Components
import {Alert} from './Alert'

// Types
import {ComponentColor, IconFont} from '../../Types/index'

import AlertReadme from './Alert.md'

const alertStories = storiesOf('Atomic|Alert', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

alertStories.add(
  'Example',
  () => (
    <div className="story--example">
      <Alert
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
    </div>
  ),
  {
    readme: {
      content: marked(AlertReadme),
    },
  }
)
