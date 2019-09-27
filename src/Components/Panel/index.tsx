// Libraries
import React, {Component} from 'react'

// Components
import {PanelRoot, PanelProps} from './Panel'
import {PanelHeader} from './PanelHeader'
import {PanelTitle} from './PanelTitle'
import {PanelBody} from './PanelBody'
import {PanelFooter} from './PanelFooter'

export class Panel extends Component<PanelProps> {
  public static readonly displayName = 'Panel'

  public static Panel = PanelRoot
  public static Header = PanelHeader
  public static Title = PanelTitle
  public static Body = PanelBody
  public static Footer = PanelFooter

  render() {
    return <PanelRoot {...this.props} />
  }
}

export {PanelProps, PanelRef} from './Panel'
export * from './PanelHeader'
export * from './PanelTitle'
export * from './PanelBody'
export * from './PanelFooter'
