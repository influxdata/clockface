// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormElementErrorProps extends StandardFunctionProps {
  /** Text to be displayed on error */
  message?: string
  withHelper?: boolean
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
      withHelper = false,
    },
    ref
  ) => {
    const formElementErrorClass = classnames('cf-form--element-error', {
      [`${className}`]: className,
    })

    //When Helper text exists, we want error message to take up as much height as the helper text. When Helper text does not exist, we want error message to not shift spaces.
    //const withHelperStyle = withHelper ? {height: '20px'} : {}

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
