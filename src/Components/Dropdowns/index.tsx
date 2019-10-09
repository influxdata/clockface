// Libraries
import React, {Component} from 'react'

// Components
import {DropdownRoot, DropdownProps} from './Dropdown'
import {DropdownMenu} from './DropdownMenu'
import {DropdownButton} from './DropdownButton'
import {DropdownItem} from './DropdownItem'
import {DropdownItemEmpty} from './DropdownItemEmpty'
import {DropdownLinkItem} from './DropdownLinkItem'
import {DropdownDivider} from './DropdownDivider'

export class Dropdown extends Component<DropdownProps> {
  public static readonly displayName = 'Dropdown'

  public static Dropdown = DropdownRoot
  public static Menu = DropdownMenu
  public static Button = DropdownButton
  public static Item = DropdownItem
  public static ItemEmpty = DropdownItemEmpty
  public static LinkItem = DropdownLinkItem
  public static Divider = DropdownDivider

  render() {
    return <DropdownRoot {...this.props} />
  }
}

export {DropdownProps, DropdownRef} from './Dropdown'
export * from './DropdownMenu'
export * from './DropdownButton'
export * from './DropdownItem'
export * from './DropdownItemEmpty'
export * from './DropdownLinkItem'
export * from './DropdownDivider'
