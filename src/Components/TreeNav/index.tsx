// Libraries
import React, {Component} from 'react'

// Components
import {TreeNavRoot, TreeNavProps} from './TreeNav'
import {TreeNavHeader} from './TreeNavHeader'
import {TreeNavUser} from './TreeNavUser'
import {TreeNavUserItem} from './TreeNavUserItem'
import {TreeNavItem} from './TreeNavItem'
import {TreeNavSubMenu} from './TreeNavSubMenu'
import {TreeNavSubItem} from './TreeNavSubItem'

export class TreeNav extends Component<TreeNavProps> {
  public static readonly displayName = 'TreeNav'

  public static TreeNav = TreeNavRoot
  public static Header = TreeNavHeader
  public static User = TreeNavUser
  public static UserItem = TreeNavUserItem
  public static Item = TreeNavItem
  public static SubMenu = TreeNavSubMenu
  public static SubItem = TreeNavSubItem

  render() {
    return <TreeNavRoot {...this.props} />
  }
}

export {TreeNavProps, TreeNavRef} from './TreeNav'
export * from './TreeNavHeader'
export * from './TreeNavUser'
export * from './TreeNavUserItem'
export * from './TreeNavItem'
export * from './TreeNavSubMenu'
export * from './TreeNavSubItem'
