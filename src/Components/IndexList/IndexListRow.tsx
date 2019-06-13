// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Renders the row with disabled styles */
  disabled: boolean
}

export class IndexListRow extends Component<Props> {
  public static readonly displayName = 'IndexList.Row'

  public static defaultProps = {
    disabled: false,
    testID: 'table-row',
  }

  public render() {
    const {children, testID} = this.props

    return (
      <tr data-testid={testID} className={this.className}>
        {children}
      </tr>
    )
  }

  private get className(): string {
    const {disabled, className} = this.props

    return classnames('index-list--row', {
      'index-list--row-disabled': disabled,
      [`${className}`]: !!className,
    })
  }
}
