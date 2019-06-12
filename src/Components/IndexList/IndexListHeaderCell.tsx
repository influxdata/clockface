// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {Alignment, Sort, StandardProps} from '../../Types'

export interface IndexHeaderCellProps {
  /** Can be a % or px */
  width: string
  /** Text to display as column header */
  columnName: string
  /** Text alignment of column header */
  alignment: Alignment
  /** Controls appearance of sort indicator (arrow) */
  sort?: Sort
  /** Unique identifier for use in managing sort state */
  sortKey?: string
  /** Useful for triggering a change in sort state */
  onClick?: (nextSort: Sort, sortKey: string | undefined) => void
}

type Props = IndexHeaderCellProps & StandardProps

export class IndexListHeaderCell extends Component<Props> {
  public static defaultProps = {
    columnName: '',
    alignment: Alignment.Left,
    testID: 'index-list--header-cell',
  }

  public render() {
    const {columnName, width, testID} = this.props

    return (
      <th
        className={this.className}
        style={{width}}
        onClick={this.handleClick}
        data-testid={testID}
      >
        {columnName}
        {this.sortIndicator}
      </th>
    )
  }

  private handleClick = (): void => {
    const {onClick, sort, sortKey} = this.props

    if (!onClick || !sort || !sortKey) {
      return
    }

    if (sort === Sort.None) {
      onClick(Sort.Ascending, sortKey)
    } else if (sort === Sort.Ascending) {
      onClick(Sort.Descending, sortKey)
    } else if (sort === Sort.Descending) {
      onClick(Sort.None, sortKey)
    }
  }

  private get sortIndicator(): JSX.Element | undefined {
    if (this.isSortable) {
      return (
        <span className="index-list--sort-arrow">
          <span className="icon caret-down" />
        </span>
      )
    }

    return
  }

  private get isSortable(): boolean {
    const {sort} = this.props

    if (
      sort === Sort.None ||
      sort === Sort.Ascending ||
      sort === Sort.Descending
    ) {
      return true
    }

    return false
  }

  private get className(): string {
    const {alignment, sort} = this.props

    return classnames('index-list--header-cell', {
      'index-list--align-left': alignment === Alignment.Left,
      'index-list--align-center': alignment === Alignment.Center,
      'index-list--align-right': alignment === Alignment.Right,
      'index-list--sortable': this.isSortable,
      'index-list--sort-descending': sort === Sort.Descending,
      'index-list--sort-ascending': sort === Sort.Ascending,
    })
  }
}
