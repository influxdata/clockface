// Libraries
import React, {Component, ChangeEvent, KeyboardEvent} from 'react'
import classnames from 'classnames'

// Components
import {Input} from './Input'
import {Radio} from '../Radio/Radio'

// Types
import {
  StandardProps,
  ButtonShape,
  ComponentColor,
  ComponentSize,
  InputType,
} from '../../Types'

// Styles
import './AutoInput.scss'

enum Mode {
  Auto = 'auto',
  Custom = 'custom',
}

interface Props extends StandardProps {
  /** Fires when the input is typed in or when the radio is toggled */
  onChange: (value: string) => void
  /** Initial value of input */
  value: string
  /** Placeholder text to appear when input has no value */
  inputPlaceholder: string
  /** Input type */
  inputType: InputType
  /** Maximum string length for input value */
  inputMaxLength?: number
  /** Lower value bound (type: number only) */
  inputMin?: number
  /** Upper value bound (type: number only) */
  inputMax?: number
  /** Radio color */
  radioColor: ComponentColor
  /** Radio & Input size */
  size: ComponentSize
}

interface State {
  inputMode: Mode
  inputValue: string
}

export class AutoInput extends Component<Props, State> {
  public static readonly displayName = 'AutoInput'

  public static defaultProps = {
    inputPlaceholder: '',
    inputType: InputType.Text,
    radioColor: ComponentColor.Primary,
    size: ComponentSize.Small,
    testID: 'auto-input',
  }

  constructor(props: Props) {
    super(props)

    const inputMode = this.props.value ? Mode.Custom : Mode.Auto

    this.state = {
      inputMode,
      inputValue: this.props.value,
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (!!this.props.value && this.props.value !== prevProps.value) {
      this.setState({inputValue: this.props.value, inputMode: Mode.Custom})
    }
  }

  public render() {
    const {inputMode} = this.state
    const {testID, id, size, radioColor} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        <div className="auto-input--radio">
          <Radio
            shape={ButtonShape.StretchToFit}
            size={size}
            color={radioColor}
          >
            <Radio.Button
              active={inputMode === Mode.Auto}
              id={`auto--${id}`}
              testID={`auto-input--${Mode.Auto}`}
              titleText="Decide for me"
              value={Mode.Auto}
              onClick={this.handleRadioClick}
            >
              Auto
            </Radio.Button>
            <Radio.Button
              active={inputMode === Mode.Custom}
              id={`custom--${id}`}
              testID={`auto-input--${Mode.Custom}`}
              titleText="I want to specify my own value"
              value={Mode.Custom}
              onClick={this.handleRadioClick}
            >
              Custom
            </Radio.Button>
          </Radio>
        </div>
        {this.input}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('auto-input', {
      [`${className}`]: className,
    })
  }

  private get input(): JSX.Element | undefined {
    const {inputMode, inputValue} = this.state
    const {
      inputPlaceholder,
      size,
      testID,
      id,
      inputType,
      inputMin,
      inputMax,
      inputMaxLength,
    } = this.props

    if (inputMode === Mode.Custom) {
      return (
        <div className="auto-input--input">
          <Input
            placeholder={inputPlaceholder}
            value={inputValue}
            onChange={this.handleInputChange}
            onKeyPress={this.handleInputKeyPress}
            onBlur={this.emitValue}
            autoFocus={true}
            size={size}
            testID={`${testID}--input`}
            id={`input--${id}`}
            maxLength={inputMaxLength}
            min={inputMin}
            max={inputMax}
            type={inputType}
          />
        </div>
      )
    }

    return
  }

  private handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    this.setState({inputValue})
  }

  private handleRadioClick = (inputMode: Mode) => {
    if (inputMode === this.state.inputMode) {
      return
    }

    if (inputMode === Mode.Auto) {
      this.setState({inputMode, inputValue: ''}, this.emitValue)
    } else {
      this.setState({inputMode})
    }
  }

  private handleInputKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      this.emitValue()
    }
  }

  private emitValue = (): void => {
    const {onChange} = this.props
    const {inputValue} = this.state

    onChange(inputValue)
  }
}
