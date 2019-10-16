//Libraries
import {CSSProperties} from 'react'
import chroma from 'chroma-js'

// Constants
import {getColorsFromGradient} from '../Constants/colors'

// Types
import {
  Gradients,
  InfluxColors,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
  DropdownMenuTheme,
  DropdownMenuScrollbarColors,
} from '../Types'

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

export const getScrollbarColorsFromTheme = (
  theme: DropdownMenuTheme
): DropdownMenuScrollbarColors => {
  switch (theme) {
    case DropdownMenuTheme.Malachite:
      return {
        thumbStartColor: InfluxColors.Wasabi,
        thumbStopColor: InfluxColors.Neutrino,
      }
    case DropdownMenuTheme.Onyx:
      return {
        thumbStartColor: InfluxColors.Laser,
        thumbStopColor: InfluxColors.Comet,
      }
    case DropdownMenuTheme.Amethyst:
      return {
        thumbStartColor: InfluxColors.Neutrino,
        thumbStopColor: InfluxColors.Moonstone,
      }
    case DropdownMenuTheme.Sapphire:
    default:
      return {
        thumbStartColor: InfluxColors.Neutrino,
        thumbStopColor: InfluxColors.Hydrogen,
      }
  }
}

export const createPortalElement = (id: string, portalName: string): void => {
  const portalExists = document.getElementById(id)
  if (portalExists) {
    return
  }

  const portalElement = document.createElement('div')
  portalElement.setAttribute('class', `cf-${portalName}-portal`)
  portalElement.setAttribute('id', id)

  document.body.appendChild(portalElement)
}

export const destroyPortalElement = (id: string): void => {
  const portalElement = document.getElementById(id)

  if (portalElement) {
    portalElement.remove()
  } else {
    console.error('cannot portal find element')
  }
}
