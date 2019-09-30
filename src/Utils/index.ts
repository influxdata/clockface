//Libraries
import {CSSProperties} from 'react'
import chroma from 'chroma-js'

// Constants
import {HEX_CODE_CHAR_LENGTH} from '../Constants/colors'
import {getColorsFromGradient} from '../Constants/colors'

// Types
import {
  Gradients,
  InfluxColors,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
} from '../Types'

export const validateHexCode = (colorHex: string): string => {
  const isValidLength = colorHex.length === HEX_CODE_CHAR_LENGTH
  const beginsWithHash = colorHex.substring(0, 1) === '#'

  const errorMessage = []

  if (!beginsWithHash) {
    errorMessage.push('Hexcodes must begin with #')
  }

  if (!isValidLength) {
    if (errorMessage.length) {
      errorMessage.push(`and must be ${HEX_CODE_CHAR_LENGTH} characters`)
    } else {
      errorMessage.push(`Hexcodes must be ${HEX_CODE_CHAR_LENGTH} characters`)
    }
  }

  if (!errorMessage.length) {
    return ''
  }

  return errorMessage.join(', ')
}

export const convertCSSPropertiesToString = (styles: CSSProperties): string =>
  Object.entries(styles).reduce((styleString, [propName, propValue]) => {
    const formattedPropName = propName.replace(
      /([A-Z])/g,
      matches => `-${matches[0].toLowerCase()}`
    )
    return `${styleString}${formattedPropName}:${propValue};`
  }, '')

export const calculateTextColorFromBackground = (
  backgroundColor: InfluxColors | string,
  gradient?: Gradients
): string => {
  const mediumGrey = 0.34

  if (gradient) {
    const {start} = getColorsFromGradient(gradient)
    return chroma(start).luminance() >= mediumGrey ? 'dark' : 'light'
  }

  return chroma(backgroundColor).luminance() >= mediumGrey ? 'dark' : 'light'
}

export const generatePanelStyle = (
  backgroundColor: InfluxColors | string,
  gradient?: Gradients,
  style?: CSSProperties
): CSSProperties => {
  let panelStyle: CSSProperties = {backgroundColor}

  if (gradient) {
    const colors = getColorsFromGradient(gradient)

    panelStyle = {
      ...panelStyle,
      background: `linear-gradient(45deg,  ${colors.start} 0%,${
        colors.stop
      } 100%)`,
    }
  }

  if (style) {
    return {...panelStyle, ...style}
  }

  return panelStyle
}

export const generateTextBlockStyle = (
  backgroundColor?: InfluxColors | string,
  textColor?: InfluxColors | string,
  style?: CSSProperties
): CSSProperties | undefined => {
  if (!backgroundColor) {
    return {color: `${textColor}`, ...style}
  }

  const contrastingTextColor =
    calculateTextColorFromBackground(backgroundColor) === 'dark'
      ? InfluxColors.Kevlar
      : InfluxColors.White

  let color = `${contrastingTextColor}`

  if (textColor) {
    color = `${textColor}`
  }

  return {backgroundColor, color, ...style}
}

export const generateLabelStyle = (
  labelColor: InfluxColors | string,
  isClickable: boolean,
  isMouseOver: boolean,
  style?: CSSProperties
): CSSProperties => {
  let backgroundColor = labelColor

  if (isMouseOver && isClickable) {
    backgroundColor = `${chroma(labelColor).brighten(1)}`
  }

  const color =
    calculateTextColorFromBackground(labelColor) === 'dark'
      ? InfluxColors.Kevlar
      : InfluxColors.White

  return {
    backgroundColor: `${backgroundColor}`,
    color,
    ...style,
  }
}

export const generateTechnoSpinnerStyle = (
  diameterPixels: number,
  strokeWidth: ComponentSize,
  style?: CSSProperties
): CSSProperties => {
  let borderWidth
  const width = `${diameterPixels}px`
  const height = `${diameterPixels}px`

  switch (strokeWidth) {
    case ComponentSize.ExtraSmall:
      borderWidth = 1
      break
    case ComponentSize.Small:
      borderWidth = 2
      break
    case ComponentSize.Medium:
      borderWidth = 4
      break
    case ComponentSize.Large:
    default:
      borderWidth = 8
  }

  return {width, height, borderWidth, ...style}
}

export const generateRangeSliderTrackFillStyle = (
  fill: boolean,
  min: number,
  max: number,
  value: number,
  color: ComponentColor,
  status: ComponentStatus
): CSSProperties | undefined => {
  if (status === ComponentStatus.Disabled) {
    return {background: InfluxColors.Castle}
  }

  const fillColor = {
    default: InfluxColors.Graphite,
    primary: InfluxColors.Pool,
    secondary: InfluxColors.Star,
    success: InfluxColors.Rainforest,
    warning: InfluxColors.Pineapple,
    danger: InfluxColors.Curacao,
  }

  const minVal = Math.min(min, max)
  const maxVal = Math.max(min, max)

  const pos = ((value - minVal) / (maxVal - minVal)) * 100

  if (fill) {
    return {
      background: `linear-gradient(to right, ${fillColor[color]} 0%, ${
        fillColor[color]
      } ${pos}%, ${InfluxColors.Pepper} ${pos}%, ${InfluxColors.Pepper} 100%)`,
    }
  }

  return
}
