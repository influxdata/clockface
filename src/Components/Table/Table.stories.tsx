// Libraries
import * as React from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from 'src/Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Table} from 'src/Components/Table/Table'
import {TableHeader} from 'src/Components/Table/TableHeader'
import {TableBody} from 'src/Components/Table/TableBody'
import {TableFooter} from 'src/Components/Table/TableFooter'
import {TableRow} from 'src/Components/Table/TableRow'
import {TableCell} from 'src/Components/Table/TableCell'
import {TableHeaderCell} from 'src/Components/Table/TableHeaderCell'

// Types
import {Alignment, ComponentSize, BorderType, ComponentColor} from 'src/Types'

// Notes
import TableReadme from 'src/Components/Table/Table.md'

const tableStories = storiesOf('Components|Table/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

tableStories.add(
  'Table',
  () => (
    <div className="story--example">
      <Table
        cellPadding={
          ComponentSize[
            select('cellPadding', mapEnumKeys(ComponentSize), 'Small')
          ]
        }
        fontSize={
          ComponentSize[
            select('fontSize', mapEnumKeys(ComponentSize), 'Medium')
          ]
        }
        borders={
          BorderType[select('borders', mapEnumKeys(BorderType), 'Horizontal')]
        }
        striped={boolean('striped', false)}
        highlight={boolean('highlight', false)}
        width={text('Table - width', '100%')}
      >
        <TableHeader>
          <TableRow>
            <TableHeaderCell
              width={text('Name - width', '30%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Name - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              Name
            </TableHeaderCell>
            <TableHeaderCell
              width={text('Description - width', '50%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Description - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              Description
            </TableHeaderCell>
            <TableHeaderCell
              width={text('Price - width', '20%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Price - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Right'
                  )
                ]
              }
            >
              Price
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow
            color={
              ComponentColor[
                select(
                  'Peach - row color',
                  mapEnumKeys(ComponentColor),
                  'Default'
                )
              ]
            }
          >
            <TableCell
              width={text('Name - width', '30%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Name - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              Peach
            </TableCell>
            <TableCell
              width={text('Description - width', '50%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Description - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              A sweet fruit that makes a great pie
            </TableCell>
            <TableCell
              width={text('Price - width', '20%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Price - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Right'
                  )
                ]
              }
            >
              $5.00
            </TableCell>
          </TableRow>
          <TableRow
            color={
              ComponentColor[
                select(
                  'Pineapple - row color',
                  mapEnumKeys(ComponentColor),
                  'Default'
                )
              ]
            }
          >
            <TableCell
              width={text('Name - width', '30%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Name - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              Pineapple
            </TableCell>
            <TableCell
              width={text('Description - width', '50%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Description - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              Tropical, highly sought after, and a requirement for a Piña Colada
            </TableCell>
            <TableCell
              width={text('Price - width', '20%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Price - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Right'
                  )
                ]
              }
            >
              $8.00
            </TableCell>
          </TableRow>
          <TableRow
            color={
              ComponentColor[
                select(
                  'Yuzu - row color',
                  mapEnumKeys(ComponentColor),
                  'Default'
                )
              ]
            }
          >
            <TableCell
              width={text('Name - width', '30%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Name - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              Yuzu
            </TableCell>
            <TableCell
              width={text('Description - width', '50%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Description - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              A golden citrus fruit from Japan & China with a powerful aroma
            </TableCell>
            <TableCell
              width={text('Price - width', '20%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Price - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Right'
                  )
                ]
              }
            >
              $11.00
            </TableCell>
          </TableRow>
          <TableRow
            color={
              ComponentColor[
                select(
                  'Lychee - row color',
                  mapEnumKeys(ComponentColor),
                  'Default'
                )
              ]
            }
          >
            <TableCell
              width={text('Name - width', '30%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Name - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              Lychee
            </TableCell>
            <TableCell
              width={text('Description - width', '50%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Description - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Left'
                  )
                ]
              }
            >
              A light and refreshing fruit encased in a spiky shell
            </TableCell>
            <TableCell
              width={text('Price - width', '20%')}
              horizontalAlignment={
                Alignment[
                  select(
                    'Price - horizontalAlignment',
                    mapEnumKeys(Alignment),
                    'Right'
                  )
                ]
              }
            >
              $2.00
            </TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>
              *All fruits are shipped in padded boxes to ensure quality
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  ),
  {
    readme: {
      content: marked(TableReadme),
    },
  }
)
