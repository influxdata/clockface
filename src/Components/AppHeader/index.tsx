// Libraries
import React, {Component} from 'react'

// Components
import {AppHeaderRoot, AppHeaderProps} from './AppHeader'
import {AppHeaderLogo} from './AppHeaderLogo'

export class AppHeader extends Component<AppHeaderProps> {
  public static readonly displayName = 'AppHeader'

  public static AppHeader = AppHeaderRoot
  public static Logo = AppHeaderLogo

  render() {
    return <AppHeaderRoot {...this.props} />
  }
}

export {AppHeaderProps, AppHeaderRef} from './AppHeader'
export * from './AppHeaderLogo'
