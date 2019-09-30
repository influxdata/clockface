import React, {Component} from 'react'

import {PopoverRoot, PopoverProps} from './Base/Popover'
import {DismissButton} from '../Button/Composed/DismissButton'

export class Popover extends Component<PopoverProps> {
  public static readonly displayName = 'Popover'

  public static DismissButton = DismissButton
  public static Popover = PopoverRoot

  public render() {
    return <PopoverRoot {...this.props} />
  }
}

export {PopoverRef} from './Base/Popover'