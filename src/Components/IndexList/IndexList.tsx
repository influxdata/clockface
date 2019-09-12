// Libraries
import React, {Component} from 'react'

// Components
import {IndexListBody} from 'src/Components/IndexList/IndexListBody'
import {IndexListHeader} from 'src/Components/IndexList/IndexListHeader'
import {IndexListHeaderCell} from 'src/Components/IndexList/IndexListHeaderCell'
import {IndexListRow} from 'src/Components/IndexList/IndexListRow'
import {IndexListRowCell} from 'src/Components/IndexList/IndexListRowCell'

// Types
import {StandardClassProps} from 'src/Types'

// Styles
import 'src/Components/IndexList/IndexList.scss'

interface Props extends StandardClassProps {}

export class IndexList extends Component<Props> {
  public static readonly displayName = 'IndexList'

  public static Body = IndexListBody
  public static Header = IndexListHeader
  public static HeaderCell = IndexListHeaderCell
  public static Row = IndexListRow
  public static Cell = IndexListRowCell

  public static defaultProps = {
    testID: 'index-list',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <table
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </table>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `index-list ${className}` : 'index-list'
  }
}
