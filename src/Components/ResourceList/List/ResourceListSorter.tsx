// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../../Icon/Icon'

// Types
import {Sort, StandardClassProps, IconFont} from '../../../Types'

interface Props extends StandardClassProps {
  /** Controls appearance of sort indicator (arrow) */
  sort: Sort
  /** Unique identifier for use in managing sort state */
  sortKey: string
  /** Name of attribute this element sorts on */
  name: string
  /** Useful for triggering a change in sort state */
  onClick?: (nextSort: Sort, sortKey: string) => void
}

export class ResourceListSorter extends PureComponent<Props> {
  public static readonly displayName = 'ResourceListSorter'

  public static defaultProps = {
    testID: 'resource-list--sorter',
  }

  public render() {
    const {name, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        onClick={this.handleClick}
        title={this.title}
        data-testid={testID}
        id={id}
        style={style}
      >
        {name}
        {this.sortIndicator}
      </div>
    )
  }

  private handleClick = (): void => {
    const {onClick, sort, sortKey} = this.props

    if (!onClick || !sort) {
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

  private get title(): string | undefined {
    const {sort, name} = this.props

    if (sort === Sort.None) {
      return `Sort ${name} in ${Sort.Ascending} order`
    } else if (sort === Sort.Ascending) {
      return `Sort ${name} in ${Sort.Descending} order`
    }

    return
  }

  private get sortIndicator(): JSX.Element | undefined {
    const {onClick} = this.props

    if (onClick) {
      return (
        <span className="cf-resource-list--sort-arrow">
          <Icon glyph={IconFont.CaretDown} />
        </span>
      )
    }

    return
  }

  private get className(): string {
    const {sort, className} = this.props

    return classnames('cf-resource-list--sorter', {
      'cf-resource-list--sort-descending': sort === Sort.Descending,
      'cf-resource-list--sort-ascending': sort === Sort.Ascending,
      [`${className}`]: className,
    })
  }
}
