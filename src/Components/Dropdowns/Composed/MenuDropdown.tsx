// Libraries
import React, {
  ChangeEvent,
  MouseEvent,
  FC,
  useState,
  useRef,
  useEffect,
} from 'react'
import classnames from 'classnames'
import {MenuStatus} from '../Dropdown'

// Components
import {Dropdown} from '../.'
import {Icon} from '../../Icon/Base/Icon'
import {Input} from '../../Inputs/Input'

// Types
import {
  ComponentSize,
  IconFont,
  DropdownMenuTheme,
  StandardFunctionProps,
} from '../../../Types'

export interface MenuItem {
  name: string
  iconFont: string
  href: string
}

export interface SubMenuItem {
  id: string
  name: string
}

export interface MenuDropdownProps extends StandardFunctionProps {
  /** A default pre-selected Option */
  selectedOption?: SubMenuItem
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
  /**enables forced searching once dropdown list exceeds largeListSearch value */
  largeListSearch?: boolean
  /**the number of total items in the dropdown list before search is forced */
  largeListCeiling?: number
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
}
const isBlank = (pString: string | undefined): boolean =>
  // Checks for falsiness or a non-white space character
  !pString || !/[^\s]+/.test(pString)

const getValueWithBackup = (
  val: string | undefined,
  backup: string
): string => {
  if (isBlank(val)) {
    return backup
  }
  return val as string
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
  largeListCeiling = 0,
  largeListSearch = false,
  searchText = 'Search Accounts',
  menuTheme = DropdownMenuTheme.Onyx,
  className,
  buttonSize = ComponentSize.Small,
  buttonIcon,
  menuTestID = 'type-ahead-dropdown--menu',
}) => {
  // Menu Dropdown State
  const [isTypeAhead, setIsTypeAhead] = useState(false)

  // Typeahead State
  const [selectIndex, setSelectIndex] = useState(-1)
  const [queryResults, setQueryResults] = useState(subMenuOptions)
  const [menuOpen, setMenuOpen] = useState<MenuStatus>(MenuStatus.Closed)
  const [selectedItem, setSelectedItem] = useState<SubMenuItem | null>(
    selectedOption
  )

  const initialTypedValue = ''
  const [typedValue, setTypedValue] = useState<string>(initialTypedValue)

  const backupValue = useRef<string>(initialTypedValue)

  const largeListValidation =
    largeListSearch && queryResults.length > largeListCeiling

  useEffect(() => {
    if (typedValue.length > 0) {
      const result = subMenuOptions.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(typedValue.toLowerCase())
      })

      // always reset the selectIndex when doing filtering;  because
      // if it had a value, and then they type, the queryResults changes
      // so need to reset
      setQueryResults(result)
      setSelectIndex(-1)
    } else {
      setQueryResults(subMenuOptions)
    }
  }, [subMenuOptions, typedValue])

  const button = (
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

  const onClickAwayHere = () => {
    //  reset to the selected value; if the user typed in
    //  something not allowed it will go back to the last selected value:
    setTypedValueToSelectedName(backupValue.current)
  }

  /**
   *  filter the selections/options based on the search string: needle
   * if the needle is empty; then there is nothing to filter; so return everything
   */
  const doFilter = (needle: string) => {
    // if there is no value, set the queryResults to everything
    // and set the typedValue to nothing (zero it out)
    // reset the selectIndex too
    if (!needle) {
      setQueryResults(subMenuOptions)
      setTypedValue('')
      setSelectIndex(-1)
    } else {
      const result = subMenuOptions.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(needle.toLowerCase())
      })

      // always reset the selectIndex when doing filtering;  because
      // if it had a value, and then they type, the queryResults changes
      // so need to reset
      setQueryResults(result)
      setTypedValue(needle)
      setMenuOpen(MenuStatus.Open)
      setSelectIndex(-1)
    }
  }

  /**
   *  if there is a value, get its name, else show the empty string.
   * only want to show the default name text when there is an item selected.
   * */
  const getDisplayName = (item: SubMenuItem | null): string => {
    if (item && item.id) {
      return getValueWithBackup(item.name, defaultText)
    }
    return ''
  }

  const doSelection = (item: SubMenuItem | null, closeMenuNow?: boolean) => {
    setSelectedItem(item)
    const actualName = getDisplayName(item)
    setTypedValue(actualName)
    backupValue.current = actualName
    setSelectIndex(-1)

    if (closeMenuNow) {
      setIsTypeAhead(false)
      setMenuOpen(MenuStatus.Closed)
    }
    setSelectedItem(item)
  }

  const clear = () => {
    doSelection(null)
    doFilter('')
  }

  const filterVals = (event: ChangeEvent<HTMLInputElement>) => {
    const needle = event?.target?.value
    doFilter(needle)
  }

  const selectAllTextInInput = (event?: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      event.target.select()
    }
  }

  const menuHeaderIconFont = menuHeaderIcon
  const menuHeaderIconEl = (
    <Icon glyph={menuHeaderIconFont} className="cf-button-icon" />
  )
  const menuHeaderTextEl = <span>{menuHeaderText}</span>
  const menuHeaderCaretEl = (
    <Icon
      glyph={IconFont.CaretRight_New}
      className="cf-dropdown-menu--caret-icon"
    />
  )

  const menu = () => (
    <Dropdown.Menu testID={menuTestID} theme={menuTheme} style={menuStyle}>
      <div>
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
        <hr className="cf-dropdown-menu__line-break"></hr>
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

  const typeAheadMenu = () => {
    const itemWidth = {width: 'calc(100% - 8px)'}
    const inputStyle = {
      width: 'calc(100% - 8px)',
      marginTop: '4px',
      marginBottom: '8px',
      marginLeft: 'auto',
      marginRight: 'auto',
      zIndex: '0',
    }
    const iconFont = IconFont.CaretLeft_New
    const textEl = <span>Switch Account</span>
    const iconEl = (
      <Icon
        glyph={iconFont}
        className="cf-dropdown-menu--caret-icon cf-button-icon"
      />
    )
    const largeListValidationText =
      typedValue.length >= 1
        ? 'There are still too many results. Please input more characters.'
        : 'Please input a character to start seeing results.'
    const inputComponent = (
      <Input
        placeholder={searchText}
        onChange={filterVals}
        value={typedValue}
        testID={`dropdown-input-typeAhead--${testIdSuffix}`}
        onClear={clear}
        onFocus={selectAllTextInInput}
        style={inputStyle}
      />
    )

    return (
      <Dropdown.Menu testID={menuTestID} theme={menuTheme} style={menuStyle}>
        <div>
          <div
            className="cf-dropdown-item cf-dropdown-item__no-wrap"
            onClick={() => flipTypeAheadStatus(true)}
          >
            {iconEl}
            {textEl}
          </div>
          {inputComponent}
          {largeListValidation ? (
            <Dropdown.Item
              key="nada-no-values-in-filter"
              testID="nothing-in-filter-typeAhead"
              disabled={true}
              wrapText={true}
            >
              {largeListValidationText}
            </Dropdown.Item>
          ) : (
            queryResults?.map((value, index) => {
              // add the 'active' class to highlight when arrowing; like a hover
              const classN = classnames({
                active: index === selectIndex,
              })

              return (
                <div key={value.id}>
                  <Dropdown.Item
                    id={value.id}
                    value={value}
                    onClick={() => doSelection(value, true)}
                    style={itemWidth}
                    selected={value.id === selectedItem?.id}
                    className={classN}
                  >
                    {value.name}
                  </Dropdown.Item>
                  <hr className="cf-dropdown-menu__line-break"></hr>
                </div>
              )
            })
          )}
          {!queryResults || queryResults.length === 0 ? (
            <Dropdown.Item
              key="nada-no-values-in-filter"
              testID="nothing-in-filter-typeAhead"
              disabled={true}
            >
              {`no matches for ${typedValue}`}
            </Dropdown.Item>
          ) : null}
        </div>
      </Dropdown.Menu>
    )
  }

  const props: any = {id, style, className, menuOpen}

  return (
    <Dropdown
      {...props}
      testID={testID || `typeAhead-dropdown--${testIdSuffix}`}
      onClickAway={onClickAwayHere}
      disableAutoFocus
      button={button}
      menu={isTypeAhead ? typeAheadMenu : menu}
    />
  )
}