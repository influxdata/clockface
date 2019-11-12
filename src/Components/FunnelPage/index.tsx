// Libraries
import React, {Component} from 'react'

// Components
import {FunnelPageRoot, FunnelPageProps} from './Family/FunnelPage'
import {FunnelPageFooter} from './Family/FunnelPageFooter'
import {FunnelPageFooterSection} from './Family/FunnelPageFooterSection'

export class FunnelPage extends Component<FunnelPageProps> {
  public static readonly displayName = 'FunnelPage'

  public static FunnelPage = FunnelPageRoot
  public static Footer = FunnelPageFooter
  public static FooterSection = FunnelPageFooterSection

  render() {
    return <FunnelPageRoot {...this.props} />
  }
}

export {FunnelPageProps, FunnelPageRef} from './Family/FunnelPage'
export * from './Family/FunnelPageFooter'
export * from './Family/FunnelPageFooterSection'
