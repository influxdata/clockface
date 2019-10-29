import {addDecorator, configure, addParameters} from '@storybook/react'
import clockfaceTheme from './clockfaceTheme'
import {addReadme} from 'storybook-readme'
import './Story.scss'

addDecorator(addReadme)

addParameters({
  options: {
    theme: clockfaceTheme,
    panelPosition: 'right',
  },
  readme: {
    codeTheme: 'Dracula',
  },
})

const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
