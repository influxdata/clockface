// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

interface ColorPickerSwatchProps extends StandardFunctionProps {
  /** Color name */
  name: string
  /** Color hex value */
  hex: string
  /** Function to be called on color click */
  onClick: (hex: string) => void
  /** Used to determine percentage width of parent to take up */
  swatchesPerRow: number
  /** Index - used to determine if corners are rounded or not */
  index: number
  /** Number of colors used in Color Picker, used to determine rounded corners */
  swatchesCount: number
}

export type ColorPickerSwatchRef = HTMLDivElement

export const ColorPickerSwatch = forwardRef<
  ColorPickerSwatchRef,
  ColorPickerSwatchProps
>(
  (
    {
      id,
      hex,
      name,
      index,
      style,
      onClick,
      className,
      swatchesCount,
      swatchesPerRow,
      testID = 'color-picker',
    },
    ref
  ) => {
    const colorPickerSwatchClass = classnames('cf-color-picker--swatch', {
      [`${className}`]: className,
      'cf-color-picker--swatch__top-left': index === 0,
      'cf-color-picker--swatch__top-right': index === swatchesPerRow - 1,
      'cf-color-picker--swatch__bottom-left':
        index === swatchesCount - swatchesPerRow,
      'cf-color-picker--swatch__bottom-right': index === swatchesCount - 1,
    })

    const size = `${100 / swatchesPerRow}%`

    const colorPickerSwatchStyle = {
      width: size,
      paddingBottom: size,
      ...style,
    }

    const handleClick = (): void => {
      onClick(hex)
    }

    return (
      <div
        className={colorPickerSwatchClass}
        title={name}
        onClick={handleClick}
        data-testid={`${testID}--swatch`}
        style={colorPickerSwatchStyle}
        ref={ref}
        id={id}
      >
        <span style={{backgroundColor: hex}} />
      </div>
    )
  }
)

ColorPickerSwatch.displayName = 'ColorPickerSwatch'
