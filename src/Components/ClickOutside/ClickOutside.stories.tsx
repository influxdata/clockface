// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {ClickOutside} from './ClickOutside'

const clickOutsideStories = storiesOf(
  'Utilities|ClickOutside',
  module
).addDecorator(jsxDecorator)

clickOutsideStories.add('Example', () => {
  return (
    <ClickOutside onClickOutside={() => alert('Clicked outside')}>
      <div className="mockComponent box" />
    </ClickOutside>
  )
})
