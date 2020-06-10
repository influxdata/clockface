//Libraries
import React, {ReactNode} from 'react'
import {findIndex, get} from 'lodash'

export const calculateSelectedPosition = (children: ReactNode): number => {
  if (!children) {
    return 0
  }

  const itemHeight = 24
  const items = React.Children.map(children, child =>
    get(child, 'props.selected', false)
  )

  if (!items) {
    return 0
  }

  const itemIndex = items.findIndex(item => item === true)

  return itemHeight * itemIndex
}

export const getScrollPositionByID = (optionID: string): number | undefined => {
  const dropdownItem = document.getElementById(optionID)

  if (dropdownItem) {
    return dropdownItem.offsetTop
  }

  return undefined
}

export const searchDropdownFilter = (
  value: string,
  options: string[]
): string[] => {
  if (value === '') {
    return options
  }

  return options.filter(o => {
    // Do not try to filter on empty strings
    if (o.length) {
      return o.toLowerCase().includes(value.toLowerCase())
    }

    return false
  })
}

export const searchDropdownNoMatches = (value: string): string => {
  return `Nothing matches ${value}`
}

export const getNextOption = (
  options: string[],
  selectedOption: string
): string => {
  if (options.length === 1) {
    return selectedOption
  }

  const selectedIndex = findIndex(options, option => option === selectedOption)

  if (selectedIndex === options.length - 1) {
    return selectedOption
  }

  return options[selectedIndex + 1]
}

export const getPreviousOption = (
  options: string[],
  selectedOption: string
): string => {
  if (options.length === 1) {
    return selectedOption
  }

  const selectedIndex = findIndex(options, option => option === selectedOption)

  if (selectedIndex === 0) {
    return selectedOption
  }

  return options[selectedIndex - 1]
}
