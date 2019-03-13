import * as React from 'react'
import {storiesOf} from '@storybook/react'

import {Alert} from './Alert'

import {withKnobs, radios, text} from '@storybook/addon-knobs'
import {ComponentColor, IconFont} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const alertStories = storiesOf('Alerts', module).addDecorator(withKnobs)

alertStories.add('Alert Component', () => (
  <Alert
    color={ComponentColor[radios('color', mapEnumKeys(ComponentColor))]}
    icon={IconFont[radios('icon', mapEnumKeys(IconFont, 10))]}
  >
    {text('text', 'Alert Text')}
  </Alert>
))
