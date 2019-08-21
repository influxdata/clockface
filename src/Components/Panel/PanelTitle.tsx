// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class PanelTitle extends Component<Props> {
  public static readonly displayName = 'PanelTitle'

  public static defaultProps = {
    testID: 'panel--title',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-panel--title', {[`${className}`]: className})
  }
}
