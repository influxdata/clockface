// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'
// Types
import {StandardFunctionProps} from '../../Types'

export interface PageTitleProps extends StandardFunctionProps {
  /** Text to display in title */
  title: string
  /** Alternate text for screen readers */
  altText?: string
}

export type PageTitleRef = HTMLHeadingElement

export const PageTitle = forwardRef<PageTitleRef, PageTitleProps>(
  ({title, altText, className, id, style, testID = 'page-title'}, ref) => {
    const pageTitleClass = classnames('cf-page--title', {
      [`${className}`]: className,
    })

    return (
      <h1
        className={pageTitleClass}
        title={altText}
        data-testid={testID}
        id={id}
        ref={ref}
        style={style}
      >
        {title}
      </h1>
    )
  }
)

PageTitle.displayName = 'PageTitle'
