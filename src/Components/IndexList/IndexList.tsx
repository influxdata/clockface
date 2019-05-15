// Libraries
import React, {Component} from 'react'

// Components
import {IndexListBody} from './IndexListBody'
import {IndexListHeader} from './IndexListHeader'
import {IndexListHeaderCell} from './IndexListHeaderCell'
import {IndexListRow} from './IndexListRow'
import {IndexListRowCell} from './IndexListRowCell'

// Styles
import './IndexList.scss'

export class IndexList extends Component {
  public static Body = IndexListBody
  public static Header = IndexListHeader
  public static HeaderCell = IndexListHeaderCell
  public static Row = IndexListRow
  public static Cell = IndexListRowCell

  public render() {
    const {children} = this.props

    return <table className="index-list">{children}</table>
  }
}
