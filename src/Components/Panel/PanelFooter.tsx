// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface Props {
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

export class PanelFooter extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--footer',
  }

  public render() {
    const {children} = this.props

    return <div className={this.className}>{children}</div>
  }

  private get className(): string {
    const {className} = this.props

    return classnames('panel--footer', {[`${className}`]: className})
  }
}
