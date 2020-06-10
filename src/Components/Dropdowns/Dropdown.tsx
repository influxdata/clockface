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
  menu: (onClickInside?: () => void) => JSX.Element
  /** Alternative to button */
  input?: () => JSX.Element
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
  /** Callback for when dropdown menu is toggled to expanded state */
  onExpand?: () => void
  /** Callback for when dropdown menu is collapsed by a click outside */
  onClickOutside?: () => void
  /** Callback for when dropdown menu is collapsed by a click inside */
  onClickInside?: () => void
  /** Enables external control of dropdown state */
  expanded?: boolean
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
      expanded,
      onExpand,
      className,
      onClickInside,
      onClickOutside,
    },
    ref
  ) => {
    const [internalExpanded, setInternalExpandedState] = useState(false)
    const controlledExternally = expanded !== undefined

    const handleToggleMenu = (e: MouseEvent<HTMLElement>): void => {
      e.preventDefault()
      if (internalExpanded) {
        setInternalExpandedState(false)
        onClickOutside && onClickOutside()
      } else {
        setInternalExpandedState(true)
        onExpand && onExpand()
      }
    }

    const handleClickOutside = (): void => {
      !controlledExternally && setInternalExpandedState(false)
      onClickOutside && onClickOutside()
    }

    const handleClickInside = (): void => {
      !controlledExternally && setInternalExpandedState(false)
      onClickInside && onClickInside()
    }

    const dropdownClass = classnames('cf-dropdown', {
      [`${className}`]: className,
      'cf-dropdown__up': dropUp,
      'cf-dropdown__down': !dropUp,
    })

    let toggleElement = <div>button & input props are both undefined</div>

    if (input) {
      toggleElement = input()
    } else if (button) {
      toggleElement = button(internalExpanded, handleToggleMenu)
    }

    const displayMenuElement = controlledExternally
      ? expanded
      : internalExpanded

    return (
      <ClickOutside onClickOutside={handleClickOutside}>
        <div
          style={style}
          id={id}
          ref={ref}
          className={dropdownClass}
          data-testid={testID}
        >
          {toggleElement}
          <div className="cf-dropdown--menu-container">
            {displayMenuElement && menu(handleClickInside)}
          </div>
        </div>
      </ClickOutside>
    )
  }
)

DropdownRoot.displayName = 'Dropdown'
