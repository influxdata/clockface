// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {TableHeader} from './TableHeader'
import {TableBody} from './TableBody'
import {TableFooter} from './TableFooter'
import {TableRow} from './TableRow'
import {TableCell} from './TableCell'
import {TableHeaderCell} from './TableHeaderCell'

// Styles
import './Table.scss'

// Types
import {StandardClassProps, ComponentSize, BorderType} from '../../Types'

interface Props extends StandardClassProps {
  /** Padding inside every cell in the table */
  cellPadding: ComponentSize
  /** Font size of table elements */
  fontSize: ComponentSize
  /** Controls the appearance of borders in the table */
  borders: BorderType
  /** Controls coloration pattern of rows, useful for improving legibility on dense tables */
  striped: boolean
  /** Highlights a row on hover, useful for improving legibility on dense tables */
  highlight: boolean
  /** Width of table, can be % or px */
  width?: string
}

export class Table extends Component<Props> {
  public static readonly displayName = 'Table'

  public static defaultProps = {
    testID: 'table',
    cellPadding: ComponentSize.Small,
    borders: BorderType.Horizontal,
    fontSize: ComponentSize.Medium,
    striped: false,
    highlight: false,
  }

  public static Header = TableHeader
  public static Body = TableBody
  public static Footer = TableFooter
  public static Row = TableRow
  public static Cell = TableCell
  public static HeaderCell = TableHeaderCell

  public render() {
    const {testID, children, id} = this.props

    return (
      <table
        style={this.style}
        className={this.className}
        data-testid={testID}
        id={id}
      >
        {children}
      </table>
    )
  }

  private get style(): CSSProperties {
    const {width, style} = this.props

    return {width, ...style}
  }

  private get className(): string {
    const {
      className,
      cellPadding,
      borders,
      fontSize,
      striped,
      highlight,
    } = this.props

    return classnames('cf-table', {
      [`cf-table__padding-${cellPadding}`]: cellPadding,
      [`cf-table__borders-${borders}`]: borders,
      [`cf-table__font-${fontSize}`]: fontSize,
      'cf-table__striped': striped,
      'cf-table__highlight': highlight,
      [`${className}`]: className,
    })
  }
}
