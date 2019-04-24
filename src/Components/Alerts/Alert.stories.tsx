// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'

// Components
import {Alert} from './Alert'

// Types
import {ComponentColor, IconFont} from '../../Types/index'

// Notes
const README = require('./README.md')

const alertStories = storiesOf('Components|Alerts', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

alertStories.add(
  'Alert Component',
  () => (
    <Alert
      color={
        ComponentColor[select('color', mapEnumKeys(ComponentColor), 'Primary')]
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
  ),
  {notes: marked(README)}
)
