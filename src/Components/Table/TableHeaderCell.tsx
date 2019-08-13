// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps, Alignment, VerticalAlignment} from '../../Types'

interface Props extends StandardProps {
  /** How many columns this cell should take up */
  colSpan: number
  /** Horizontal alignment of contents */
  horizontalAlignment: Alignment
  /** Vertical alignment of contents */
  verticalAlignment: VerticalAlignment
  /** Width of column, can be % or px */
  width?: string
}

export class TableHeaderCell extends Component<Props> {
  public static readonly displayName = 'TableHeaderCell'

  public static defaultProps = {
    testID: 'table-header-cell',
    colSpan: 1,
    horizontalAlignment: Alignment.Left,
    verticalAlignment: VerticalAlignment.Middle,
  }

  public render() {
    const {testID, children, id, colSpan} = this.props

    return (
      <th
        className={this.className}
        data-testid={testID}
        id={id}
        colSpan={colSpan}
        style={this.style}
      >
        {children}
      </th>
    )
  }

  private get style(): CSSProperties {
    const {horizontalAlignment, verticalAlignment, width, style} = this.props

    return {
      ...style,
      textAlign: horizontalAlignment,
      verticalAlign: verticalAlignment,
      width,
    }
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-table--header-cell', {
      [`${className}`]: className,
    })
  }
}
