// Libraries
import React, {FC, MouseEvent, useEffect, useRef, useState} from 'react'
import {MenuStatus} from '../Dropdown'
import {TypeAhead} from './Typeahead'

// Components
import {Dropdown} from '../.'
import {Icon} from '../../Icon/Base/Icon'

import './MenuDropdownStyles.scss'

// Types
import {
  ComponentSize,
  DropdownMenuTheme,
  IconFont,
  StandardFunctionProps,
} from '../../../Types'

export interface MenuItem {
  name: string
  iconFont: string
  href: string
}

export interface SubMenuItem {
  id: string | number
  name: string
}

export interface MenuDropdownProps extends StandardFunctionProps {
  /** A default pre-selected Option */
  selectedOption?: SubMenuItem | null
  /** List of href options to render in the main menu */
  options: MenuItem[]
  /** List of options to render in the sub type-ahead menu */
  subMenuOptions: SubMenuItem[]
  /** used for generating custom test ids */
  testIdSuffix?: string
  /** Text to render in button if nothing is pre-selected */
  defaultText?: string
  /** Icon to display in the main menu header */
  menuHeaderIcon?: IconFont
  /** Text to display in the main menu header */
  menuHeaderText?: string
  /** Text to display by default in the type ahead input */
  searchText?: string
  /** Optional size of button */
  buttonSize?: ComponentSize
  /** Optional icon to render in button */
  buttonIcon?: IconFont
  /** Optional theme of menu */
  menuTheme?: DropdownMenuTheme
  menuTestID?: string
  /** the name/label to show in the dropdown where there is an item with an id but without a name; defaults to the empty string */
  menuStyle?: React.CSSProperties
  // Callback function for when option is selected
  onSelectOption?: (item: SubMenuItem | null) => void
}

export const MenuDropdown: FC<MenuDropdownProps> = ({
  id,
  style,
  menuStyle,
  testID = 'Menu-dropdown',
  testIdSuffix = 'menu',
  options,
  subMenuOptions,
  selectedOption = null,
  defaultText = 'No Account Selected',
  menuHeaderIcon = IconFont.Switch_New,
  menuHeaderText = 'Switch Account',
  searchText = 'Search Accounts',
  menuTheme = DropdownMenuTheme.None,
  className,
  buttonSize = ComponentSize.Small,
  buttonIcon,
  menuTestID = 'type-ahead-dropdown--menu',
  onSelectOption,
}) => {
  // Menu Dropdown State
  const [isTypeAhead, setIsTypeAhead] = useState(false)

  // Typeahead State
  const [menuOpen, setMenuOpen] = useState<MenuStatus>(MenuStatus.Closed)
  const [selectedItem, setSelectedItem] = useState<SubMenuItem | null>(
    selectedOption
  )

  useEffect(() => {
    setSelectedItem(selectedOption)
  }, [selectedOption])

  const initialTypedValue = ''
  const [typedValue, setTypedValue] = useState<string>(initialTypedValue)

  const backupValue = useRef<string>(initialTypedValue)

  const dropdownButton = (
    active: boolean,
    onClick: (e: MouseEvent<HTMLElement>) => void
  ) => (
    <Dropdown.Button
      active={active}
      onClick={onClick}
      size={buttonSize}
      icon={buttonIcon}
      className={'cf-dropdown-menu--button'}
    >
      {selectedItem?.name || defaultText}
    </Dropdown.Button>
  )

  const flipTypeAheadStatus = (keepMenuOpen?: boolean) => {
    if (keepMenuOpen) {
      setMenuOpen(MenuStatus.Open)
    }
    const status = isTypeAhead
    setIsTypeAhead(!status)
  }

  const setTypedValueToSelectedName = (backupName?: string) => {
    let selectedName = backupName ?? selectedItem?.name
    if (!selectedName) {
      selectedName = ''
    }
    setTypedValue(selectedName)
  }

  const onClickAway = () => {
    //  reset to the selected value; if the user typed in
    //  something not allowed it will go back to the last selected value:
    setTypedValueToSelectedName(backupValue.current)
  }

  const menuHeaderIconEl = (
    <Icon glyph={menuHeaderIcon} className="cf-button-icon" />
  )
  const menuHeaderTextEl = <span>{menuHeaderText}</span>
  const menuHeaderCaretEl = (
    <Icon
      glyph={IconFont.CaretRight_New}
      className="cf-dropdown-menu--caret-icon"
    />
  )

  const dropdownMenu = () => (
    <Dropdown.Menu testID={menuTestID} theme={menuTheme} style={menuStyle}>
      <div>
        {/* Multi-org UI tickets #4051 and #4047, when user only has 1 account or 1 org, switch button is disabled */}
        {subMenuOptions.length > 1 && (
          <>
            <div
              className="cf-dropdown-item cf-dropdown-item__no-wrap"
              onClick={() => flipTypeAheadStatus(true)}
            >
              <div className="cf-dropdown-menu-header">
                <div>
                  {menuHeaderIconEl}
                  {menuHeaderTextEl}
                </div>
                {menuHeaderCaretEl}
              </div>
            </div>
            <hr className="cf-dropdown-menu__line-break" />
          </>
        )}
        {options.map(value => {
          const iconFont = value.iconFont
          const iconEl = <Icon glyph={iconFont} className="cf-button-icon" />
          const textEl = <span>{value.name}</span>
          return (
            <Dropdown.HrefItem key={value.name} href={value.href}>
              {iconEl}
              {textEl}
            </Dropdown.HrefItem>
          )
        })}
      </div>
    </Dropdown.Menu>
  )

  const props: any = {id, style, className, menuOpen}

  const typeAheadMenu = (
    <TypeAhead
      selectedOption={selectedOption}
      options={options}
      testIdSuffix={testIdSuffix}
      defaultText={defaultText}
      menuHeaderIcon={menuHeaderIcon}
      menuHeaderText={menuHeaderText}
      searchText={searchText}
      buttonSize={buttonSize}
      buttonIcon={buttonIcon}
      menuTheme={menuTheme}
      menuTestID={menuTestID}
      menuStyle={menuStyle}
      onSelectOption={onSelectOption}
    />
  )
  return (
    <Dropdown
      {...props}
      testID={testID || `typeAhead-dropdown--${testIdSuffix}`}
      onClickAway={onClickAway}
      disableAutoFocus
      button={dropdownButton}
      menu={isTypeAhead ? typeAheadMenu : dropdownMenu}
    />
  )
}
