import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {Button} from './Button'

storiesOf('Button Component', module).add(
  'Button',
  () => <Button text="some text" onClick={() => console.log('clicked')} />,
  {
    info: {
      text: `
  ### Notes

  This is a button
`
    }
  }
)
