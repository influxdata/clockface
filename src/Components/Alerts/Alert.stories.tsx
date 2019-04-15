// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, text, select} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../.storybook/utils'

// Components
import {Alert} from './Alert'

// Types
import {ComponentColor, IconFont} from '../../Types'

const alertStories = storiesOf('Components|Alerts', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

alertStories.add('Alert Component', () => (
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
))
