// Libraries
import React, {forwardRef, MouseEvent, createContext} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentColor, ComponentSize} from '../../Types'

export interface ListItemContextProps {
  /** Whether or not the item should have selected styling */
  selected?: boolean
  /** Colorization of this component */
  color?: ComponentColor
  /** Size of this component */
  size?: ComponentSize
}

type CombinedListItemProps = ListItemContextProps & StandardFunctionProps

export interface ListItemProps extends CombinedListItemProps {
  /** Value to be returned via the onClick function */
  value?: any
  /** When a dropdown item is clicked, its `value` prop is returned via `onChange` */
  onClick?: (value?: any) => void
  /** Controls whether the text contents of this item wrap or not */
  wrapText?: boolean
  /** Title attribute */
  title?: string
  /** Prevents any interaction with this element, including the onClick function */
  disabled?: boolean
}

export type ListItemRef = HTMLDivElement

export const ListItemContext = createContext<ListItemContextProps>({
  selected: false,
  color: ComponentColor.Primary,
  size: ComponentSize.Small,
})

export const ListItem = forwardRef<ListItemRef, ListItemProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      value,
      color = ComponentColor.Primary,
      title,
      testID = 'list-item',
      onClick,
      wrapText = false,
      selected = false,
      children,
      disabled,
      className,
    },
    ref
  ) => {
    const listItemClass = classnames('cf-list-item', {
      'cf-list-item__active': selected,
      [`cf-list__${color}`]: color,
      [`cf-list-item__${size}`]: size,
      [`${className}`]: className,
      'cf-list-item__disabled': disabled,
    })

    const listItemTextClass = classnames('cf-list-item--text', {
      'cf-list-item--text__wrap': wrapText,
      'cf-list-item--text__no-wrap': !wrapText,
    })

    const handleClick = (e: MouseEvent<HTMLElement>): void => {
      e.preventDefault()

      if (onClick && !disabled) {
        onClick(value)
      }
    }

    const formattedChildren = React.Children.map(children, child => {
      if (typeof child === 'string') {
        return <div className={listItemTextClass}>{child}</div>
      }

      return child
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        title={title}
        onClick={handleClick}
        className={listItemClass}
        data-testid={testID}
      >
        <ListItemContext.Provider value={{selected, color, size}}>
          {formattedChildren}
        </ListItemContext.Provider>
      </div>
    )
  }
)

ListItem.displayName = 'ListItem'
