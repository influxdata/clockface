// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {
  /** Renders the row with disabled styles */
  disabled: boolean
}

export class IndexListRow extends Component<Props> {
  public static readonly displayName = 'IndexListRow'

  public static defaultProps = {
    disabled: false,
    testID: 'table-row',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <tr data-testid={testID} className={this.className} id={id} style={style}>
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
