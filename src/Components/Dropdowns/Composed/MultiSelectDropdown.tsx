// Libraries
import React, {Component} from 'react'

// Components
import {Dropdown} from '../Family/Dropdown'
import {DropdownButton} from '../Family/DropdownButton'
import {DropdownMenu} from '../Family/DropdownMenu'
import {DropdownItem} from '../Family/DropdownItem'
import {DropdownDivider} from '../Family/DropdownDivider'

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
} from '../../../Types'

interface Props {
  /** Text to render in button as currently selected option */
  selectedOptions: string[]
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
  /** Text to display when no options are selected */
  emptyText: string
  /** Pixel width of Dropdown */
  widthPixels?: number
  /** Optional status of button */
  buttonStatus: ComponentStatus
  /** Optional color of button */
  buttonColor: ComponentColor
  /** Optional size of button */
  buttonSize: ComponentSize
  /** Optional icon to render in button */
  buttonIcon?: IconFont
  /** Optional theme of menu */
  menuTheme: DropdownMenuTheme
  /** Optional maximum pixel height menu */
  menuMaxHeight?: number
}

export class MultiSelectDropdown extends Component<Props> {
  public static defaultProps = {
    emptyText: 'None selected',
    buttonStatus: ComponentStatus.Default,
    buttonColor: ComponentColor.Default,
    buttonSize: ComponentSize.Small,
    menuTheme: DropdownMenuTheme.Sapphire,
  }

  public render() {
    const {
      widthPixels,
      buttonStatus,
      buttonColor,
      buttonSize,
      buttonIcon,
      menuTheme,
      menuMaxHeight,
    } = this.props

    return (
      <Dropdown
        widthPixels={widthPixels}
        button={(active, onClick) => (
          <DropdownButton
            active={active}
            onClick={onClick}
            status={buttonStatus}
            color={buttonColor}
            size={buttonSize}
            icon={buttonIcon}
          >
            {this.buttonText}
          </DropdownButton>
        )}
        menu={
          <DropdownMenu theme={menuTheme} maxHeight={menuMaxHeight}>
            {this.menuOptions}
          </DropdownMenu>
        }
      />
    )
  }

  private get buttonText(): string {
    const {selectedOptions, emptyText} = this.props

    if (selectedOptions.length) {
      return selectedOptions.join(', ')
    }

    return emptyText
  }

  private get menuOptions(): JSX.Element[] {
    const {options, selectedOptions, onSelect} = this.props

    return options.map(o => {
      if (o === DROPDOWN_DIVIDER_SHORTCODE) {
        return <DropdownDivider key="o" />
      }

      if (o.includes(DROPDOWN_DIVIDER_SHORTCODE)) {
        const dividerText = o.replace(DROPDOWN_DIVIDER_SHORTCODE, '')
        return <DropdownDivider key="o" text={dividerText} />
      }

      return (
        <DropdownItem
          key={o}
          type={DropdownItemType.Checkbox}
          value={o}
          selected={selectedOptions.includes(o)}
          onClick={onSelect}
        >
          {o}
        </DropdownItem>
      )
    })
  }
}
