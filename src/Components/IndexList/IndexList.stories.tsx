// Libraries
import * as React from 'react'

// Storybook
import {storiesOf} from '@storybook/react'
import {jsxDecorator} from 'storybook-addon-jsx'
import {withKnobs, array} from '@storybook/addon-knobs'

// Components
import {IndexList} from './IndexList'

const indexListStories = storiesOf('Components|IndexList', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

indexListStories.add('IndexList Component', () => {
  const headerArr = array('columns', ['Column 1', 'Column 2'])
  const bodyArr = array('rows', ['Row A', 'Row B', 'Row C'])

  return (
    <IndexList>
      <IndexList.Header>
        {headerArr.map((col, i) => (
          <IndexList.HeaderCell
            key={`${col}${i}`}
            columnName={col}
            width="50%"
          />
        ))}
      </IndexList.Header>
      <IndexList.Body emptyState={<div>Empty</div>} columnCount={2}>
        {bodyArr.map((row, i) => (
          <IndexList.Row key={`${row}${i}`}>
            {headerArr.map((col, i) => (
              <IndexList.Cell key={`${col}${i}`}>{row}</IndexList.Cell>
            ))}
          </IndexList.Row>
        ))}
      </IndexList.Body>
    </IndexList>
  )
})
