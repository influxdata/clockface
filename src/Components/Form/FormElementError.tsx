// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormElementErrorProps extends StandardFunctionProps {
  /** Text to be displayed on error */
  message?: string
}

export type FormElementErrorRef = HTMLSpanElement

export const FormElementError = forwardRef<
  FormElementErrorRef,
  FormElementErrorProps
>(
  (
    {
      id,
      style,
      className,
      message = '\u00a0\u00a0',
      testID = 'form--element-error',
    },
    ref
  ) => {
    const formElementErrorClass = classnames('cf-form--element-error', {
      [`${className}`]: className,
    })

    return (
      <span
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formElementErrorClass}
      >
        {message}
      </span>
    )
  }
)

FormElementError.displayName = 'FormElementError'
