// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, Typeface, HeadingElement} from '../../Types'

// Styles
import './Heading.scss'

export interface HeadingProps extends StandardFunctionProps {
  /** Contents of heading */
  bold?: boolean
  /** Use monospace font instead of default */
  type?: Typeface
  /** Controls appearance of border below heading */
  underline?: boolean
  /** Element to use for heading */
  element: HeadingElement
  /** Visual only - will match the element prop if not specified */
  appearance?: HeadingElement
  /** Controls whether the text can be selected */
  selectable?: boolean
  /** Alternate text */
  alt?: string
}

export type HeadingRef = HTMLHeadingElement

export const Heading = forwardRef<HeadingRef, HeadingProps>(
  (
    {
      id,
      alt,
      bold,
      type = Typeface.Roboto,
      style,
      underline,
      testID = 'heading',
      element,
      children,
      className,
      selectable = false,
      appearance,
    },
    ref
  ) => {
    const visualElement = appearance || element

    const headingClass = classnames('cf-heading', {
      'cf-heading__standard': type === Typeface.Roboto,
      'cf-heading__monospace': type === Typeface.RobotoMonospace,
      'cf-heading__brand': type === Typeface.Rubik,
      'cf-heading__bold': bold,
      'cf-heading__underline': underline,
      'cf-heading__selectable': selectable,
      [`cf-heading__${visualElement}`]: visualElement,
      [`${className}`]: className,
    })

    const headingElement = `${element}`

    return React.createElement(
      headingElement,
      {id: id, ref, alt, style, className: headingClass, 'data-testid': testID},
      children
    )
  }
)

Heading.displayName = 'Heading'
