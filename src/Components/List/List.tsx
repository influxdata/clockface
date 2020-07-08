// Libraries
import React, {forwardRef, RefObject, CSSProperties, ReactNode} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Types
import {StandardFunctionProps, InfluxColors} from '../../Types'

// Styles
import './List.scss'

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
      noScrollX = true,
      noScrollY = false,
      className,
      contentsRef,
      contentsStyle,
      scrollToSelected = false,
      autoHideScrollbars = false,
      thumbStopColor = InfluxColors.Pool,
      thumbStartColor = InfluxColors.Star,
    },
    ref
  ) => {
    const ListClass = classnames('cf-list', {
      [`${className}`]: className,
    })

    const scrollTop = calculateSelectedPosition(scrollToSelected, children)

    const scrollbarsStyle = {
      width: '100%',
      minWidth: '100%',
      maxWidth: '100%',
      height: '100%',
      minHeight: '100%',
      maxHeight: '100%',
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={ListClass}
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
            {children}
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
