// Libraries
import React, {
  forwardRef,
  MouseEvent,
  createContext,
  useContext,
  cloneElement,
} from 'react'
import classnames from 'classnames'

// Contexts
import {ListContext} from './List'

// Components
import {ListItemHighlight} from './ListItemHighlight'

// Utils
import {calculateTextColorFromBackground} from '../../Utils'

// Types
import {
  StandardFunctionProps,
  InfluxColors,
  ComponentSize,
  Gradients,
} from '../../Types'

export interface ListItemSharedProps {
  /** Whether or not the item should have selected styling */
  selected?: boolean
  /** Size of this component */
  size?: ComponentSize
}

export interface ListItemContextProps extends ListItemSharedProps {
  listItemContrastColor?: string
  listItemBackgroundColor?: InfluxColors | string
  listItemGradient?: Gradients
}

type CombinedListItemProps = ListItemSharedProps & StandardFunctionProps

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
  /** Pass in an <a> or <Link> element as an alternative to onClick */
  linkElement?: JSX.Element
  /** Colorizes the background of the list item in hover and selected state */
  backgroundColor?: InfluxColors | string
  /** Overrides backgroundColor, fills background with gradient */
  gradient?: Gradients
}

export type ListItemRef = HTMLDivElement

export const ListItemContext = createContext<ListItemContextProps>({
  selected: false,
  size: ComponentSize.Small,
  listItemBackgroundColor: undefined,
  listItemGradient: undefined,
  listItemContrastColor: undefined,
})

export const ListItem = forwardRef<ListItemRef, ListItemProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      value,
      title,
      testID = 'list-item',
      onClick,
      wrapText = false,
      selected = false,
      gradient,
      children,
      disabled = false,
      className,
      linkElement,
      backgroundColor,
    },
    ref
  ) => {
    const {listContrastColor} = useContext(ListContext)
    const contrastColor = calculateTextColorFromBackground(
      backgroundColor,
      gradient
    )

    const listItemClass = classnames('cf-list-item', {
      'cf-list-item__active': selected,
      [`cf-list-item__${size}`]: size,
      [`cf-list-item__${listContrastColor}`]: true,
      [`${className}`]: className,
      'cf-list-item__disabled': disabled,
      'cf-list-item__clickable': !!onClick,
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

    let highlightElement

    if ((!!onClick || linkElement) && !disabled) {
      highlightElement = (
        <ListItemHighlight
          gradient={gradient}
          backgroundColor={backgroundColor}
          selected={selected}
        />
      )
    }

    let itemStyle = style
    const itemColor =
      contrastColor === 'dark' ? InfluxColors.Kevlar : InfluxColors.White

    if (backgroundColor) {
      itemStyle = selected
        ? {color: itemColor, ...style}
        : {color: backgroundColor, ...style}
    }

    if (gradient) {
      itemStyle = selected ? {color: itemColor, ...style} : undefined
    }

    const listItemChildren = (
      <>
        <ListItemContext.Provider
          value={{
            size,
            selected,
            listItemBackgroundColor: backgroundColor,
            listItemContrastColor: contrastColor || 'light',
            listItemGradient: gradient,
          }}
        >
          {formattedChildren}
        </ListItemContext.Provider>
        {highlightElement}
      </>
    )

    if (linkElement) {
      return cloneElement(
        linkElement,
        {
          style: itemStyle,
          title: title,
          className: listItemClass,
          'data-testid': testID,
        },
        listItemChildren
      )
    }

    return (
      <div
        id={id}
        ref={ref}
        style={itemStyle}
        title={title}
        onClick={handleClick}
        className={listItemClass}
        data-testid={testID}
      >
        {listItemChildren}
      </div>
    )
  }
)

ListItem.displayName = 'ListItem'
