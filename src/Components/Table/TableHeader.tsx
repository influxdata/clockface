// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class TableHeader extends Component<Props> {
  public static readonly displayName = 'TableHeader'

  public static defaultProps = {
    testID: 'table-header',
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <thead className={this.className} data-testid={testID} id={id}>
        {children}
      </thead>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-table--header', {
      [`${className}`]: className,
    })
  }
}
