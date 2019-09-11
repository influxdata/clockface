import {CSSProperties} from 'react'
import {HEX_CODE_CHAR_LENGTH} from '../Constants/colors'

export const validateHexCode = (colorHex: string): string | null => {
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
    return null
  }

  return errorMessage.join(', ')
}

export const convertCSSPropertiesToString = (styles: CSSProperties): string => Object.entries(styles).reduce((styleString, [propName, propValue]) => {
  const formattedPropName = propName.replace(/([A-Z])/g, matches => `-${matches[0].toLowerCase()}`)
  return `${styleString}${formattedPropName}:${propValue};`
}, '')
