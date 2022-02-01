import {ValidationFunction} from '../Types'

export const VALID_HEX_LENGTH = 7

export const validateHexCode: ValidationFunction = (
  color: string
): string | null => {
  console.log('color')

  // Cannot be blank
  if (!color || !color.length) {
    return 'Please enter a hexcode'
  }

  // Cannot contain spaces
  if (color.match(/^\s*$/)) {
    return 'Cannot contain spaces'
  }

  // Must be 7 characters including the #
  const isValidLength = color.length === VALID_HEX_LENGTH
  if (!isValidLength) {
    return `Must be ${VALID_HEX_LENGTH} characters`
  }

  // Must begin with a # character
  const beginsWithHash = color.substring(0, 1) === '#'
  if (!beginsWithHash) {
    return 'Must begin with #'
  }

  // Cannot contain invalid characters
  const invalidChars = color.replace(/[abcdefABCDEF#0123456789]/g, '')
  if (invalidChars.length) {
    return 'Invalid hexcode'
  }

  // Can not have more than one # symbol
  const numberOfHashes = (color.match(/#/g) || []).length
  if (numberOfHashes > 1) {
    return 'Can not contain more than one #'
  }

  // Valid hexcode exists
  return null
}

export const invalidHexCharacters = /[^abcdefABCDEF#0123456789]/g
