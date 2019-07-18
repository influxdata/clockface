// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class TableBody extends Component<Props> {
  public static readonly displayName = 'TableBody'

  public static defaultProps = {
    testID: 'table-body',
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <tbody className={this.className} data-testid={testID} id={id}>
        {children}
      </tbody>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('table--body', {
      [`${className}`]: className,
    })
  }
}
