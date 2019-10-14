// Libraries
import React, {Component} from 'react'

// Components
import {OverlayRoot, OverlayProps} from './Overlay'
import {OverlayContainer} from './OverlayContainer'
import {OverlayHeader} from './OverlayHeader'
import {OverlayMask} from './OverlayMask'
import {OverlayBody} from './OverlayBody'
import {OverlayFooter} from './OverlayFooter'

export class Overlay extends Component<OverlayProps> {
  public static readonly displayName = 'Overlay'

  public static Overlay = OverlayRoot
  public static Container = OverlayContainer
  public static Header = OverlayHeader
  public static Mask = OverlayMask
  public static Body = OverlayBody
  public static Footer = OverlayFooter

  render() {
    return <OverlayRoot {...this.props} />
  }
}

export {OverlayProps} from './Overlay'
export * from './OverlayContainer'
export * from './OverlayHeader'
export * from './OverlayMask'
export * from './OverlayBody'
export * from './OverlayFooter'
