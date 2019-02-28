import {addDecorator, configure} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

/*
  Themes
  ------------------------------------------------------------------------------
*/

const darkTheme = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
      color: '#f6f6f8',
      border: 'none'
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      border: 'none'
    },
    h2: {
      display: 'inline',
      color: '#f6f6f8'
    }
  },
  infoBody: {
    backgroundColor: '#292933',
    padding: '0 4px',
    margin: '16px 0',
    lineHeight: '2',
    border: 'none'
  },
  source: {
    h1: {
      color: 'red'
    }
  }
}

/*
  Config
  ------------------------------------------------------------------------------
*/

addDecorator(withInfo({inline: true, source: true, styles: darkTheme}))

const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
