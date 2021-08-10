// Libraries
import React, {forwardRef, MouseEvent, useState, useEffect, useRef} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {ClickOutside} from '../ClickOutside/ClickOutside'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './Dropdown.scss'

export enum MenuStatus {
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
   * optional way for the owner of this dropdown to set the menu to be open or closed:
   * 'open':  the menu will be open
   * 'closed': the menu will be closed
   * any other string will be ignored.
   *
   * and the menu  (open/closed) only changes programmatically when this value changes.
   * so the owner is responsible for resetting this value
   * (if the string is set to 'open', and then the user closes it, and the code sets it to open again,
   * unless the code sets it to something else in between (like null or 'close'),
   * then nothing will happen- the menu will not open)
   * */
  menuOpen?: MenuStatus
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
      menuOpen,
    },
    ref
  ) => {
    const [expanded, setExpandedState] = useState(false)

    const internalRef = ref || useRef<DropdownRef>(null)

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
      if (menuOpen === MenuStatus.Closed) {
        setExpandedState(false)
      }
      if (menuOpen === MenuStatus.Open) {
        setExpandedState(true)
      }
    }, [menuOpen])

    const handleEscapeKey = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        setExpandedState(false)
      }
    }

    useEffect(() => {
      if (expanded) {
        /**
         * Find the first focusable element from within the dropdown,
         * starting with the first focusable, active item
         */
        const selector = '.cf-dropdown-item[tabindex]'
        const activeEl = document.querySelector(`${selector}.active`)
        const firstEl = document.querySelector(selector)
        const element = (activeEl || firstEl) as HTMLButtonElement

        if (element) {
          element.focus()
        }

        window.addEventListener('keydown', handleEscapeKey)
      } else {
        window.removeEventListener('keydown', handleEscapeKey)

        /**
         * When the popover is closed, restore focus to the trigger element
         */
        if (typeof internalRef !== 'function' && internalRef.current) {
          const triggerEl = internalRef.current.querySelector(
            'button[tabindex]'
          ) as HTMLButtonElement

          if (triggerEl) {
            triggerEl.focus()
          }
        }
      }

      return () => {
        window.removeEventListener('keydown', handleEscapeKey)
      }
    }, [expanded])

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
          ref={internalRef}
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
