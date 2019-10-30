// Libraries
import React, {createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, array, text, select, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {
  IndexList,
  IndexListRef,
  IndexListRowRef,
  IndexListBodyRef,
  IndexListHeaderRef,
  IndexListRowCellRef,
  IndexListHeaderCellRef,
} from '../index'
import {SquareButton} from '../../Button/Composed/SquareButton'
import {EmptyState} from '../../EmptyState'

// Types
import {IconFont, ComponentColor, Alignment, Sort} from '../../../Types'

// Notes
import IndexListReadme from './IndexList.md'
import IndexListHeaderReadme from './IndexListHeader.md'
import IndexListHeaderCellReadme from './IndexListHeaderCell.md'
import IndexListBodyReadme from './IndexListBody.md'
import IndexListRowReadme from './IndexListRow.md'
import IndexListRowCellReadme from './IndexListRowCell.md'
import IndexListExampleReadme from './IndexListExample.md'

const indexListStories = storiesOf(
  'Components|IndexList/Family',
  module
).addDecorator(withKnobs)

const indexListExampleStories = storiesOf(
  'Components|IndexList/Examples',
  module
).addDecorator(withKnobs)

indexListStories.add(
  'IndexList',
  () => {
    const indexListRef = createRef<IndexListRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(indexListRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <IndexList.IndexList ref={indexListRef} />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IndexListReadme),
    },
  }
)

indexListStories.add(
  'IndexListHeader',
  () => {
    const indexListHeaderRef = createRef<IndexListHeaderRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(indexListHeaderRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <table>
          <IndexList.Header ref={indexListHeaderRef} />
        </table>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IndexListHeaderReadme),
    },
  }
)

indexListStories.add(
  'IndexListHeaderCell',
  () => {
    const indexListHeaderCellRef = createRef<IndexListHeaderCellRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(indexListHeaderCellRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <table>
          <thead>
            <tr>
              <IndexList.HeaderCell
                ref={indexListHeaderCellRef}
                width={text('width', '100px')}
                columnName={text('columnName', 'Name')}
                sort={Sort[select('sort', mapEnumKeys(Sort), 'None')]}
                sortKey={text('sortKey', 'name')}
                onClick={(nextSort: string, sortKey: string) =>
                  alert(
                    `Header clicked! nextSort: ${nextSort}, sortKey: ${sortKey}`
                  )
                }
              />
            </tr>
          </thead>
        </table>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IndexListHeaderCellReadme),
    },
  }
)

indexListStories.add(
  'IndexListBody',
  () => {
    const indexListBodyRef = createRef<IndexListBodyRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(indexListBodyRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <table>
          <IndexList.Body
            ref={indexListBodyRef}
            columnCount={1}
            emptyState={
              <EmptyState>
                <EmptyState.Text>No children present</EmptyState.Text>
              </EmptyState>
            }
          />
        </table>
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IndexListBodyReadme),
    },
  }
)

indexListStories.add(
  'IndexListRow',
  () => {
    const indexListRowRef = createRef<IndexListRowRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(indexListRowRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <IndexList.Row
          ref={indexListRowRef}
          disabled={boolean('disabled', false)}
          brighten={boolean('brighten', false)}
        />
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IndexListRowReadme),
    },
  }
)

indexListStories.add(
  'IndexListCell',
  () => {
    const indexListRowCellRef = createRef<IndexListRowCellRef>()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(indexListRowCellRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <table>
          <tbody>
            <tr>
              <IndexList.Cell
                ref={indexListRowCellRef}
                revealOnHover={boolean('revealOnHover', false)}
                alignment={
                  Alignment[select('alignment', mapEnumKeys(Alignment), 'Left')]
                }
              >
                <span>
                  {text(
                    'contents',
                    'Mitochondria are the powerhouse of the cell'
                  )}
                </span>
              </IndexList.Cell>
            </tr>
          </tbody>
        </table>

        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(IndexListRowCellReadme),
    },
  }
)

indexListExampleStories.add(
  'Simple Table',
  () => {
    const columnWidths = array('Column Widths', ['20%', '60%', '20%'])
    const exampleHeaders = array('Headers', ['Name', 'Description', ''])
    const exampleNames = array('Names', ['Apple', 'Banana', 'Orange'])
    const exampleDescriptions = array('Descriptions', [
      'Keeps doctors away',
      'A tropical yellow fruit with a creamy, starchy inside',
      'Spherical and protected by a thick peel',
    ])

    const disabledRows = array('Disabled Rows', ['Banana'])

    return (
      <div className="story--example">
        <IndexList>
          <IndexList.Header>
            {exampleHeaders.map((col, i) => (
              <IndexList.HeaderCell
                key={`header--${col}${i}`}
                columnName={col}
                width={columnWidths[i]}
              />
            ))}
          </IndexList.Header>
          <IndexList.Body
            emptyState={<div>Empty</div>}
            columnCount={exampleNames.length}
          >
            {exampleHeaders.map((row, i) => (
              <IndexList.Row
                key={`row--${row}${i}`}
                brighten={boolean('brighten', false)}
                disabled={disabledRows.includes(exampleNames[i])}
              >
                <IndexList.Cell>{exampleNames[i]}</IndexList.Cell>
                <IndexList.Cell>{exampleDescriptions[i]}</IndexList.Cell>
                <IndexList.Cell
                  revealOnHover={true}
                  alignment={Alignment.Right}
                >
                  <SquareButton
                    icon={IconFont.Trash}
                    color={ComponentColor.Danger}
                  />
                </IndexList.Cell>
              </IndexList.Row>
            ))}
          </IndexList.Body>
        </IndexList>
      </div>
    )
  },
  {
    readme: {
      content: marked(IndexListExampleReadme),
    },
  }
)
