// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class TableFooter extends Component<Props> {
  public static readonly displayName = 'TableFooter'

  public static defaultProps = {
    testID: 'table-footer',
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <tfoot className={this.className} data-testid={testID} id={id}>
        {children}
      </tfoot>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-table--footer', {
      [`${className}`]: className,
    })
  }
}
