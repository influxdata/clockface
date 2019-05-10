// Libraries
import React, {Component, MouseEvent} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DropdownDivider} from './DropdownDivider'
import {DropdownItem} from './DropdownItem'
import {DropdownButton} from './DropdownButton'
import {WaitingText} from '../WaitingText/WaitingText'
import {ClickOutside} from '../ClickOutside/ClickOutside'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Types
import {
  IconFont,
  DropdownMode,
  ComponentSize,
  ComponentColor,
  ComponentStatus,
  DropdownMenuTheme,
} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

// Styles
import './Dropdown.scss'

interface Props {
  /** When a dropdown item is clicked, its `value` prop is returned via `onChange` */
  onChange?: (value: any) => void
  /** If the dropdown's mode is `Radio` then `selectedID` is required to track the currently selected item */
  selectedID?: string
  /** Width of the dropdown in pixels */
  widthPixels?: number
  /** Width of the expanded dropdown in pixels */
  menuWidthPixels?: number
  /** Element to be displayed above the menu items */
  menuHeader?: JSX.Element
  /** Render an icon on the left side of the toggle button */
  icon?: IconFont
  /** Class name for custom styles */
  className?: string
  /** Changes the coloration of the dropdown toggle button */
  buttonColor: ComponentColor
  /** Changes the size of the dropdown toggle button */
  buttonSize: ComponentSize
  /** Used to change the state of the component. Currently only accepts `Default` and `Disabled` */
  status: ComponentStatus
  /** Pixel height after which the dropdown menu will scroll */
  maxMenuHeight: number
  /** Changes the coloration of the dropdown menu independent of the toggle button */
  menuColor: DropdownMenuTheme
  /** Changes the modality of the dropdown. `Radio` requires a `selectedID` also be specified */
  mode: DropdownMode
  /** If the dropdown's mode is `ActionList` then `titleText` is used as the label in the dropdown toggle */
  titleText: string
  /** If `true` the contents of each dropdown item will not exceed the width of the dropdown toggle button (aka `widthPixels`) */
  wrapMenuText: boolean
  /** Test ID for Integration Tests */
  testID: string
  /** Test ID for Integration Tests */
  buttonTestID: string
}

interface State {
  expanded: boolean
}

export class Dropdown extends Component<Props, State> {
  public static defaultProps = {
    buttonColor: ComponentColor.Default,
    buttonSize: ComponentSize.Small,
    status: ComponentStatus.Default,
    maxMenuHeight: 250,
    menuColor: DropdownMenuTheme.Sapphire,
    mode: DropdownMode.Radio,
    titleText: '',
    wrapMenuText: false,
    testID: 'dropdown',
    buttonTestID: 'dropdown-button',
  }

  public static Button = DropdownButton
  public static Item = DropdownItem
  public static Divider = DropdownDivider

  constructor(props: Props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  public render() {
    const {widthPixels} = this.props
    const width = widthPixels ? `${widthPixels}px` : '100%'

    return (
      <ClickOutside onClickOutside={this.collapseMenu}>
        <div className={this.containerClassName} style={{width}}>
          {this.button}
          {this.menuItems}
        </div>
      </ClickOutside>
    )
  }

  private toggleMenu = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    this.setState({expanded: !this.state.expanded})
  }

  private collapseMenu = (): void => {
    this.setState({expanded: false})
  }

  private get containerClassName(): string {
    const {
      buttonColor,
      buttonSize,
      status,
      className,
      mode,
      wrapMenuText,
    } = this.props

    return classnames(
      `dropdown dropdown-${buttonSize} dropdown-${buttonColor}`,
      {
        disabled: status === ComponentStatus.Disabled,
        'dropdown-wrap': wrapMenuText,
        'dropdown-truncate': !wrapMenuText,
        className: className,
        [`dropdown--${mode}`]: mode,
      }
    )
  }

  private get button(): JSX.Element {
    const {
      selectedID,
      status,
      buttonColor,
      buttonSize,
      icon,
      mode,
      titleText,
      buttonTestID,
    } = this.props

    const {expanded} = this.state
    const {children} = this.props

    const selectedChild = React.Children.toArray(children).find(
      child => _.get(child, 'props.id', null) === selectedID
    )
    const isLoading = status === ComponentStatus.Loading

    let resolvedStatus = status
    let dropdownLabel

    if (isLoading) {
      dropdownLabel = <WaitingText text="Loading" />
    } else if (selectedChild) {
      dropdownLabel = _.get(selectedChild, 'props.children', null)
    } else if (mode === DropdownMode.ActionList) {
      dropdownLabel = titleText
    } else {
      dropdownLabel = titleText
      resolvedStatus = ComponentStatus.Disabled
    }

    return (
      <DropdownButton
        active={expanded}
        color={buttonColor}
        size={buttonSize}
        icon={icon}
        onClick={this.toggleMenu}
        status={resolvedStatus}
        title={titleText}
        testID={buttonTestID}
      >
        {dropdownLabel}
      </DropdownButton>
    )
  }

  private get menuItems(): JSX.Element | undefined {
    const {
      selectedID,
      maxMenuHeight,
      widthPixels,
      menuWidthPixels,
      menuHeader,
      menuColor,
      children,
      testID,
    } = this.props

    const {expanded} = this.state

    if (!expanded) {
      return
    }

    let width = '100%'

    if (widthPixels) {
      width = `${widthPixels}px`
    }

    if (menuWidthPixels) {
      width = `${menuWidthPixels}px`
    }

    const scrollColors = getColorsFromGradient(menuColor)

    return (
      <div
        className={`dropdown--menu-container dropdown--${menuColor.toLowerCase()}`}
        style={{width}}
      >
        <DapperScrollbars
          style={{
            maxWidth: '100%',
            maxHeight: `${maxMenuHeight}px`,
          }}
          autoSize={true}
          autoHide={false}
          thumbStartColor={scrollColors && scrollColors.start}
          thumbStopColor={scrollColors && scrollColors.stop}
        >
          <div
            className="dropdown--menu"
            data-testid={`dropdown--menu ${testID}`}
          >
            {menuHeader && menuHeader}
            {React.Children.map(children, (child: JSX.Element) => {
              if (child.type === DropdownItem) {
                return (
                  <DropdownItem
                    {...child.props}
                    key={child.props.id}
                    selected={child.props.id === selectedID}
                    onClick={this.handleItemClick}
                  >
                    {child.props.children}
                  </DropdownItem>
                )
              } else if (child.type === DropdownDivider) {
                return <DropdownDivider {...child.props} key={child.props.id} />
              } else {
                throw new Error(
                  'Expected children of type <Dropdown.Item /> or <Dropdown.Divider />'
                )
              }
            })}
          </div>
        </DapperScrollbars>
      </div>
    )
  }

  private handleItemClick = (value: any): void => {
    const {onChange} = this.props
    if (onChange) {
      onChange(value)
    }
    this.collapseMenu()
  }
}
