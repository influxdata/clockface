// Libraries
import React, {Component, ChangeEvent} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {Input} from '../Inputs/Input'
import {Button} from '../Button/Composed/Button'
import {ColorPickerSwatch} from './ColorPickerSwatch'
import {FormElementError} from '../Form/FormElementError'

// Constants
import {influxColors, HEX_CODE_CHAR_LENGTH} from '../../Constants/colors'

// Types
import {
  IconFont,
  ButtonShape,
  ComponentStatus,
  Color,
  StandardProps,
} from '../../Types'

// Utils
import {validateHexCode} from '../../Utils/colors'

// Styles
import './ColorPicker.scss'

interface Props extends StandardProps {
  /** currently selected color */
  color: string
  /** Function to be called on color select */
  onChange: (color: string, status?: ComponentStatus) => void
  /** Array of colors to be displayed in color picker */
  colors: Color[]
  /** Prevent focus from leaving the input */
  maintainInputFocus: boolean
  /** How many color swatches to render in each row */
  swatchesPerRow: number
}

interface State {
  errorMessage: string | null
}

export class ColorPicker extends Component<Props, State> {
  public static readonly displayName = 'ColorPicker'

  public static defaultProps = {
    colors: influxColors,
    maintainInputFocus: false,
    swatchesPerRow: 10,
    testID: 'color-picker',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      errorMessage: null,
    }
  }

  render() {
    const {
      maintainInputFocus,
      testID,
      color,
      colors,
      swatchesPerRow,
      id,
    } = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        <div className="cf-color-picker--swatches">
          {colors &&
            colors.map((color, i) => (
              <ColorPickerSwatch
                index={i}
                key={color.name}
                hex={color.hex}
                name={color.name}
                onClick={this.handleSwatchClick}
                testID={testID}
                swatchesPerRow={swatchesPerRow}
                swatchesCount={colors.length}
              />
            ))}
        </div>
        <div className="cf-color-picker--form">
          <Input
            className="cf-color-picker--input"
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

  private get className(): string {
    const {className} = this.props

    return classnames('cf-color-picker', {[`${className}`]: className})
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
        <div
          className="cf-color-picker--error"
          data-testid={`${testID}--error`}
        >
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
        className="cf-color-picker--selected"
        style={{backgroundColor: color}}
      />
    )
  }
}
