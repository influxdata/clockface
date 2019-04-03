import * as React from 'react'
import {storiesOf} from '@storybook/react'

import {Alert} from './Alert'

import {withKnobs, text, select} from '@storybook/addon-knobs'
import {ComponentColor, IconFont} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const alertStories = storiesOf('Alerts', module).addDecorator(withKnobs)

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
