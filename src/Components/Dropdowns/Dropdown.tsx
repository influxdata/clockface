// Libraries
import React, {forwardRef, MouseEvent, useState, useEffect} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {ClickOutside} from '../ClickOutside/ClickOutside'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './Dropdown.scss'

enum MenuStatus {
  Open = 'open',
  Closed = 'closed',
}

export interface DropdownProps extends StandardFunctionProps {
  /** Component to render as the button (use Dropdown.Button) */
  button: (
    active: boolean,
    onClick: (e: MouseEvent<HTMLElement>) => void
  ) => JSX.Element
  /** Component to render as the menu (use Dropdown.Menu) */
  menu: (onCollapse?: () => void) => JSX.Element
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
  /** Optional method that is triggered when the user clicks outside of/away from the dropdown */
  onClickAway?: () => void
  /**
   * optional way for the owner of this dropdown to set the menu status:
   * 'open':  the menu will be open
   * 'closed': the menu will be closed
   * any other string will be ignored.
   *
   * and the menu state (open/closed) only changes when this value changes.
   * so the owner is responsible for resetting this value
   * (if the string is set to 'open', and then the user closes it, and the code sets it to open again,
   * unless the code sets it to something else in between (like null or 'close'),
   * then nothing will happen- the menu will not open)
   * */
  setMenuStatus?: MenuStatus
}

export type DropdownRef = HTMLDivElement

export const DropdownRoot = forwardRef<DropdownRef, DropdownProps>(
  (
    {
      id,
      menu,
      style = {width: '100%'},
      testID = 'dropdown',
      button,
      dropUp = false,
      className,
      onClickAway,
      setMenuStatus,
    },
    ref
  ) => {
    const [expanded, setExpandedState] = useState(false)

    const handleToggleMenu = (e: MouseEvent<HTMLElement>): void => {
      e.preventDefault()
      setExpandedState(!expanded)
    }

    const handleCollapseMenu = (): void => {
      setExpandedState(false)
      if (onClickAway) {
        onClickAway()
      }
    }

    useEffect(() => {
      if (setMenuStatus === MenuStatus.Closed) {
        setExpandedState(false)
      }
      if (setMenuStatus === MenuStatus.Open) {
        setExpandedState(true)
      }
    }, [setMenuStatus])

    const dropdownClass = classnames('cf-dropdown', {
      [`${className}`]: className,
      'cf-dropdown__up': dropUp,
      'cf-dropdown__down': !dropUp,
    })

    return (
      <ClickOutside onClickOutside={handleCollapseMenu}>
        <div
          style={style}
          id={id}
          ref={ref}
          className={dropdownClass}
          data-testid={testID}
        >
          {button(expanded, handleToggleMenu)}
          <div className="cf-dropdown--menu-container">
            {expanded && menu(handleCollapseMenu)}
          </div>
        </div>
      </ClickOutside>
    )
  }
)

DropdownRoot.displayName = 'Dropdown'
