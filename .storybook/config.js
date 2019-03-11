import {addDecorator, configure} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'
import {darkTheme, TableComponent} from './StoryLayout'

addDecorator(
  withInfo({
    inline: true,
    source: true,
    styles: darkTheme,
    TableComponent,
  })
)

const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
