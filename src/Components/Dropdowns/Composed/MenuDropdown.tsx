// Libraries
import React, {
  ChangeEvent,
  FC,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react'
import {MenuStatus} from '../Dropdown'
import {FixedSizeList as List} from 'react-window'

// Components
import {Dropdown} from '../.'
import {Icon} from '../../Icon/Base/Icon'
import {Input} from '../../Inputs/Input'

import './MenuDropdownStyles.scss'

// Types
import {
  ComponentSize,
  DropdownMenuTheme,
  IconFont,
  StandardFunctionProps,
} from '../../../Types'
import classnames from 'classnames'

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
  const [selectIndex, setSelectIndex] = useState(-1)
  const [queryResults, setQueryResults] = useState(subMenuOptions)
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

  const dropdownButton = (
    active: boolean,
    onClick: (e: MouseEvent<HTMLElement>) => void
  ) => (
    <Dropdown.Button
      active={active}
      onClick={onClick}
      size={buttonSize}
      icon={buttonIcon}
      trailingIcon={IconFont.DoubleCaretVertical}
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

  /**
   *  filter the selections/options based on the search string: filterStr
   * if the filterStr is empty; then there is nothing to filter; so return everything
   */
  const applyFilter = (filterStr: string) => {
    // if there is no value, set the queryResults to everything
    // and set the typedValue to nothing (zero it out)
    // reset the selectIndex too
    if (!filterStr) {
      setQueryResults(subMenuOptions)
      setTypedValue('')
      setSelectIndex(-1)
    } else {
      const result = subMenuOptions.filter(val => {
        const name = val?.name || ''
        return name.toLowerCase().includes(filterStr.toLowerCase())
      })

      // always reset the selectIndex when doing filtering;  because
      // if it had a value, and then they type, the queryResults changes
      // so need to reset
      setQueryResults(result)
      setTypedValue(filterStr)
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
    if (onSelectOption) {
      onSelectOption(item)
    }
  }

  const clearFilter = () => {
    applyFilter('')
  }

  const filterVals = (event: ChangeEvent<HTMLInputElement>) => {
    const needle = event?.target?.value
    applyFilter(needle)
  }

  const selectAllTextInInput = (event?: ChangeEvent<HTMLInputElement>) => {
    if (event) {
      event.target.select()
    }
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
              data-testid={`${testID}--switch-button`}
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

  const typeAheadMenu = () => {
    const textEl = <span>{menuHeaderText}</span>
    const iconEl = (
      <Icon
        glyph={IconFont.CaretLeft_New}
        className="cf-dropdown-menu--caret-icon cf-button-icon"
      />
    )
    const filterSearchInput = (
      <Input
        placeholder={searchText}
        onChange={filterVals}
        value={typedValue}
        testID={`dropdown-input-typeAhead--${testIdSuffix}`}
        onClear={clearFilter}
        onFocus={selectAllTextInInput}
        className="menu-dropdown-typeahead-input"
      />
    )

    return (
      <Dropdown.Menu testID={menuTestID} theme={menuTheme} style={menuStyle}>
        <div>
          <div
            className="cf-dropdown-item cf-dropdown-item__no-wrap"
            onClick={() => flipTypeAheadStatus(true)}
            data-testid={`${testID}--switch-button`}
          >
            {iconEl}
            {textEl}
          </div>
          {filterSearchInput}
          {queryResults && queryResults.length > 0 ? (
            <List
              height={menuStyle?.height ?? 150}
              itemCount={queryResults.length}
              itemSize={50}
              width={'100%'}
              layout="vertical"
              itemData={queryResults}
            >
              {({data, index, style}) => {
                const value = data[index]
                // add the 'active' class to highlight when arrowing; like a hover
                const classN = classnames('menu-dropdown-typeahead-item', {
                  active: index === selectIndex,
                })

                return (
                  <div key={value.id} style={style}>
                    <Dropdown.Item
                      id={value.id.toString()}
                      value={value}
                      onClick={() => doSelection(value, true)}
                      /* Values need to be compared as string because account items have number ids*/
                      selected={
                        value.id.toString() === selectedItem?.id.toString()
                      }
                      className={classN}
                      trailingIconOnSelected={true}
                      testID={`typeAhead-item--${index}`}
                    >
                      {value.name}
                    </Dropdown.Item>
                    {index !== queryResults.length - 1 && (
                      <hr className="cf-dropdown-menu__line-break" />
                    )}
                  </div>
                )
              }}
            </List>
          ) : (
            <Dropdown.Item
              key="nada-no-values-in-filter"
              testID="nothing-in-filter-typeAhead"
              disabled={true}
            >
              {typedValue.length > 0
                ? `no matches for ${typedValue}`
                : 'No results'}
            </Dropdown.Item>
          )}
        </div>
      </Dropdown.Menu>
    )
  }

  const props: any = {id, style, className, menuOpen}

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
