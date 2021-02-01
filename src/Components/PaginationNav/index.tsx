// Libraries
import React, {Component} from 'react'

// Components
import {Pagination, PaginationNavProps} from './PaginationNav'
import {PaginationItem} from './PaginationItem'
import {PaginationDirectionItem} from './PaginationDirectionItem'
import {PaginationTruncationItem} from './paginationTruncationItem'

export class PaginationNav extends Component<PaginationNavProps> {
  public static readonly displayName = 'PaginationNav'

  public static PaginationNav = Pagination
  public static Item = PaginationItem
  public static DirectionItem = PaginationDirectionItem
  public static TruncationItem = PaginationTruncationItem
  render() {
    return <PaginationNav {...this.props} />
  }
}

export {Pagination, PaginationNavRef} from './PaginationNav'
export * from './PaginationItem'
export * from './PaginationDirectionItem'
export * from './paginationTruncationItem'
