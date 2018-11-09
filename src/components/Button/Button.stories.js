import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { wInfo } from '../../../utils'
import { text, boolean } from '@storybook/addon-knobs/react'

import { themeDecorator } from '../../ThemeContext/ThemeDecorator'

storiesOf('Components/Button', module)
  .addDecorator(story => themeDecorator(story))
  .addWithJSX(
    'basic Button',
    wInfo(`

    ### Description

    This is a button

    ### Usage
    ~~~js
    <Button
      label={'Enroll'}
      disabled={false}
      onClick={() => alert('hello there')}
    />
    ~~~`
  )(() => (
      <Button
        label={text('label', 'Clicketh Me')}
        disabled={boolean('disabled', false)}
        onClick={() => alert('hello there')}
        />
    ))
  )