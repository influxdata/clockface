// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PageContentsProps extends StandardFunctionProps {
  /** Allows the page contents to fill the width of the screen */
  fullWidth?: boolean
  /** Allows contents to scroll on overflow */
  scrollable?: boolean
  /** If scrollable is true, this toggles whether the scrollbar is always visible */
  autoHideScrollbar?: boolean
  /** Controls the gutters (left and right margins) */
  gutters?: ComponentSize
}

export type PageContentsRef = HTMLDivElement

export const PageContents = forwardRef<PageContentsRef, PageContentsProps>(
  (
    {
      id,
      style,
      children,
      className,
      fullWidth = false,
      scrollable = false,
      testID = 'page-contents',
      autoHideScrollbar = false,
      gutters = ComponentSize.Medium,
    },
    ref
  ) => {
    const pageContentsClass = classnames('cf-page-contents', {
      'cf-page-contents__no-scroll': !scrollable,
      [`cf-page__gutter-${gutters}`]: gutters,
      [`${className}`]: className,
    })

    const widthClass = fullWidth
      ? 'cf-page-contents__fluid'
      : 'cf-page-contents__fixed'

    const kids = (
      <div ref={ref} className={widthClass}>
        {children}
      </div>
    )

    if (scrollable) {
      return (
        <DapperScrollbars
          id={id}
          style={style}
          testID={testID}
          autoHide={autoHideScrollbar}
          className={pageContentsClass}
        >
          {kids}
        </DapperScrollbars>
      )
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={pageContentsClass}
      >
        {kids}
      </div>
    )
  }
)

PageContents.displayName = 'PageContents'
