import {addDecorator, configure} from '@storybook/react'
import {withInfo} from '@storybook/addon-info'

/*
  Styles
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
      border: 'none'
    },
    h2: {
      display: 'inline',
      color: '#f6f6f8'
    }
  },
  infoBody: {
    backgroundColor: '#292933',
    borderRadius: '4px',
    padding: '4px 16px',
    margin: '16px',
    lineHeight: '2',
    border: 'none'
  },
  source: {
    h1: {
      color: '#f6f6f8',
      borderBottom: '1px solid #545667'
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
