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

export type FormLabelRef = HTMLDivElement

export const FormLabel = forwardRef<FormLabelRef, FormLabelProps>(
  (
    {id, label, style, testID = 'form--label', children, required, className},
    ref
  ) => {
    const formLabelClass = classnames('cf-form--label', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formLabelClass}
      >
        <div className="cf-form--label-text">
          {label}
          {!!required && <span className="cf-form--label-required">*</span>}
        </div>
        {children}
      </div>
    )
  }
)

FormLabel.displayName = 'FormLabel'
