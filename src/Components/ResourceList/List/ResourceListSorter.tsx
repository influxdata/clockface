// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../../Icon/Base/Icon'

// Types
import {Sort, StandardFunctionProps, IconFont} from '../../../Types'

export interface ResourceListSorterProps extends StandardFunctionProps {
  /** Controls appearance of sort indicator (arrow) */
  sort: Sort
  /** Unique identifier for use in managing sort state */
  sortKey: string
  /** Name of attribute this element sorts on */
  name: string
  /** Useful for triggering a change in sort state */
  onClick?: (nextSort: Sort, sortKey: string) => void
}

export type ResourceListSorterRef = HTMLDivElement

export const ResourceListSorter = forwardRef<
  ResourceListSorterRef,
  ResourceListSorterProps
>(
  (
    {
      id,
      style,
      sort,
      name,
      testID = 'resource-list--sorter',
      className,
      onClick,
      sortKey,
    },
    ref
  ) => {
    const resourceListSorterClass = classnames('cf-resource-list--sorter', {
      'cf-resource-list--sort-descending': sort === Sort.Descending,
      'cf-resource-list--sort-ascending': sort === Sort.Ascending,
      [`${className}`]: className,
    })

    let title = `Click to sort by "${name}"`

    if (sort === Sort.None) {
      title = `Sort "${name}" in ${Sort.Ascending} order`
    } else if (sort === Sort.Ascending) {
      title = `Sort "${name}" in ${Sort.Descending} order`
    }

    const handleClick = (): void => {
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

    const sortIndicator = onClick && (
      <span className="cf-resource-list--sort-arrow">
        <Icon glyph={IconFont.CaretDown} />
      </span>
    )

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        title={title}
        onClick={handleClick}
        className={resourceListSorterClass}
        data-testid={testID}
      >
        {name}
        {sortIndicator}
      </div>
    )
  }
)

ResourceListSorter.displayName = 'ResourceListSorter'
