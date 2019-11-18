// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {ComponentSize, StandardFunctionProps} from '../../Types'

// Styles
import './InputLabel.scss'

export interface InputLabelProps extends StandardFunctionProps {
  /** Used to match the state of the associated SlideToggle */
  active?: boolean
  /** Button size */
  size?: ComponentSize
  /** Controls text wrapping */
  wrapText?: boolean
  /** Associate this label with a specific input */
  htmlFor?: string
  /** Keyboard control tab order  */
  tabIndex?: number
}

export type InputLabelRef = HTMLLabelElement

export const InputLabel = forwardRef<InputLabelRef, InputLabelProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      active = true,
      testID = 'input-label',
      htmlFor,
      wrapText = false,
      children,
      tabIndex,
      className,
    },
    ref
  ) => {
    const slideToggleLabelClass = classnames('cf-input-label', {
      [`${className}`]: className,
      'cf-input-label__wrap': wrapText,
      [`cf-input-label__${size}`]: size,
      'cf-input-label__active': active,
      'cf-input-label__clickable': htmlFor,
    })

    return (
      <label
        id={id}
        ref={ref}
        style={style}
        htmlFor={htmlFor}
        tabIndex={tabIndex}
        className={slideToggleLabelClass}
        data-testid={testID}
      >
        {children}
      </label>
    )
  }
)

InputLabel.displayName = 'InputLabel'
