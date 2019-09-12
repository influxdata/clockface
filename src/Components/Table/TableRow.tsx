// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps, ComponentColor} from 'src/Types'

interface Props extends StandardClassProps {
  /** Controls coloration of the row, useful for showing a certain state */
  color: ComponentColor
}

export class TableRow extends Component<Props> {
  public static readonly displayName = 'TableRow'

  public static defaultProps = {
    testID: 'table-row',
    color: ComponentColor.Default,
  }

  public render() {
    const {testID, children, id, style} = this.props

    return (
      <tr className={this.className} data-testid={testID} id={id} style={style}>
        {children}
      </tr>
    )
  }

  private get className(): string {
    const {className, color} = this.props

    return classnames('cf-table--row', {
      [`${className}`]: className,
      [`cf-table--row__${color}`]: color,
    })
  }
}
