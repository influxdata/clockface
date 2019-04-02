// Libraries
import React, {Component} from 'react'

interface Props {
  /** Test ID for Integration Tests */
  testID: string
}

export class PanelBody extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--body',
  }

  public render() {
    const {children} = this.props

    return <div className="panel--body">{children}</div>
  }
}
