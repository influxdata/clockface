// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Renders the row with disabled styles */
  disabled: boolean
}

type Props = ComponentProps & StandardProps

export class IndexListRow extends Component<Props> {
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
