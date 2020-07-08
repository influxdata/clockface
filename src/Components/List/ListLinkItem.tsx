// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize, ComponentColor} from '../../Types'
import {ListItemContextProps, ListItemContext} from './ListItem'

type CombinedListItemProps = ListItemContextProps & StandardFunctionProps

export interface ListLinkItemProps extends CombinedListItemProps {
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
  /** Renders the element in a disabled state, does not affect functionality */
  disabled?: boolean
}

export type ListLinkItemRef = HTMLDivElement

export const ListLinkItem = forwardRef<ListLinkItemRef, ListLinkItemProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      color = ComponentColor.Primary,
      testID = 'list-link-item',
      wrapText = false,
      selected = false,
      children,
      disabled,
      className,
    },
    ref
  ) => {
    const listLinkItemClass = classnames('cf-list-link-item', {
      'cf-list-link-item__active': selected,
      [`cf-list__${color}`]: color,
      [`cf-list-item__${size}`]: size,
      [`${className}`]: className,
      'cf-list-link-item__wrap': wrapText,
      'cf-list-link-item__no-wrap': !wrapText,
      'cf-list-item__disabled': disabled,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={listLinkItemClass}
        data-testid={testID}
      >
        <ListItemContext.Provider value={{selected, color, size}}>
          {children}
        </ListItemContext.Provider>
      </div>
    )
  }
)

ListLinkItem.displayName = 'ListLinkItem'
