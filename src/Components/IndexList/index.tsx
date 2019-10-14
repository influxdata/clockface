// Libraries
import React, {Component} from 'react'

// Components
import {IndexListRoot, IndexListProps} from './IndexList'
import {IndexListBody} from './IndexListBody'
import {IndexListHeader} from './IndexListHeader'
import {IndexListHeaderCell} from './IndexListHeaderCell'
import {IndexListRow} from './IndexListRow'
import {IndexListRowCell} from './IndexListRowCell'

export class IndexList extends Component<IndexListProps> {
  public static readonly displayName = 'IndexList'

  public static IndexList = IndexListRoot
  public static Body = IndexListBody
  public static Header = IndexListHeader
  public static HeaderCell = IndexListHeaderCell
  public static Row = IndexListRow
  public static Cell = IndexListRowCell

  render() {
    return <IndexListRoot {...this.props} />
  }
}

export {IndexListProps, IndexListRef} from './IndexList'
export * from './IndexListBody'
export * from './IndexListHeader'
export * from './IndexListHeaderCell'
export * from './IndexListRow'
export * from './IndexListRowCell'
