// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FormLabel} from './FormLabel'
import {FormElementError} from './FormElementError'
import {FormHelpText} from './FormHelpText'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormElementProps extends StandardFunctionProps {
  /** Label Text */
  label: string
  /** Input instruction text */
  helpText?: string
  /** Text to be displayed on error */
  errorMessage?: string
  /** Element to be displayed along with label */
  labelAddOn?: () => JSX.Element
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
  /** Useful for associating a label with an input */
  htmlFor?: string
}

export type FormElementRef = HTMLLabelElement & HTMLDivElement

export const FormElement = forwardRef<FormElementRef, FormElementProps>(
  (
    {
      id,
      label,
      style,
      htmlFor,
      required,
      helpText,
      children,
      className,
      labelAddOn,
      errorMessage,
      testID = 'form--element',
    },
    ref
  ) => {
    const formElementClass = classnames('cf-form--element', {
      [`${className}`]: className,
    })

    const formElementElements = (
      <>
        {!!label && (
          <FormLabel label={label} required={required}>
            {!!labelAddOn && labelAddOn()}
          </FormLabel>
        )}
        {children}
        {!!errorMessage && <FormElementError message={errorMessage} />}
        {!!helpText && <FormHelpText text={helpText} />}
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
          className={formElementClass}
        >
          {formElementElements}
        </label>
      )
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formElementClass}
      >
        {formElementElements}
      </div>
    )
  }
)

FormElement.displayName = 'FormElement'
