// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Types
import {
  StandardFunctionProps,
  Typeface,
  HeadingElement,
  FontWeight,
} from '../../Types'

// Styles
import './Heading.scss'

export interface HeadingProps extends StandardFunctionProps {
  weight?: FontWeight
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
  /** Function to be called on button click */
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  /** Alternate text */
  alt?: string
}

export type HeadingRef = HTMLHeadingElement

export const Heading = forwardRef<HeadingRef, HeadingProps>(
  (
    {
      id,
      alt,
      weight = FontWeight.Medium,
      type = Typeface.Rubik,
      style,
      underline,
      testID = 'heading',
      element,
      children,
      className,
      selectable = false,
      appearance,
      onClick,
    },
    ref
  ) => {
    const visualElement = appearance || element

    const headingClass = classnames('cf-heading', {
      'cf-heading__standard': type === Typeface.Rubik,
      'cf-heading__monospace': type === Typeface.IBMPlexMono,
      [`cf-heading__${weight}`]: weight,
      'cf-heading__underline': underline,
      'cf-heading__selectable': selectable,
      [`cf-heading__${visualElement}`]: visualElement,
      [`${className}`]: className,
    })

    const headingElement = `${element}`

    return React.createElement(
      headingElement,
      {
        id,
        ref,
        alt,
        style,
        className: headingClass,
        'data-testid': testID,
        onClick,
      },
      children
    )
  }
)

Heading.displayName = 'Heading'
