// Libraries
import React, {forwardRef, useState, useEffect} from 'react'
import classnames from 'classnames'

// Components
import {FormLabel} from './FormLabel'
import {FormElementError} from './FormElementError'
import {FormHelpText} from './FormHelpText'

// Types
import {StandardFunctionProps, ComponentStatus} from '../../Types'

export interface FormValidationElementProps extends StandardFunctionProps {
  /** Child components */
  children: (status: ComponentStatus) => React.ReactNode
  /** Function used for validation check */
  validationFunc: (value: any) => string | null
  /** Function called when validation status */
  onStatusChange?: (newStatus: ComponentStatus) => void
  /** Element to be displayed along with label */
  labelAddOn?: () => JSX.Element
  /** Label Text */
  label: string
  /** Field value */
  value: any
  /** Input instruction text */
  helpText?: string
  /** Whether this field is required to submit form, adds red required asterisk */
  required?: boolean
}

export type FormValidationElementRef = HTMLDivElement

// public componentDidUpdate(prevProps: Props, prevState: State) {
//   if (prevProps.value === this.props.value) {
//     return
//   }

//   const {validationFunc, onStatusChange} = this.props
//   const errorMessage = validationFunc(this.props.value)
//   const newStatus = errorMessage
//     ? ComponentStatus.Error
//     : ComponentStatus.Valid

//   if (onStatusChange && prevState.status !== newStatus) {
//     onStatusChange(newStatus)
//   }

//   this.setState({status: newStatus, errorMessage})
// }

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
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const [status, setStatus] = useState<ComponentStatus>(
      ComponentStatus.Default
    )

    useEffect(() => {
      const errorMessage = validationFunc(value)

      const newStatus = errorMessage
        ? ComponentStatus.Error
        : ComponentStatus.Valid

      if (onStatusChange && status !== newStatus) {
        onStatusChange(newStatus)
      }

      setStatus(newStatus)
      setErrorMessage(errorMessage)
    }, [value])

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
