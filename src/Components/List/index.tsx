// Libraries
import React, {Component} from 'react'

// Components
import {ListRoot, ListProps} from './List'
import {ListItem} from './ListItem'
import {ListEmpty} from './ListEmpty'
import {ListLinkItem} from './ListLinkItem'
import {ListDivider} from './ListDivider'
import {ListIndicator} from './ListIndicator'
import {ListIcon} from './ListIcon'

export class List extends Component<ListProps> {
  public static readonly displayName = 'List'

  public static List = ListRoot
  public static Item = ListItem
  public static Empty = ListEmpty
  public static LinkItem = ListLinkItem
  public static Divider = ListDivider
  public static Indicator = ListIndicator
  public static Icon = ListIcon

  render() {
    return <ListRoot {...this.props} />
  }
}

export {ListProps, ListRef} from './List'
export * from './ListItem'
export * from './ListEmpty'
export * from './ListLinkItem'
export * from './ListDivider'
export * from './ListIndicator'
export * from './ListIcon'
