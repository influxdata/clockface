import {addDecorator, addParameters} from '@storybook/react'
import clockfaceTheme from './clockfaceTheme'
import {addReadme} from 'storybook-readme'
import './Story.scss'

addDecorator(addReadme)

addParameters({
  options: {
    theme: clockfaceTheme,
    panelPosition: 'right',
    storySort: {
      order: [
        'Home',
        'Foundations',
        'Sandbox',
        'Components',
        'Layout',
        'Utilities',
      ],
    },
  },
  readme: {
    codeTheme: 'Dracula',
  },
})
