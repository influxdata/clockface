// Libraries
import React, {Component} from 'react'

// Components
import {IndexListBody} from './IndexListBody'
import {IndexListHeader} from './IndexListHeader'
import {IndexListHeaderCell} from './IndexListHeaderCell'
import {IndexListRow} from './IndexListRow'
import {IndexListRowCell} from './IndexListRowCell'

// Types
import {StandardProps} from '../../Types'

// Styles
import './IndexList.scss'

interface Props extends StandardProps {}

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
    const {children, testID} = this.props

    return (
      <table className={this.className} data-testid={testID}>
        {children}
      </table>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `index-list ${className}` : 'index-list'
  }
}
