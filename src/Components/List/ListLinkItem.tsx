// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {ListItemHighlight} from './ListItemHighlight'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'
import {ListItemSharedProps, ListItemContext} from './ListItem'

type CombinedListItemProps = ListItemSharedProps & StandardFunctionProps

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
      backgroundColor,
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
        <ListItemContext.Provider
          value={{selected, listItemBackgroundColor: backgroundColor, size}}
        >
          {children}
        </ListItemContext.Provider>
        <ListItemHighlight backgroundColor={backgroundColor} />
      </div>
    )
  }
)

ListLinkItem.displayName = 'ListLinkItem'
