// Libraries
import React, {PureComponent} from 'react'

// Styles
import './AppWrapper.scss'

export class AppWrapper extends PureComponent<{}> {
  public static readonly displayName = 'AppWrapper'

  public render() {
    return <div className="clockface--app-wrapper">{this.props.children}</div>
  }
}
