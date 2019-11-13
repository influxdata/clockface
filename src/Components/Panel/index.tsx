// Libraries
import React, {Component} from 'react'

// Components
import {PanelRoot, PanelProps} from './Family/Panel'
import {PanelHeader} from './Family/PanelHeader'
import {PanelTitle} from './Family/PanelTitle'
import {PanelBody} from './Family/PanelBody'
import {PanelFooter} from './Family/PanelFooter'

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

export {PanelProps, PanelRef} from './Family/Panel'
export * from './Family/PanelHeader'
export * from './Family/PanelTitle'
export * from './Family/PanelBody'
export * from './Family/PanelFooter'
