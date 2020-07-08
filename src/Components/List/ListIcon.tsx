import React, {FunctionComponent} from 'react'

// Components
import {Icon} from '../Icon'

// Types
import {IconFont} from '../../Types'

// Styles
import './ListIcon.scss'

export interface ListIconProps {
  /** Icon to display */
  glyph: IconFont | string
}

export const ListIcon: FunctionComponent<ListIconProps> = ({glyph}) => {
  return <Icon className="cf-list-icon" glyph={glyph} />
}

ListIcon.displayName = 'ListIcon'
