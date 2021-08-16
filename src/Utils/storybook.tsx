export const mapEnumKeys = (elEnum: object, trim?: number): any => {
  let arr = Object.keys(elEnum)

  if (trim) {
    arr = arr.slice(0, trim)
  }

  return arr.reduce((acc, member): object => {
    acc[member] = member
    return acc
  }, {})
}

export const removeUnusedEnumKeyValue = (
  elEnum: object,
  unusedEnumKeys: string[]
): any[] => {
  const newObj: string[] = []
  const keys = Object.keys(elEnum).filter(key => {
    return !unusedEnumKeys.includes(key)
  })
  keys.forEach(key => (newObj[key] = elEnum[key]))
  return newObj
}
