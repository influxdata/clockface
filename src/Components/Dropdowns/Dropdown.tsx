// Libraries
import React, {forwardRef, MouseEvent, useState} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {ClickOutside} from '../ClickOutside/ClickOutside'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './Dropdown.scss'

export interface DropdownProps extends StandardFunctionProps {
  /** Component to render as the button (use Dropdown.Button) */
  button?: (
    active: boolean,
    onClick: (e: MouseEvent<HTMLElement>) => void
  ) => JSX.Element
  /** Component to render as the menu (use Dropdown.Menu) */
  menu: (onCollapse?: () => void) => JSX.Element
  /** Alternative to button */
  input?: (onFocus: () => void) => JSX.Element
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
}

export type DropdownRef = HTMLDivElement

export const DropdownRoot = forwardRef<DropdownRef, DropdownProps>(
  (
    {
      id,
      menu,
      input,
      style = {width: '100%'},
      testID = 'dropdown',
      button,
      dropUp = false,
      className,
    },
    ref
  ) => {
    const [expanded, setExpandedState] = useState(false)

    const handleToggleMenu = (e: MouseEvent<HTMLElement>): void => {
      e.preventDefault()
      if (expanded) {
        setExpandedState(false)
      } else {
        setExpandedState(true)
      }
    }

    const handleExpandMenu = (): void => {
      setExpandedState(true)
    }

    const handleCollapseMenu = (): void => {
      setExpandedState(false)
    }

    const dropdownClass = classnames('cf-dropdown', {
      [`${className}`]: className,
      'cf-dropdown__up': dropUp,
      'cf-dropdown__down': !dropUp,
    })

    let toggleElement = <div>button & input props are both undefined</div>

    if (input) {
      toggleElement = input(handleExpandMenu)
    } else if (button) {
      toggleElement = button(expanded, handleToggleMenu)
    }

    return (
      <ClickOutside onClickOutside={handleCollapseMenu}>
        <div
          style={style}
          id={id}
          ref={ref}
          className={dropdownClass}
          data-testid={testID}
        >
          {toggleElement}
          <div className="cf-dropdown--menu-container">
            {expanded && menu(handleCollapseMenu)}
          </div>
        </div>
      </ClickOutside>
    )
  }
)

DropdownRoot.displayName = 'Dropdown'
