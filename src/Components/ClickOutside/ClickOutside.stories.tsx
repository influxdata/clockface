// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {ClickOutside} from './ClickOutside'

// Notes
import ClickOutsideReadme from './ClickOutside.md'

const clickOutsideStories = storiesOf(
  'Utilities|ClickOutside',
  module
).addDecorator(jsxDecorator)

clickOutsideStories.add(
  'Example',
  () => (
    <div className="story--example">
      <ClickOutside onClickOutside={() => alert('Clicked outside')}>
        <div className="mockComponent box">Click outside this element</div>
      </ClickOutside>
    </div>
  ),
  {
    readme: {
      content: marked(ClickOutsideReadme),
    },
  }
)
