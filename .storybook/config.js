import React from 'react'
import {addDecorator, configure, addParameters} from '@storybook/react'
import clockfaceTheme from './clockfaceTheme'
import {addReadme} from 'storybook-readme'
import {configureReadme} from 'storybook-readme'
// import {withInfo} from '@storybook/addon-info'
// import {darkTheme, TableComponent} from './StoryLayout'

// addDecorator(
//   withInfo({
//     inline: true,
//     source: false,
//     styles: darkTheme,
//     TableComponent,
//   })
// )

addDecorator(addReadme)

// configureReadme({
//   StoryPreview: ({children}) => (
//     <div style={{border: '3px solid green'}}>{children}</div>
//   ),
//   DocPreview: ({children}) => (
//     <div style={{background: 'red'}}> {children}</div>
//   ),
// })

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
