// Libraries
import React, {forwardRef, useEffect, useRef} from 'react'
import classnames from 'classnames'

// Components
import {FormLabel} from './FormLabel'
import {FormElementError} from './FormElementError'
import {FormHelpText} from './FormHelpText'

// Types
import {
  StandardFunctionProps,
  ComponentStatus,
  ValidationFunction,
} from '../../Types'

export interface FormValidationElementProps extends StandardFunctionProps {
  /** Child components */
  children: (status: ComponentStatus) => React.ReactNode
  /** Function used for validation check */
  validationFunc: ValidationFunction
  /** Function called when validation status */
  onStatusChange?: (newStatus: ComponentStatus) => void
  /** Element to be displayed along with label */
  labelAddOn?: () => JSX.Element
  /** Label Text */
  label: string
  /** Field value */
  value: string
  /** Input instruction text */
  helpText?: string
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
}

export type FormValidationElementRef = HTMLDivElement

export const FormValidationElement = forwardRef<
  FormValidationElementRef,
  FormValidationElementProps
>(
  (
    {
      id,
      value,
      style,
      label,
      helpText,
      children,
      required,
      labelAddOn,
      className,
      validationFunc,
      onStatusChange,
      testID = 'form--validation-element',
    },
    ref
  ) => {
    const shouldPerformValidation = useRef<boolean>(false)

    let errorMessage = null 
    let status = ComponentStatus.Default


    useEffect(() => {
      shouldPerformValidation.current = true
    }, [value])

    if (shouldPerformValidation.current) {
      errorMessage = validationFunc(value)
      status = !!errorMessage
        ? ComponentStatus.Error
        : ComponentStatus.Valid
    }

    if (onStatusChange) {
      onStatusChange(status)
    }

    const formValidationElementClass = classnames('cf-form--element', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formValidationElementClass}
      >
        {!!label && (
          <FormLabel label={label} required={required}>
            {labelAddOn && labelAddOn()}
          </FormLabel>
        )}
        {children(status)}
        {!!errorMessage && <FormElementError message={errorMessage} />}
        {!!helpText && <FormHelpText text={helpText} />}
      </div>
    )
  }
)

FormValidationElement.displayName = 'FormValidationElement'
