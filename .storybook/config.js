import {addDecorator, configure, addParameters} from '@storybook/react'
import {addReadme} from 'storybook-readme'
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
  
addDecorator(addReadme)

addParameters({
  options: {
    panelPosition: 'right',
  },
})


const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
