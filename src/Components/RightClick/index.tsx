// Libraries
import React, {Component} from 'react'

// Components
import {RightClickRoot, RightClickProps} from './Base/RightClick'
import {RightClickMenuItem} from './Base/RightClickMenuItem'
import {RightClickDivider} from './Base/RightClickDivider'

export class RightClick extends Component<RightClickProps> {
  public static readonly displayName = 'RightClick'

  public static RightClick = RightClickRoot
  public static MenuItem = RightClickMenuItem
  public static Divider = RightClickDivider

  public render() {
    return <RightClickRoot {...this.props} />
  }
}

export {RightClickProps, RightClickRef} from './Base/RightClick'
export * from './Base/RightClickMenuItem'
export * from './Base/RightClickDivider'
