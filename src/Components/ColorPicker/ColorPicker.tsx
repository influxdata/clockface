// Libraries
import React, {
  forwardRef,
  ChangeEvent,
  useState,
  FunctionComponent,
} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {Input} from '../Inputs/Input'
import {Button} from '../Button/Composed/Button'
import {ColorPickerSwatch, ColorPickerSwatchRef} from './ColorPickerSwatch'
import {FormElementError} from '../Form/FormElementError'

// Constants
import {HEX_CHARACTERS} from '../../Constants'
import {influxColors, HEX_CODE_CHAR_LENGTH} from '../../Constants/colors'

// Types
import {
  IconFont,
  ButtonShape,
  ComponentStatus,
  Color,
  StandardFunctionProps,
} from '../../Types'

// Utils
import {validateHexCode} from '../../Utils/index'

// Styles
import './ColorPicker.scss'

interface ColorPickerProps extends StandardFunctionProps {
  /** currently selected color */
  color: string
  /** Function to be called on color select */
  onChange: (color: string, status?: ComponentStatus) => void
  /** Array of colors to be displayed in color picker */
  colors?: Color[]
  /** Prevent focus from leaving the input */
  maintainInputFocus?: boolean
  /** How many color swatches to render in each row */
  swatchesPerRow?: number
}

export type ColorPickerRef = HTMLDivElement

export const ColorPicker = forwardRef<ColorPickerSwatchRef, ColorPickerProps>(
  (
    {
      id,
      style,
      color,
      onChange,
      className,
      swatchesPerRow = 10,
      colors = influxColors,
      testID = 'color-picker',
      maintainInputFocus = false,
    },
    ref
  ) => {
    const [errorMessage, setErrorMessage] = useState('')

    const colorPickerClass = classnames('cf-color-picker', {
      [`${className}`]: className,
    })

    const inputStatus = errorMessage
      ? ComponentStatus.Error
      : ComponentStatus.Valid

    const handleSwatchClick = (hex: string): void => {
      setErrorMessage('')
      onChange(hex, ComponentStatus.Valid)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      const trimmedValue = e.target.value.trim()
      const cleanedValue = trimmedValue
        .split('')
        .filter(char => HEX_CHARACTERS.includes(char.toLowerCase()))
        .join('')

      const newErrorMessage = validateHexCode(cleanedValue)

      setErrorMessage(newErrorMessage)
      onChange(cleanedValue, inputStatus)
    }

    const handleInputBlur = (e: ChangeEvent<HTMLInputElement>): void => {
      if (maintainInputFocus) {
        e.target.focus()
      }
    }

    const handleRandomizeColor = (): void => {
      const randomColor = _.sample(colors)
      const hex = _.get(randomColor, 'hex') || ''

      setErrorMessage('')
      onChange(hex, ComponentStatus.Valid)
    }

    return (
      <div
        className={colorPickerClass}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        <div className="cf-color-picker--swatches">
          {colors &&
            colors.map((color, i) => (
              <ColorPickerSwatch
                index={i}
                key={color.name}
                hex={color.hex}
                name={color.name}
                onClick={handleSwatchClick}
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
            inputStyle={{paddingLeft: '29px'}}
            value={color}
            onChange={handleInputChange}
            maxLength={HEX_CODE_CHAR_LENGTH}
            onBlur={handleInputBlur}
            autoFocus={maintainInputFocus}
            status={inputStatus}
            testID={`${testID}--input`}
          />
          <ColorPreview color={color} />
          <Button
            icon={IconFont.Refresh}
            shape={ButtonShape.Square}
            onClick={handleRandomizeColor}
            titleText="I'm feeling lucky"
            testID={`${testID}--randomize`}
          />
        </div>
        <ErrorMessage testID={testID} errorMessage={errorMessage} />
      </div>
    )
  }
)

ColorPicker.displayName = 'ColorPicker'

const ColorPreview: FunctionComponent<{color: string}> = ({color}) => {
  return (
    <div
      className="cf-color-picker--selected"
      style={{backgroundColor: color}}
    />
  )
}

const ErrorMessage: FunctionComponent<{
  testID: string
  errorMessage: string
}> = ({testID, errorMessage}) => {
  if (!errorMessage) {
    return null
  }

  return (
    <div className="cf-color-picker--error" data-testid={`${testID}--error`}>
      <FormElementError message={errorMessage} />
    </div>
  )
}
