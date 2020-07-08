import React, {FunctionComponent, useContext} from 'react'
import classnames from 'classnames'

// Contexts
import {ListItemContext} from './ListItem'

// Styles
import './ListIndicator.scss'

export type ListIndicatorType = 'checkbox' | 'dot'

export interface ListIndicatorProps {
  /** Controls appearance of indicator */
  type: ListIndicatorType
}

export const ListIndicator: FunctionComponent<ListIndicatorProps> = ({
  type,
}) => {
  const {selected, color, size} = useContext(ListItemContext)

  const indicatorClassname = classnames('cf-list-indicator', {
    'cf-list-indicator__selected': selected,
    [`cf-list-indicator__${type}`]: type,
    [`cf-list-indicator__${color}`]: color,
    [`cf-list-indicator__${size}`]: size,
  })

  return (
    <div className={indicatorClassname}>
      <div className="cf-list-indicator--element" />
    </div>
  )
}

ListIndicator.displayName = 'ListIndicator'
