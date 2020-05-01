import React, {FunctionComponent} from 'react'

// Types
import {DropdownItemType} from '../../Types'

interface DropdownItemSelectionIndicatorProps {
  type: DropdownItemType
}

export const DropdownItemSelectionIndicator: FunctionComponent<DropdownItemSelectionIndicatorProps> = ({
  type,
}) => {
  switch (type) {
    case DropdownItemType.Checkbox:
      return <div className="cf-dropdown-item--checkbox" />
    case DropdownItemType.Dot:
      return <div className="cf-dropdown-item--dot" />
    case DropdownItemType.None:
    default:
      return <></>
  }
}

DropdownItemSelectionIndicator.displayName = 'DropdownItemSelectionIndicator'
