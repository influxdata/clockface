// Libraries
import React, {forwardRef, ChangeEvent, FunctionComponent} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {Input} from '../Inputs/Input'
import {Button} from '../Button/Composed/Button'
import {ColorPickerSwatch, ColorPickerSwatchRef} from './ColorPickerSwatch'
import {FormElementError} from '../Form/FormElementError'

// Constants
import {influxColors} from '../../Constants/colors'

// Types
import {
  IconFont,
  ButtonShape,
  ComponentStatus,
  Color,
  StandardFunctionProps,
  ValidationFunction,
} from '../../Types'

// Utils
import {
  validateHexCode,
  VALID_HEX_LENGTH,
  invalidHexCharacters,
} from '../../Utils/hexCodeValidation'

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
  /** Enforces hexcode format by defult, pass in your own function to customize */
  validationFunc?: ValidationFunction
  /** Characters matching this expression will be stripped out of the value before being passed into onChange */
  invalidChars?: RegExp
}

export type ColorPickerRef = HTMLDivElement

export const ColorPicker = forwardRef<ColorPickerSwatchRef, ColorPickerProps>(
  (
    {
      id,
      style = {width: '100%'},
      color,
      onChange,
      className,
      swatchesPerRow = 10,
      colors = influxColors,
      testID = 'color-picker',
      maintainInputFocus = false,
      validationFunc = validateHexCode,
      invalidChars = invalidHexCharacters,
    },
    ref
  ) => {
    const errorMessage = validationFunc(color)

    const colorPickerClass = classnames('cf-color-picker', {
      [`${className}`]: className,
    })

    const inputStatus = !!errorMessage
      ? ComponentStatus.Error
      : ComponentStatus.Valid

    const handleSwatchClick = (hex: string): void => {
      onChange(hex, ComponentStatus.Valid)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      let nextColor = e.target.value

      if (invalidChars) {
        nextColor = e.target.value.replace(invalidChars, '')
      }

      // This is not using the inputStatus variable becuase that information
      // is stale and this outgoing information needs to be fresh in order
      // for the stateful parent to correctly make decisions

      const nextStatus = !!validationFunc(nextColor)
        ? ComponentStatus.Error
        : ComponentStatus.Valid

      onChange(nextColor, nextStatus)
    }

    const handleInputBlur = (e: ChangeEvent<HTMLInputElement>): void => {
      if (maintainInputFocus) {
        e.target.focus()
      }
    }

    const handleRandomizeColor = (): void => {
      const randomColor = _.sample(colors)
      const hex = _.get(randomColor, 'hex') || ''

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
            value={color}
            onChange={handleInputChange}
            maxLength={VALID_HEX_LENGTH}
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

ColorPreview.displayName = 'ColorPickerPreview'

const ErrorMessage: FunctionComponent<{
  testID: string
  errorMessage: string | null
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

ErrorMessage.displayName = 'ColorPickerError'
