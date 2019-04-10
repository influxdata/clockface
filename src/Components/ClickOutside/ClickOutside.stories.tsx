import * as React from 'react'
import {storiesOf} from '@storybook/react'
import {ClickOutside} from './ClickOutside'

const clickOutsideStories = storiesOf('Utilities|ClickOutside', module)

clickOutsideStories.add('Example', () => {
  return (
    <ClickOutside onClickOutside={() => alert('Clicked outside')}>
      <div className="mockComponent box" />
    </ClickOutside>
  )
})
