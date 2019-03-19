// Libraries
import React, {Component, ChangeEvent} from 'react'
import _ from 'lodash'

// Components
import {Input} from '../Inputs/Input'
import {Button} from '../Button/Button'
import {ColorPickerSwatch} from './ColorPickerSwatch'
import {FormElementError} from '../FormLayout/FormElementError'

// Constants
import {influxColors, HEX_CODE_CHAR_LENGTH} from '../../Constants/colors'

// Types
import {IconFont, ButtonShape, ComponentStatus, Color} from '../../Types'

// Utils
import {validateHexCode} from '../../Utils/colors'

// Styles
import './ColorPicker.scss'

interface PassedProps {
  /** currently selected color */
  color: string
  /** Function to be called on color select */
  onChange: (color: string, status?: ComponentStatus) => void
}

interface DefaultProps {
  /** Array of colors to be displayed in color picker */
  colors?: Color[]
  /** Prevent focus from leaving the input */
  maintainInputFocus?: boolean
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = PassedProps & DefaultProps

interface State {
  errorMessage: string | null
}

export class ColorPicker extends Component<Props, State> {
  public static defaultProps: DefaultProps = {
    colors: influxColors,
    maintainInputFocus: false,
    testID: 'color-picker',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      errorMessage: null,
    }
  }

  render() {
    const {maintainInputFocus, testID, color, colors} = this.props

    return (
      <div className="color-picker" data-testid={testID}>
        <div className="color-picker--swatches">
          {colors &&
            colors.map(color => (
              <ColorPickerSwatch
                key={color.name}
                hex={color.hex}
                name={color.name}
                onClick={this.handleSwatchClick}
                testID={testID}
              />
            ))}
        </div>
        <div className="color-picker--form">
          <Input
            customClass="color-picker--input"
            placeholder="#000000"
            value={color}
            onChange={this.handleInputChange}
            maxLength={HEX_CODE_CHAR_LENGTH}
            onBlur={this.handleInputBlur}
            autoFocus={maintainInputFocus}
            status={this.inputStatus}
            testID={`${testID}--input`}
          />
          {this.colorPreview}
          <Button
            icon={IconFont.Refresh}
            shape={ButtonShape.Square}
            onClick={this.handleRandomizeColor}
            titleText="I'm feeling lucky"
            testID={`${testID}--randomize`}
          />
        </div>
        {this.errorMessage}
      </div>
    )
  }

  private get inputStatus(): ComponentStatus {
    const {errorMessage} = this.state

    return errorMessage ? ComponentStatus.Error : ComponentStatus.Valid
  }

  private handleSwatchClick = (hex: string): void => {
    const {onChange} = this.props

    this.setState({errorMessage: null})
    onChange(hex, ComponentStatus.Valid)
  }

  private handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {onChange} = this.props
    const acceptedChars = [
      '#',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
    ]

    const trimmedValue = e.target.value.trim()
    const cleanedValue = trimmedValue
      .split('')
      .filter(char => acceptedChars.includes(char.toLowerCase()))
      .join('')

    const errorMessage = validateHexCode(cleanedValue)
    const status = errorMessage ? ComponentStatus.Error : ComponentStatus.Valid

    this.setState({errorMessage})
    onChange(cleanedValue, status)
  }

  private handleInputBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const {maintainInputFocus} = this.props

    if (maintainInputFocus) {
      e.target.focus()
    }
  }

  private handleRandomizeColor = (): void => {
    const {onChange, colors} = this.props
    const randomColor = _.sample(colors)
    const hex = _.get(randomColor, 'hex') || ''

    this.setState({errorMessage: null})
    onChange(hex, ComponentStatus.Valid)
  }

  private get errorMessage(): JSX.Element | undefined {
    const {testID} = this.props
    const {errorMessage} = this.state

    if (errorMessage) {
      return (
        <div className="color-picker--error" data-testid={`${testID}--error`}>
          <FormElementError message={errorMessage} />
        </div>
      )
    }

    return
  }

  private get colorPreview(): JSX.Element {
    const {color} = this.props

    return (
      <div
        className="color-picker--selected"
        style={{backgroundColor: color}}
      />
    )
  }
}
