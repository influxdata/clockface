// Libraries
import React, {PureComponent} from 'react'

// Styles
import './AppWrapper.scss'

export class AppWrapper extends PureComponent<{}> {
  public render() {
    return <div className="clockface--app-wrapper">{this.props.children}</div>
  }
}
