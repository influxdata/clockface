// Libraries
import React, {
  forwardRef,
  RefObject,
  CSSProperties,
  ReactNode,
  createContext,
} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Utils
import {
  generateBackgroundStyle,
  calculateTextColorFromBackground,
} from '../../Utils'

// Types
import {StandardFunctionProps, InfluxColors, Gradients} from '../../Types'

// Styles
import './List.scss'

export interface ListContextProps {
  listBackgroundColor?: InfluxColors | string
  listGradient?: Gradients
  listContrastColor?: InfluxColors | string
}

export type ListItemRef = HTMLDivElement

export const ListContext = createContext<ListContextProps>({
  listBackgroundColor: undefined,
  listGradient: undefined,
  listContrastColor: undefined,
})

export interface ListProps extends StandardFunctionProps {
  /** Disable scrolling horizontally */
  noScrollX?: boolean
  /** Disable scrolling vertically */
  noScrollY?: boolean
  /** Automatically scroll to selected item when dropdown is opened */
  scrollToSelected?: boolean
  /** Pass through ref for contents element within scrollbars */
  contentsRef?: RefObject<ListContentsRef>
  /** Useful for customizing appearance of the contents element within scrollbars */
  contentsStyle?: CSSProperties
  /** Controls autoHide behavior of scrollbars within the menu */
  autoHideScrollbars?: boolean
  /** Gradient start color */
  thumbStartColor?: string | InfluxColors
  /** Gradient end color */
  thumbStopColor?: string | InfluxColors
  /** Colorizes the background of the list */
  backgroundColor?: InfluxColors | string
  /** Overrides backgroundColor, fills background with gradient */
  gradient?: Gradients
  /** Pixel height after which the list will scroll */
  maxHeight?: string
}

export type ListRef = HTMLDivElement
export type ListContentsRef = HTMLDivElement

export const ListRoot = forwardRef<ListRef, ListProps>(
  (
    {
      id,
      style = {width: '100%'},
      testID = 'list',
      children,
      gradient,
      noScrollX = true,
      noScrollY = false,
      maxHeight = '100%',
      className,
      contentsRef,
      contentsStyle,
      thumbStopColor,
      thumbStartColor,
      backgroundColor,
      scrollToSelected = false,
      autoHideScrollbars = false,
    },
    ref
  ) => {
    const contrastColor = calculateTextColorFromBackground(
      backgroundColor,
      gradient
    )

    const listClass = classnames('cf-list', {
      [`${className}`]: className,
      [`cf-list__${contrastColor || 'light'}`]: true,
      'cf-list__special-light': backgroundColor === InfluxColors.Obsidian,
    })

    const scrollTop = calculateSelectedPosition(scrollToSelected, children)

    const scrollbarsStyle = {
      width: '100%',
      minWidth: '100%',
      maxWidth: '100%',
      height: '100%',
      minHeight: '100%',
      maxHeight,
    }

    const listStyle = generateBackgroundStyle(
      backgroundColor,
      gradient,
      false,
      style,
      90
    )

    return (
      <div
        id={id}
        ref={ref}
        style={listStyle}
        className={listClass}
        data-testid={testID}
      >
        <DapperScrollbars
          style={scrollbarsStyle}
          autoHide={autoHideScrollbars}
          autoSizeHeight={true}
          thumbStartColor={thumbStartColor}
          thumbStopColor={thumbStopColor}
          noScrollX={noScrollX}
          noScrollY={noScrollY}
          scrollTop={scrollTop}
        >
          <div
            ref={contentsRef}
            style={contentsStyle}
            className="cf-list--contents"
            data-testid={`${testID}--contents`}
          >
            <ListContext.Provider
              value={{
                listBackgroundColor: backgroundColor,
                listGradient: gradient,
                listContrastColor: contrastColor || 'light',
              }}
            >
              {children}
            </ListContext.Provider>
          </div>
        </DapperScrollbars>
      </div>
    )
  }
)

ListRoot.displayName = 'List'

const calculateSelectedPosition = (
  scrollToSelected: boolean,
  children: ReactNode
): number => {
  if (!children || !scrollToSelected) {
    return 0
  }

  const heights = {
    xs: 28,
    sm: 36,
    md: 48,
    lg: 56,
  }

  const items = React.Children.map(children, child =>
    _.get(child, 'props.selected', false)
  )

  const sizes = React.Children.map(children, child =>
    _.get(child, 'props.size', 'xs')
  ) as string[]

  if (!items) {
    return 0
  }

  const itemIndex = items.findIndex(item => item === true)

  const DEFAULT_ITEM_HEIGHT = 28
  const itemHeight =
    itemIndex >= 0 ? heights[sizes[itemIndex]] : DEFAULT_ITEM_HEIGHT

  return itemHeight * itemIndex
}
