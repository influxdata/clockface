// Libraries
import React, {forwardRef, RefObject, CSSProperties, ReactNode} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Utils
import {getScrollbarColorsFromTheme} from '../../Utils'

// Types
import {DropdownMenuTheme, StandardFunctionProps} from '../../Types'

export interface DropdownMenuProps extends StandardFunctionProps {
  /** Pixel height after which the dropdown menu will scroll */
  maxHeight?: number
  /** Controls coloration of the dropdown menu and all subcomponents */
  theme?: DropdownMenuTheme
  /** Disable scrolling horizontally */
  noScrollX?: boolean
  /** Disable scrolling vertically */
  noScrollY?: boolean
  /** Automatically scroll to selected item when dropdown is opened */
  scrollToSelected?: boolean
  /** Function to handle closing the menu when a child item is clicked */
  onCollapse?: () => void
  /** Pass through ref for contents element within scrollbars */
  contentsRef?: RefObject<DropdownMenuContentsRef>
  /** Useful for customizing appearance of the contents element within scrollbars */
  contentsStyle?: CSSProperties
  /** Controls autoHide behavior of scrollbars within the menu */
  autoHideScrollbars?: boolean
}

export type DropdownMenuRef = HTMLDivElement
export type DropdownMenuContentsRef = HTMLDivElement

export const DropdownMenu = forwardRef<DropdownMenuRef, DropdownMenuProps>(
  (
    {
      id,
      theme = DropdownMenuTheme.Onyx,
      style = {width: '100%'},
      testID = 'dropdown-menu',
      children,
      maxHeight = 250,
      noScrollX = true,
      noScrollY = false,
      className,
      onCollapse,
      contentsRef,
      contentsStyle,
      scrollToSelected = true,
      autoHideScrollbars = false,
    },
    ref
  ) => {
    const DropdownMenuClass = classnames('cf-dropdown-menu', {
      [`${className}`]: className,
      [`cf-dropdown__${theme}`]: theme,
    })

    const {thumbStartColor, thumbStopColor} = getScrollbarColorsFromTheme(theme)

    const scrollTop = calculateSelectedPosition(scrollToSelected, children)

    const scrollbarsStyle = {
      width: '100%',
      minWidth: '100%',
      maxWidth: '100%',
      maxHeight: `${maxHeight}px`,
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={DropdownMenuClass}
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
            onClick={onCollapse}
            className="cf-dropdown-menu--contents"
            data-testid={`${testID}--contents`}
          >
            {children}
          </div>
        </DapperScrollbars>
      </div>
    )
  }
)

DropdownMenu.displayName = 'DropdownMenu'

const calculateSelectedPosition = (
  scrollToSelected: boolean,
  children: ReactNode
): number => {
  if (!children || !scrollToSelected) {
    return 0
  }

  const itemHeight = 24
  const items = React.Children.map(children, child =>
    _.get(child, 'props.selected', false)
  )

  if (!items) {
    return 0
  }

  const itemIndex = items.findIndex(item => item === true)

  return itemHeight * itemIndex
}
