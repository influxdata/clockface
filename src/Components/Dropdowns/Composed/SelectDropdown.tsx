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
  StandardProps,
} from '../../../Types'

interface Props extends StandardProps {
  /** Text to render in button as currently selected option */
  selectedOption: string
  /** List of options to render in menu */
  options: string[]
  /** Fires when an option is clicked, used to update state */
  onSelect: (option: string) => void
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

export class SelectDropdown extends Component<Props> {
  public static readonly displayName = 'SelectDropdown'

  public static defaultProps = {
    buttonStatus: ComponentStatus.Default,
    buttonColor: ComponentColor.Default,
    buttonSize: ComponentSize.Small,
    menuTheme: DropdownMenuTheme.Sapphire,
    testID: 'select-dropdown',
  }

  public render() {
    const {
      id,
      testID,
      menuTheme,
      className,
      buttonSize,
      buttonIcon,
      widthPixels,
      buttonColor,
      buttonStatus,
      menuMaxHeight,
      selectedOption,
    } = this.props

    return (
      <Dropdown
        id={id}
        testID={testID}
        widthPixels={widthPixels}
        className={className}
        button={(active, onClick) => (
          <DropdownButton
            active={active}
            onClick={onClick}
            status={buttonStatus}
            color={buttonColor}
            size={buttonSize}
            icon={buttonIcon}
          >
            {selectedOption}
          </DropdownButton>
        )}
        menu={onCollapse => (
          <DropdownMenu
            theme={menuTheme}
            maxHeight={menuMaxHeight}
            onCollapse={onCollapse}
          >
            {this.menuOptions}
          </DropdownMenu>
        )}
      />
    )
  }

  private get menuOptions(): JSX.Element[] {
    const {options, selectedOption, onSelect} = this.props

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
          type={DropdownItemType.Dot}
          value={o}
          selected={o === selectedOption}
          onClick={onSelect}
        >
          {o}
        </DropdownItem>
      )
    })
  }
}
