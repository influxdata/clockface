// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class PanelBody extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--body',
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

    return classnames('panel--body', {[`${className}`]: className})
  }
}
