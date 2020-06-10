// Libraries
import React, {
  forwardRef,
  ChangeEvent,
  useState,
  MouseEvent,
  KeyboardEvent,
  useRef,
} from 'react'

// Components
import {Dropdown, DropdownRef, DropdownItemRef, DropdownItemProps} from '../'
import {Input, InputProps, InputRef} from '../../Inputs'

// Utilities
import {
  searchDropdownFilter,
  searchDropdownNoMatches,
  getPreviousOption,
  getNextOption,
  getScrollPositionByID,
} from '../../../Utils/dropdowns'

// Types
import {
  ComponentSize,
  IconFont,
  DropdownMenuTheme,
  DropdownItemType,
  ComponentStatus,
} from '../../../Types'

// Styles
import './SearchDropdown.scss'

type InheritedProps = Pick<
  InputProps,
  | 'maxLength'
  | 'tabIndex'
  | 'placeholder'
  | 'autoFocus'
  | 'spellCheck'
  | 'style'
  | 'className'
  | 'testID'
  | 'onKeyPress'
  | 'onKeyDown'
  | 'onKeyUp'
  | 'id'
> &
  Pick<DropdownItemProps, 'wrapText'>
export interface SearchDropdownProps extends InheritedProps {
  /** Value of input */
  inputValue: string
  /** Fires when input value changes or a suggestion is clicked */
  onInputChange: (value: string) => void
  /** List of options to render in menu */
  options: string[]
  /** Currently selected option in list */
  selectedOption: string
  /** Callback for when a new option is selected */
  onSelect: (option: string) => void
  /** Optional status of input */
  inputStatus?: ComponentStatus
  /** Optional size of input */
  inputSize?: ComponentSize
  /** Optional icon to render in input */
  inputIcon?: IconFont
  /** Optional theme of menu */
  menuTheme?: DropdownMenuTheme
  /** Optional maximum pixel height menu */
  menuMaxHeight?: number
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
  /** Custom filtering function */
  filterFunction?: (inputValue: string, options: string[]) => string[]
  /** Text to show when filterFunction returns no matches */
  noMatchesText?: (inputValue?: string) => string
}

export type SearchDropdownRef = DropdownRef

export const SearchDropdown = forwardRef<
  SearchDropdownRef,
  SearchDropdownProps
>(
  (
    {
      id,
      style = {width: '100%'},
      inputValue,
      testID = 'search-dropdown',
      dropUp = false,
      options,
      onKeyUp,
      onSelect,
      tabIndex,
      wrapText = false,
      onKeyDown,
      maxLength,
      autoFocus,
      className,
      menuTheme = DropdownMenuTheme.Onyx,
      inputIcon,
      inputSize = ComponentSize.Small,
      onKeyPress,
      spellCheck,
      placeholder,
      inputStatus = ComponentStatus.Default,
      noMatchesText = searchDropdownNoMatches,
      onInputChange,
      menuMaxHeight,
      filterFunction = searchDropdownFilter,
      selectedOption,
    },
    ref
  ) => {
    const inputRef = useRef<InputRef>(null)
    const [menuState, setMenuState] = useState<boolean>(false)
    const [scrollTop, setScrollTop] = useState<number>(0)
    const [highlighted, setHighlight] = useState<string>(selectedOption)
    const filteredOptions = filterFunction(inputValue, options)

    const handleInputChange = (e: ChangeEvent<InputRef>): void => {
      onInputChange(e.target.value)
    }

    const handleInputFocus = (): void => {
      const highlightedOption =
        options.find(o => o === highlighted) || options[0]

      setHighlight(highlightedOption)
      onInputChange('')
      setMenuState(true)
    }

    const handleInputKeyDown = (e: KeyboardEvent<InputRef>): void => {
      onKeyDown && onKeyDown(e)

      if (e.key === 'ArrowUp') {
        const previousOption = getPreviousOption(filteredOptions, highlighted)
        const previousScrollPosition = getScrollPositionByID(
          `${testID}-${previousOption}`
        )
        previousScrollPosition && setScrollTop(previousScrollPosition)
        setHighlight(previousOption)
      }

      if (e.key === 'ArrowDown') {
        const nextOption = getNextOption(filteredOptions, highlighted)
        const nextScrollPosition = getScrollPositionByID(
          `${testID}-${nextOption}`
        )
        nextScrollPosition && setScrollTop(nextScrollPosition)
        setHighlight(nextOption)
      }

      if (e.key === 'Escape') {
        handleMenuCollapse()
        blurInput()
      }

      if (e.key === 'Enter') {
        setMenuState(false)
        onSelect(highlighted)
        onInputChange(highlighted)
        blurInput()
      }
    }

    const handleMenuCollapse = (): void => {
      setMenuState(false)
      onInputChange(selectedOption)
      setHighlight(selectedOption)
    }

    const handleMenuItemClick = (value: string): void => {
      setMenuState(false)
      setHighlight(value)
      onSelect(value)
      onInputChange(value)
    }

    const handleMenuItemMouseEnter = (
      e: MouseEvent<DropdownItemRef>,
      value: string
    ): void => {
      e.preventDefault()
      setHighlight(value)
    }

    const blurInput = (): void => {
      inputRef.current && inputRef.current.blur()
    }

    const input = () => (
      <Input
        ref={inputRef}
        size={inputSize}
        icon={inputIcon}
        value={inputValue}
        status={inputStatus}
        onKeyUp={onKeyUp}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        tabIndex={tabIndex}
        onKeyDown={handleInputKeyDown}
        autoFocus={autoFocus}
        maxLength={maxLength}
        className="search-dropdown--input"
        onKeyPress={onKeyPress}
        spellCheck={spellCheck}
        placeholder={placeholder}
      />
    )

    if (!filteredOptions.includes(highlighted)) {
      filteredOptions.length && setHighlight(filteredOptions[0])
    }

    let menuItems: JSX.Element | JSX.Element[]

    if (!filteredOptions.length) {
      menuItems = (
        <Dropdown.ItemEmpty>{noMatchesText(inputValue)}</Dropdown.ItemEmpty>
      )
    } else {
      menuItems = filteredOptions.map(o => (
        <Dropdown.Item
          id={`${testID}-${o}`}
          selected={o === highlighted}
          key={o}
          type={DropdownItemType.None}
          value={o}
          title={o}
          onClick={handleMenuItemClick}
          onMouseEnter={handleMenuItemMouseEnter}
          wrapText={wrapText}
        >
          {o}
        </Dropdown.Item>
      ))
    }

    const menu = () => (
      <Dropdown.Menu
        theme={menuTheme}
        maxHeight={menuMaxHeight}
        scrollToSelected={false}
        scrollTop={scrollTop}
      >
        {menuItems}
      </Dropdown.Menu>
    )

    return (
      <Dropdown.Dropdown
        id={id}
        ref={ref}
        style={style}
        testID={testID}
        dropUp={dropUp}
        className={className}
        input={input}
        menu={menu}
        onClickOutside={handleMenuCollapse}
        expanded={menuState}
      />
    )
  }
)

SearchDropdown.displayName = 'SearchDropdown'
