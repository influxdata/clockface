// Libraries
import React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'

// Readme
import IndexReadme from './index.md'

const dataTypeStories = storiesOf('Home/Clockface', module)

dataTypeStories.add(
  'Overview',
  () => {
    return <div className="markdown-body"></div>
  },
  {
    readme: {
      content: IndexReadme,
    },
  }
)
