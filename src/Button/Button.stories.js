import React from 'react'

import { storiesOf } from '@storybook/react'
import { Button } from './Button'
import { wInfo } from '../../utils'
import { text, boolean } from '@storybook/addon-knobs/react'

storiesOf('Components/Button', module).addWithJSX(
  'basic Button',
  wInfo(`

  ### Notes

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
      label={text('label', 'Do the thing')}
      disabled={boolean('disabled', false)}
      onClick={() => alert('hello there')}
    />
  ))
)