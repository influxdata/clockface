// Libraries
import React, {Component} from 'react'

// Components
import {PopoverRoot, PopoverProps} from './Base/Popover'
import {DismissButton} from '../Button/Composed/DismissButton'

export class Popover extends Component<PopoverProps> {
  public static readonly displayName = 'Popover'

  public static Popover = PopoverRoot
  public static DismissButton = DismissButton

  public render() {
    return <PopoverRoot {...this.props} />
  }
}

export {PopoverRef} from './Base/Popover'
