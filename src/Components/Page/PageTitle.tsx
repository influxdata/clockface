// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Heading} from '../Typography'

// Types
import {
  StandardFunctionProps,
  HeadingElement,
  Typeface,
  FontWeight,
} from '../../Types'

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
      <Heading
        id={id}
        alt={altText}
        ref={ref}
        weight={FontWeight.Regular}
        type={Typeface.Rubik}
        style={style}
        testID={testID}
        element={HeadingElement.H1}
        className={pageTitleClass}
        appearance={HeadingElement.H3}
      >
        {title}
      </Heading>
    )
  }
)

PageTitle.displayName = 'PageTitle'
