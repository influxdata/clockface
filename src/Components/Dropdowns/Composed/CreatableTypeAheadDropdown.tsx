// Libraries
import React, {
  ChangeEvent,
  forwardRef,
  MouseEvent,
  useState,
  useEffect,
} from 'react'

// Components
import {Dropdown, DropdownRef} from '../'
import {DropdownHeader} from '../DropdownHeader'
import {Input} from '../../Inputs/Input'

// Types
import {
  ComponentSize,
  ComponentStatus,
  DropdownMenuTheme,
  IconFont,
  StandardFunctionProps,
} from '../../../Types'
import {MenuStatus} from '../Dropdown'

export interface CreatableTypeAheadDropdownProps extends StandardFunctionProps {
  /** Text to render in input field as currently selected or typed option */
  selectedOption: string
  /** List of options to render in dropdown menu */
  options: string[]
  onSelect: (option: string) => void
  placeholder?: string
  inputStatus?: ComponentStatus
  inputSize?: ComponentSize
  /** Optional icon to be displayed to the left of text in input  */
  inputIcon?: IconFont
  /** Optional color preview to be displayed to the left of text.
   * The color is determined by the selected or typed option in #000000 format.
   * If both icon and this props are set, icon will take priority */
  inputColorPreviewOn?: boolean
  menuTheme?: DropdownMenuTheme
  menuMaxHeight?: number
  /** Customize the layout of dropdown items */
  customizedDropdownItem?: (displayText: string) => JSX.Element
}

export type CreatableTypeAheadDropdownReadmeRef = DropdownRef

export const CreatableTypeAheadDropdown = forwardRef<
  CreatableTypeAheadDropdownReadmeRef,
  CreatableTypeAheadDropdownProps
>(
  (
    {
      id,
      style = {width: '100%'},
      testID = 'creatable-type-ahead-dropdown',
      className,
      selectedOption,
      options,
      onSelect,
      inputStatus = ComponentStatus.Default,
      inputSize = ComponentSize.Small,
      inputIcon,
      inputColorPreviewOn = false,
      placeholder = 'Select...',
      menuTheme = DropdownMenuTheme.Onyx,
      menuMaxHeight,
      customizedDropdownItem,
    },
    ref
  ) => {
    const [typedValue, setTypedValue] = useState<string>(selectedOption)
    const [shownOptions, setShownOptions] = useState<string[]>(options)
    const [menuOpen, setMenuOpen] = useState<MenuStatus>(MenuStatus.Closed)

    useEffect(() => {
      setShownOptions(options)
    }, [options])

    /**
     *  Filter the options array based on the styped string
     */
    const doFilter = (typedString: string) => {
      // If the typed string is empty, then there is nothing to filter;
      // so return everything and keep the menu open
      if (!typedString) {
        setShownOptions(options)
        setMenuOpen(MenuStatus.Open)
        return
      }

      const result = options?.filter(option => {
        return option
          .toLocaleLowerCase()
          .includes(typedString.toLocaleLowerCase())
      })
      setShownOptions(result)
      if (result.length > 0) {
        setMenuOpen(MenuStatus.Open)
      } else {
        setMenuOpen(MenuStatus.Closed)
      }
    }

    /**
     * Handle when there is a change in typed string
     */
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event?.target?.value
      setTypedValue(value)
      doFilter(value)
    }

    /**
     * Handle when a 'X' is clicked
     */
    const handleClear = () => {
      setTypedValue('')
      onSelect('')
      setShownOptions(options)
      setMenuOpen(MenuStatus.Open)
    }

    const handleFocus = (event?: ChangeEvent<HTMLInputElement>) => {
      if (event) {
        // Select the string in the input field
        event.target.select()
      }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSelect(typedValue)
        setMenuOpen(MenuStatus.Closed)
      }
    }

    const inputComponent = (
      <Input
        placeholder={placeholder}
        onChange={handleChange}
        value={typedValue}
        onClear={handleClear}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
        status={inputStatus}
        size={inputSize}
        icon={inputIcon}
        colorPreview={
          inputColorPreviewOn
            ? typedValue === ''
              ? 'transparent'
              : typedValue
            : ''
        }
        testID={`${testID}--input`}
      />
    )

    const button = (
      active: boolean,
      onClick: (e: MouseEvent<HTMLElement>) => void
    ) => (
      <DropdownHeader
        active={active}
        onClick={onClick}
        testID={`${testID}--dropdown-header`}
        size={inputSize}
      >
        {inputComponent}
      </DropdownHeader>
    )

    const handleSelect = (option: string) => {
      setTypedValue(option)
      onSelect(option)
    }

    const menu = (onCollapse: () => void) => (
      <Dropdown.Menu
        onCollapse={onCollapse}
        theme={menuTheme}
        maxHeight={menuMaxHeight}
        testID={`${testID}--menu`}
      >
        {shownOptions.map(option => (
          <Dropdown.Item
            key={option}
            value={option}
            title={option}
            selected={option === typedValue}
            onClick={handleSelect}
            testID={`${testID}--item-${option}`}
          >
            {!!customizedDropdownItem ? customizedDropdownItem(option) : option}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    )

    return (
      <Dropdown.Dropdown
        id={id}
        ref={ref}
        style={style}
        testID={testID}
        className={className}
        menuOpen={menuOpen}
        disableAutoFocus={true}
        button={button}
        menu={menu}
      />
    )
  }
)
CreatableTypeAheadDropdown.displayName = 'CreatableTypeAheadDropdown'
