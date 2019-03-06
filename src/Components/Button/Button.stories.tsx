import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Button} from './Button'
import {withKnobs, text, radios, boolean} from '@storybook/addon-knobs'
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  ButtonShape,
  ComponentStatus,
  ButtonType,
} from '../../Types'
import {mapEnumKeys} from '../../../.storybook/utils'

const buttonStories = storiesOf('Button Component', module).addDecorator(
  withKnobs
)

buttonStories.add('Button', () => (
  <Button
    text={text('text', 'Button Text')}
    onClick={() => alert('clicked')}
    icon={IconFont[radios('icon', mapEnumKeys(IconFont, 5))]}
    titleText={text('titleText', 'Title Text')}
    color={ComponentColor[radios('color', mapEnumKeys(ComponentColor))]}
    size={ComponentSize[radios('size', mapEnumKeys(ComponentSize))]}
    shape={ButtonShape[radios('shape', mapEnumKeys(ButtonShape))]}
    status={ComponentStatus[radios('status', mapEnumKeys(ComponentStatus))]}
    active={boolean('active', false)}
    type={ButtonType[radios('type', mapEnumKeys(ButtonType))]}
  />
))
