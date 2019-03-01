export const mapEnumKeys = (elEnum: object, trim?: number) => {
  let arr = Object.keys(elEnum)

  if (trim) {
    arr = arr.slice(0, trim)
  }

  return arr.reduce((acc, member): object => {
    acc[member] = member
    return acc
  }, {})
}
