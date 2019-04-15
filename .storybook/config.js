import {addDecorator, configure, addParameters} from '@storybook/react'
import clockfaceTheme from './clockfaceTheme'
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

addParameters({
  options: {
    theme: clockfaceTheme,
    panelPosition: 'right',
  },
})

const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
