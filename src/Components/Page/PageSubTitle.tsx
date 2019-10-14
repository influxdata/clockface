// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PageSubTitleProps extends StandardFunctionProps {
  /** Text to display in title */
  title: string
}

export type PageSubTitleRef = HTMLHeadingElement

export const PageSubTitle = forwardRef<PageSubTitleRef, PageSubTitleProps>(
  ({title, id, style, className, testID = 'page-sub-title'}, ref) => {
    const pageSubTitleClass = classnames('cf-page--sub-title', {
      [`${className}`]: className,
    })

    return (
      <h2
        ref={ref}
        className={pageSubTitleClass}
        data-testid={testID}
        id={id}
        style={style}
      >
        {title}
      </h2>
    )
  }
)

PageSubTitle.displayName = 'PageSubTitle'
