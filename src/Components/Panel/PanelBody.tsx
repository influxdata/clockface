// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class PanelBody extends Component<Props> {
  public static readonly displayName = 'PanelBody'

  public static defaultProps = {
    testID: 'panel--body',
  }

  public render() {
    const {children, testID, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('panel--body', {[`${className}`]: className})
  }
}
