// Libraries
import {CSSProperties} from 'react'
import chroma from 'chroma-js'

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

export const getAverageColorFromLinearGradient = (
  linearGradient: string
): string => {
  const rgbColors = linearGradient.match(
    /[rR][gG][bB][(]\d+[,]\s\d+[,]\s\d+[)]/g
  )

  if (rgbColors && rgbColors.length === 2) {
    const startColor = chroma(rgbColors[0])
    const stopColor = chroma(rgbColors[1])

    return `${chroma.mix(startColor, stopColor)}`
  }

  return 'fail'
}
