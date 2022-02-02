// Libraries
import React, {forwardRef} from 'react'

// Components
import {Dropdown, DropdownRef} from '../'

export type CreatableTypeAheadDropdownReadmeRef = DropdownRef

export const CreatableTypeAheadDropdown = forwardRef(() => {
  return (
    <Dropdown
      menu={onCollapse => <Dropdown.Menu onCollapse={onCollapse} />}
      button={(active, onClick) => (
        <Dropdown.Button active={active} onClick={onClick} />
      )}
    />
  )
})
CreatableTypeAheadDropdown.displayName = 'CreatableTypeAheadDropdown'
