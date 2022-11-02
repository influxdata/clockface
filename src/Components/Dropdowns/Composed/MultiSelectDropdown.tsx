// Libraries
import React, {MouseEvent, forwardRef, useState} from 'react'

// Components
import {Dropdown, DropdownRef} from '../'

// Constants
import {DROPDOWN_DIVIDER_SHORTCODE} from '../../../Constants'

// Types
import {
  ComponentColor,
  ComponentSize,
  IconFont,
  DropdownMenuTheme,
  DropdownItemType,
  ComponentStatus,
  StandardFunctionProps,
} from '../../../Types'
import {Input} from '../../Inputs'

export interface MultiSelectDropdownProps extends StandardFunctionProps {
  /** Text to render in button as currently selected option */
  selectedOptions: string[]
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
  /** Text to display when no options are selected */
  emptyText?: string
  /** Optional status of button */
  buttonStatus?: ComponentStatus
  /** Optional color of button */
  buttonColor?: ComponentColor
  /** Optional size of button */
  buttonSize?: ComponentSize
  /** Optional icon to render in button */
  buttonIcon?: IconFont
  /** Optional choice of item indicator */
  indicator?: DropdownItemType
  /** Optional theme of menu */
  menuTheme?: DropdownMenuTheme
  /** Optional maximum pixel height menu */
  menuMaxHeight?: number
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
  /** Enables the search bar in the dropdown menu */
  isSearchable?: boolean
  searchbarInputPlaceholder?: string
}

export type MultiSelectDropdownRef = DropdownRef

export const MultiSelectDropdown = forwardRef<
  MultiSelectDropdownRef,
  MultiSelectDropdownProps
>(
  (
    {
      id,
      style = {width: '100%'},
      dropUp = false,
      testID = 'multiselect-dropdown',
      options,
      onSelect,
      emptyText = 'None selected',
      menuTheme = DropdownMenuTheme.Onyx,
      className,
      buttonSize = ComponentSize.Small,
      buttonIcon,
      indicator = DropdownItemType.Checkbox,
      buttonColor = ComponentColor.Default,
      buttonStatus = ComponentStatus.Default,
      menuMaxHeight,
      selectedOptions,
      isSearchable = false,
      searchbarInputPlaceholder = 'Search',
    },
    ref
  ) => {
    const buttonText = selectedOptions.length
      ? selectedOptions.join(', ')
      : emptyText

    const [filterString, setFilterString] = useState('')

    const button = (
      active: boolean,
      onClick: (e: MouseEvent<HTMLElement>) => void
    ) => (
      <Dropdown.Button
        active={active}
        onClick={onClick}
        status={buttonStatus}
        color={buttonColor}
        size={buttonSize}
        icon={buttonIcon}
      >
        {buttonText}
      </Dropdown.Button>
    )

    const NoResults = () => (
      <Dropdown.Item
        key="no-values-in-filter"
        testID="nothing-in-filter-typeAhead"
        disabled={true}
      >
        {filterString.length > 0
          ? `no matches for ${filterString}`
          : 'No results'}
      </Dropdown.Item>
    )

    const handleFiltering = (e: any) => {
      const filterStr = e.currentTarget.value
      setFilterString(filterStr)
    }

    const clearFilter = () => {
      setFilterString('')
    }

    const menu = () => (
      <>
        {isSearchable && (
          <Dropdown.Menu theme={menuTheme} style={{paddingBottom: 0}}>
            <Input
              placeholder={searchbarInputPlaceholder}
              value={filterString}
              onChange={handleFiltering}
              onClear={clearFilter}
            />
          </Dropdown.Menu>
        )}
        <Dropdown.Menu theme={menuTheme} maxHeight={menuMaxHeight}>
          {options.map(o => {
            // case-insensitive search
            if (
              isSearchable &&
              !o.toUpperCase().includes(filterString.toUpperCase())
            ) {
              return
            }

            if (o === DROPDOWN_DIVIDER_SHORTCODE) {
              return <Dropdown.Divider key={o} />
            }

            if (o.includes(DROPDOWN_DIVIDER_SHORTCODE)) {
              const dividerText = o.replace(DROPDOWN_DIVIDER_SHORTCODE, '')
              return <Dropdown.Divider key={o} text={dividerText} />
            }

            return (
              <Dropdown.Item
                key={o}
                type={indicator}
                value={o}
                title={o}
                selected={selectedOptions.includes(o)}
                onClick={onSelect}
              >
                {o}
              </Dropdown.Item>
            )
          })}

          {options.filter(option => option.includes(filterString)).length ===
          0 ? (
            <NoResults />
          ) : null}
        </Dropdown.Menu>
      </>
    )

    return (
      <Dropdown.Dropdown
        id={id}
        ref={ref}
        style={style}
        testID={testID}
        dropUp={dropUp}
        className={className}
        button={button}
        menu={menu}
      />
    )
  }
)

MultiSelectDropdown.displayName = 'MultiSelectDropdown'
