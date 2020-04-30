// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormLabelProps extends StandardFunctionProps {
  /** Label Text */
  label: string
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
  /** Useful for associating a label with an input */
  htmlFor?: string
}

export type FormLabelRef = HTMLDivElement & HTMLLabelElement

export const FormLabel = forwardRef<FormLabelRef, FormLabelProps>(
  (
    {
      id,
      label,
      style,
      testID = 'form--label',
      htmlFor,
      children,
      required,
      className,
    },
    ref
  ) => {
    const formLabelClass = classnames('cf-form--label', {
      [`${className}`]: className,
    })

    const labelChildren = (
      <>
        <div className="cf-form--label-text">
          {label}
          {!!required && <span className="cf-form--label-required">*</span>}
        </div>
        {children}
      </>
    )

    if (htmlFor) {
      return (
        <label
          id={id}
          ref={ref}
          style={style}
          htmlFor={htmlFor}
          data-testid={testID}
          className={formLabelClass}
        >
          {labelChildren}
        </label>
      )
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formLabelClass}
      >
        {labelChildren}
      </div>
    )
  }
)

FormLabel.displayName = 'FormLabel'
