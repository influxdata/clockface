// Libraries
import React, {FC, useContext} from 'react'
import classnames from 'classnames'

// Contexts
import {ListContext} from './List'

// Utils
import {generateBackgroundStyle} from '../../Utils'

// Types
import {InfluxColors, Gradients} from '../../Types'

export interface ListItemHighlightProps {
  /** Is the parent element selected? */
  selected?: boolean
  /** Colorizes the background of the list item in hover and selected state */
  backgroundColor?: InfluxColors | string
  /** Overrides backgroundColor, fills background with gradient */
  gradient?: Gradients
}

export const ListItemHighlight: FC<ListItemHighlightProps> = ({
  selected,
  backgroundColor,
  gradient,
}) => {
  const {listContrastColor} = useContext(ListContext)

  const itemHighlightClassname = classnames('cf-list-item--highlight', {
    [`cf-list-item--highlight__${listContrastColor}`]: true,
  })

  const selectedStyle = generateBackgroundStyle(
    backgroundColor,
    gradient,
    false,
    {},
    90
  )

  const listStyle = selected ? selectedStyle : undefined

  return <div className={itemHighlightClassname} style={listStyle} />
}

ListItemHighlight.displayName = 'ListItemHighlight'
