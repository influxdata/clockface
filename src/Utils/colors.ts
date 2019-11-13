// Libraries
import {CSSProperties} from 'react'

// Types
import {Gradients, Gradient, DropdownMenuTheme} from '../Types'

// Constants
import {dropdownScrollColors, influxGradients} from '../Constants/colors'

export const getColorsFromGradient = (
  gradient: Gradients | DropdownMenuTheme | string
): Gradient => {
  return dropdownScrollColors[gradient] || influxGradients[gradient]
}

export interface CSSGradientColor {
  position: number
  color: string
}

export const generateInlineCSSGradient = (
  angle: number,
  colors: CSSGradientColor[]
): CSSProperties => {
  const angleText = `${angle}deg`

  const colorsText = colors.map(color => {
    return `${color.color} ${color.position}%`
  })

  const joinedProperties = [angleText, ...colorsText].join(', ')

  return {background: `linear-gradient(${joinedProperties})`}
}
