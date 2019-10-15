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
}

export type FormLabelRef = HTMLLabelElement

export const FormLabel = forwardRef<FormLabelRef, FormLabelProps>(
  (
    {label, children, className, required, id, style, testID = 'form--label'},
    ref
  ) => {
    const formLabelClass = classnames('cf-form--label', {
      [`${className}`]: className,
    })

    return (
      <label
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formLabelClass}
      >
        <span>
          {label}
          {!!required && <span className="cf-form--label-required">*</span>}
        </span>
        {children}
      </label>
    )
  }
)

FormLabel.displayName = 'FormLabel'
