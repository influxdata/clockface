//Libraries
import {CSSProperties} from 'react'
import chroma from 'chroma-js'
import {uniq, shuffle, capitalize, random} from 'lodash'

// Constants
import {getColorsFromGradient} from '../Utils/colors'

// Types
import {
  Gradients,
  InfluxColors,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
  DropdownMenuTheme,
  DropdownMenuScrollbarColors,
  IconFont,
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

export const generateBackgroundStyle = (
  backgroundColor: InfluxColors | string,
  gradient?: Gradients,
  bordered?: boolean,
  style?: CSSProperties
): CSSProperties => {
  let border = `2px solid ${backgroundColor}`
  let panelStyle: CSSProperties = {backgroundColor}

  if (gradient) {
    const colors = getColorsFromGradient(gradient)

    border = `2px solid ${colors.stop}`

    panelStyle = {
      ...panelStyle,
      background: `linear-gradient(45deg,  ${colors.start} 0%,${colors.stop} 100%)`,
    }
  }

  if (bordered) {
    panelStyle = {...panelStyle, border}
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
      background: `linear-gradient(to right, ${fillColor[color]} 0%, ${fillColor[color]} ${pos}%, ${InfluxColors.Pepper} ${pos}%, ${InfluxColors.Pepper} 100%)`,
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
        thumbStartColor: InfluxColors.Pearl,
        thumbStopColor: InfluxColors.Sidewalk,
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

export const createPortalElement = (
  id: string,
  portalName: string,
  classNames?: string,
  addEventListener?: (element: HTMLElement) => void
): void => {
  const portalExists = document.getElementById(id)
  if (portalExists) {
    return
  }

  const additionalClassNames = classNames ? ' ' + classNames : ''

  const portalElement = document.createElement('div')
  portalElement.setAttribute(
    'class',
    `cf-${portalName}-portal${additionalClassNames}`
  )
  portalElement.setAttribute('id', id)

  document.body.appendChild(portalElement)

  if (addEventListener) {
    updatePortalEventListener(id, addEventListener)
  }
}

export const destroyPortalElement = (id: string): void => {
  const portalElement = document.getElementById(id)

  if (portalElement) {
    portalElement.remove()
  } else {
    console.error('cannot portal find element')
  }
}

export const updatePortalEventListener = (
  id: string,
  changeEventListener: (element: HTMLElement) => void
): void => {
  const portalElement = document.getElementById(id)

  if (portalElement) {
    changeEventListener(portalElement)
  }
}

export const getDictionary = (): string[] => {
  const hipsterIpsum =
    "Ennui yr chartreuse poutine, cronut fixie brooklyn twee PBR&B irony authentic biodiesel hammock normcore gochujang. Lo-fi roof party brooklyn 90's keytar pop-up butcher. Polaroid fixie skateboard mixtape, actually church-key listicle meditation four dollar toast tilde snackwave. Tofu asymmetrical YOLO waistcoat narwhal taxidermy lyft flexitarian kitsch tbh vape small batch. Trust fund plaid hot chicken, typewriter aesthetic sriracha thundercats kitsch marfa truffaut.Tbh DIY banjo, health goth franzen aesthetic hashtag cray readymade.Pug everyday carry health goth, keffiyeh migas pop - up vape farm - to - table chicharrones fashion axe banjo echo park austin flannel polaroid.Brunch deep v health goth, crucifix ramps bespoke whatever intelligentsia. 90's brunch bitters artisan green juice chicharrones. Fingerstache ramps photo booth thundercats heirloom brooklyn neutra etsy man bun affogato marfa waistcoat. Beard pinterest franzen umami bitters chicharrones tumeric roof party deep v gastropub.Four dollar toast everyday carry actually, art party prism bushwick tbh celiac wolf.Celiac deep v blue bottle, iPhone kale chips hoodie raclette.Messenger bag sustainable enamel pin tofu brooklyn vice plaid.Enamel pin flexitarian lyft, chicharrones sriracha gluten - free tilde cloud bread bespoke godard.Jianbing ennui paleo etsy migas forage. Fingerstache tumblr food truck quinoa shabby chic schlitz heirloom pour - over.Chillwave tumeric venmo, +1 brooklyn pop - up gastropub kogi 8 - bit.Drinking vinegar letterpress flexitarian tumeric tofu yr vinyl edison bulb fam cliche ennui.Butcher pitchfork knausgaard 90's. Offal sartorial aesthetic, art party adaptogen truffaut literally. Forage pitchfork kickstarter you probably haven't heard of them, scenester retro schlitz salvia ennui kale chips etsy. Pabst gastropub occupy vinyl, shabby chic poke tumeric cred coloring book everyday carry artisan sriracha knausgaard put a bird on it bitters. Tofu yr banjo, artisan marfa cloud bread seitan +1 ugh pork belly chia. Health goth jean shorts brooklyn polaroid pickled bicycle rights salvia af, cliche occupy dreamcatcher unicorn. Seitan meh bitters affogato, kale chips copper mug meggings microdosing godard jianbing brunch direct trade. Banh mi literally schlitz, meggings master cleanse mlkshk bushwick artisan dreamcatcher 90's humblebrag."
  const cleanedText = hipsterIpsum
    .replace(/[.,]+/g, '')
    .replace(/(\s-\s)/g, ' ')
  const deDupedText = uniq(
    cleanedText.split(' ').map(word => word.toLocaleLowerCase())
  )

  return deDupedText
}

export const generateRandomText = (
  wordCountLower: number,
  wordCountUpper: number
): string => {
  const dictionary = getDictionary()
  const wordCount = random(wordCountLower, wordCountUpper)

  const randomText = shuffle(dictionary)
    .slice(0, wordCount)
    .map((text, i) => (i === 0 ? capitalize(text) : text))
    .join(' ')

  return randomText
}

export const getRandomIcon = (): IconFont => {
  const iconKeys = Object.keys(IconFont)
  const randomIconKey = iconKeys[random(0, iconKeys.length)]

  return IconFont[randomIconKey]
}

export const getRandomGradient = (): Gradients => {
  const gradientKeys = Object.keys(Gradients)
  const randomGradientKey = gradientKeys[random(0, gradientKeys.length)]

  return Gradients[randomGradientKey]
}
