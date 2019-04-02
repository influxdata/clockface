// Libraries
import React, {Component} from 'react'

interface Props {
  /** Test ID for Integration Tests */
  testID: string
}

export class PanelFooter extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--footer',
  }

  public render() {
    const {children} = this.props

    return <div className="panel--footer">{children}</div>
  }
}
