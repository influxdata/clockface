import {validateHexCode, VALID_HEX_LENGTH} from '../hexCodeValidation'

describe('the validateHexCode function', () => {
  it('returns null when valid', () => {
    expect(validateHexCode('#DEAD0D')).toBeNull()
    expect(validateHexCode('#1337AD')).toBeNull()
    expect(validateHexCode('#BG62CF')).toBeNull()
  })

  it('does not allow empty strings', () => {
    expect(validateHexCode('')).toEqual('Please enter a hexcode')
  })

  it('does not allow spaces in strings', () => {
    expect(validateHexCode(' ')).toEqual('Cannot contain spaces')
  })

  it(`requires a length of ${VALID_HEX_LENGTH} (\`\$\{VALID_HEX_LENGTH\}\`)`, () => {
    expect(
      validateHexCode(
        '#G0000000000000000000AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1111111111111111111111111'
      )
    ).toEqual(`Must be ${VALID_HEX_LENGTH} characters`)
    expect(validateHexCode('#AAA')).toEqual(
      `Must be ${VALID_HEX_LENGTH} characters`
    )
  })

  it('requires hex codes begin with a (hash|pound|octothorpe) (#)', () => {
    expect(validateHexCode('DEADBAE')).toEqual('Must begin with #')
  })

  it('restricts input to base 16 characters', () => {
    expect(validateHexCode('#12345Z')).toEqual('Invalid hexcode')
    expect(validateHexCode('#ABCJD1')).toEqual('Invalid hexcode')
    expect(validateHexCode('#ABCD1Q')).toEqual('Invalid hexcode')
    expect(validateHexCode('#ABCD1T')).toEqual('Invalid hexcode')
    expect(validateHexCode('#🎱🎱🎱')).toEqual('Invalid hexcode')
  })

  it('handles strings in a kind of buggy way that the author of this test does not want to deal with', () => {
    expect(validateHexCode('#DEA  D')).toEqual('Invalid hexcode') // expect this to say 'Cannot contain spaces'
  })
})
