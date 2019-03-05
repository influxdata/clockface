import * as React from 'react'
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
    lineHeight: '2',
    border: 'none'
  },
  source: {
    h1: {
      color: '#f6f6f8',
      border: 'none'
    }
  }
}

const tableStyles = {
  table: {color: '#999dab', textAlign: 'left'},
  prop: {fontWeight: '700'},
  tr: {backgroundColor: '#202028'},
  td: {borderRadius: '2px', padding: '0 8px'}
}

/*
  Table Component
  ------------------------------------------------------------------------------
*/

const TableComponent = ({propDefinitions}) => {
  const props = propDefinitions.map(
    ({property, propType, required, description, defaultValue}) => {
      return (
        <tr style={tableStyles.tr} key={property}>
          <td style={{...tableStyles.td, ...tableStyles.prop}}>
            {property}
            {required ? null : '?'}
          </td>
          <td style={tableStyles.td}>{propType.name}</td>
          <td style={tableStyles.td}>{defaultValue}</td>
          <td style={tableStyles.td}>{description}</td>
        </tr>
      )
    }
  )

  return (
    <table style={tableStyles.table}>
      <thead>
        <tr>
          <th>NAME</th>
          <th>TYPE</th>
          <th>DEFAULT</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  )
}

/*
  Config
  ------------------------------------------------------------------------------
*/

addDecorator(
  withInfo({
    inline: true,
    source: true,
    styles: darkTheme,
    TableComponent
  })
)

const req = require.context('../src/', true, /.stories.tsx$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)