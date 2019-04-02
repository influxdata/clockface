import * as React from 'react'
import './Story.scss'

/*
  Styles
  ------------------------------------------------------------------------------
*/

export const darkTheme = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline',
      color: '#f6f6f8',
      border: 'none',
    },
    body: {
      border: 'none',
    },
    h2: {
      display: 'inline',
      color: '#f6f6f8',
    },
  },
  infoBody: {
    backgroundColor: '#292933',
    borderRadius: '4px',
    padding: '4px 16px',
    lineHeight: '2',
    border: 'none',
  },
  source: {
    h1: {
      color: '#f6f6f8',
      border: 'none',
    },
  },
}

/*
  Table Component
  ------------------------------------------------------------------------------
*/

export const TableComponent = ({propDefinitions}) => {
  const props = propDefinitions.map(
    ({property, propType, required, description, defaultValue}, i) => {
      return (
        <tr key={property}>
          <td className="props-table--prop">{property}</td>
          <td>{propType.name}</td>
          <td>{!required || !!defaultValue ? 'no' : 'yes'}</td>
          <td>{defaultValue}</td>
          <td>{description}</td>
        </tr>
      )
    }
  )

  return (
    <table className="props-table">
      <thead>
        <tr className="props-table--headers">
          <th>NAME</th>
          <th>TYPE</th>
          <th>REQUIRED</th>
          <th>DEFAULT</th>
          <th>DESCRIPTION</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </table>
  )
}
