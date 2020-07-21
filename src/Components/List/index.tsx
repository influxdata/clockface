// Libraries
import React, {Component} from 'react'

// Components
import {ListRoot, ListProps} from './List'
import {ListItem} from './ListItem'
import {ListEmptyState} from './ListEmptyState'
import {ListDivider} from './ListDivider'
import {ListIndicator} from './ListIndicator'
import {ListIcon} from './ListIcon'

export class List extends Component<ListProps> {
  public static readonly displayName = 'List'

  public static List = ListRoot
  public static Item = ListItem
  public static EmptyState = ListEmptyState
  public static Divider = ListDivider
  public static Indicator = ListIndicator
  public static Icon = ListIcon

  render() {
    return <ListRoot {...this.props} />
  }
}

export {ListProps, ListRef} from './List'
export * from './ListItem'
export * from './ListEmptyState'
export * from './ListDivider'
export * from './ListIndicator'
export * from './ListIcon'
