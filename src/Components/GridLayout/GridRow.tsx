// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {}

export class GridRow extends Component<Props> {
  public static readonly displayName = 'GridRow'

  public static defaultProps = {
    testID: 'grid--row',
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

    return classnames('cf-grid--row', {[`${className}`]: className})
  }
}
