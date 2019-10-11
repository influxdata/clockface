// Libraries
import React, {Component} from 'react'

// Components
import {NavMenuRoot, NavMenuProps} from './NavMenu'
import {NavMenuItem} from './NavMenuItem'
import {NavMenuSubItem} from './NavMenuSubItem'

export class NavMenu extends Component<NavMenuProps> {
  public static readonly displayName = 'NavMenu'

  public static NavMenu = NavMenuRoot
  public static Item = NavMenuItem
  public static SubItem = NavMenuSubItem

  render() {
    return <NavMenuRoot {...this.props} />
  }
}

export {NavMenuProps, NavMenuRef} from './NavMenu'
export * from './NavMenuItem'
export * from './NavMenuSubItem'
