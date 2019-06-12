// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class PanelFooter extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--footer',
  }

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('panel--footer', {[`${className}`]: className})
  }
}
