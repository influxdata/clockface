// Libraries
import React, {Component} from 'react'

// Components
import {FormLabel} from './FormLabel'
import {FormElementError} from './FormElementError'
import {FormHelpText} from './FormHelpText'

// Types
import {ComponentStatus} from '../../Types'

interface Props {
  /** Child components */
  children: (status: ComponentStatus) => JSX.Element
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

interface State {
  errorMessage: string | null
  status: ComponentStatus
}

export class FormValidationElement extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      errorMessage: null,
      status: ComponentStatus.Default,
    }
  }

  public componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.value === this.props.value) {
      return
    }

    const {validationFunc, onStatusChange} = this.props
    const errorMessage = validationFunc(this.props.value)
    const newStatus = errorMessage
      ? ComponentStatus.Error
      : ComponentStatus.Valid

    if (onStatusChange && prevState.status !== newStatus) {
      onStatusChange(newStatus)
    }

    this.setState({status: newStatus, errorMessage})
  }

  public render() {
    return (
      <div className="form--element">
        {this.label}
        {this.children}
        {this.errorMessage}
        {this.helpText}
      </div>
    )
  }

  private get label(): JSX.Element | undefined {
    const {label, required} = this.props

    if (!label) {
      return
    }

    return (
      <FormLabel label={label} required={required}>
        {this.labelChild}
      </FormLabel>
    )
  }

  private get labelChild(): JSX.Element | undefined {
    const {labelAddOn} = this.props

    if (!labelAddOn) {
      return
    }

    return labelAddOn()
  }

  private get helpText(): JSX.Element | undefined {
    const {helpText} = this.props

    if (!helpText) {
      return
    }

    return <FormHelpText text={helpText} />
  }

  private get children(): JSX.Element {
    const {children} = this.props
    const {status} = this.state

    return children(status)
  }

  private get errorMessage(): JSX.Element | undefined {
    const {errorMessage} = this.state

    if (!errorMessage) {
      return
    }

    return <FormElementError message={errorMessage} />
  }
}
