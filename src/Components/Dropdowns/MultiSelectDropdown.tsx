// Libraries
import React, {Component, CSSProperties, Fragment} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DropdownDivider} from './DropdownDivider'
import {DropdownItem} from './DropdownItem'
import {DropdownButton} from './DropdownButton'
import {ClickOutside} from '../ClickOutside/ClickOutside'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Types
import {
  DropdownMenuTheme,
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  IconFont,
} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

interface Props {
  /** Function to be called on select or deselect of list item */
  onChange: (selectedIDs: string[], value: any) => void
  /** Tracks the currently selected items */
  selectedIDs: string[]
  /** Width of the dropdown in pixels */
  widthPixels?: number
  /** Render an icon on the left side of the toggle button */
  icon?: IconFont
  /** Changes the coloration of the dropdown toggle button */
  buttonColor: ComponentColor
  /** Changes the size of the dropdown toggle button */
  buttonSize: ComponentSize
  /** Changes the coloration of the dropdown menu independent of the toggle button */
  menuColor: DropdownMenuTheme
  /** If `true` the contents of each dropdown item will not exceed the width of the dropdown toggle button (aka `widthPixels`) */
  wrapText: boolean
  /** Pixel height after which the dropdown menu will scroll */
  maxMenuHeight: number
  /** Text to display when no items are selected */
  emptyText: string
  /** Delineator for list of selected items */
  separatorText: string
  /** Class name for custom styles */
  className?: string
  /** Function to be called on collapse of dropdown list */
  onCollapse?: () => void
  /** Used to change the state of the component. Currently only accepts `Default` and `Disabled` */
  status: ComponentStatus
  /** Test ID for Integration Tests */
  testID: string
}

interface State {
  expanded: boolean
}

export class MultiSelectDropdown extends Component<Props, State> {
  public static defaultProps = {
    buttonColor: ComponentColor.Default,
    buttonSize: ComponentSize.Small,
    status: ComponentStatus.Default,
    wrapText: false,
    maxMenuHeight: 250,
    menuColor: DropdownMenuTheme.Sapphire,
    emptyText: 'Choose an item',
    separatorText: ', ',
    testID: 'multi-select-dropdown',
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
    const {testID} = this.props

    return (
      <ClickOutside onClickOutside={this.collapseMenu}>
        <div
          className={this.containerClassName}
          style={this.containerStyle}
          data-testid={testID}
        >
          {this.button}
          {this.menuItems}
        </div>
      </ClickOutside>
    )
  }

  private toggleMenu = (): void => {
    this.setState({expanded: !this.state.expanded})
  }

  private collapseMenu = (): void => {
    const {onCollapse} = this.props

    this.setState({expanded: false})

    if (onCollapse) {
      onCollapse()
    }
  }

  private get containerStyle(): CSSProperties {
    const {widthPixels} = this.props

    if (widthPixels) {
      return {width: `${widthPixels}px`}
    }

    return {width: '100%'}
  }

  private get containerClassName(): string {
    const {buttonColor, buttonSize, status, wrapText, className} = this.props

    return classnames(
      `dropdown dropdown-${buttonSize} dropdown-${buttonColor}`,
      {
        disabled: status === ComponentStatus.Disabled,
        'dropdown-wrap': wrapText,
        className: className,
      }
    )
  }

  private get button(): JSX.Element {
    const {
      selectedIDs,
      status,
      buttonColor,
      buttonSize,
      icon,
      emptyText,
      separatorText,
    } = this.props
    const {expanded} = this.state
    const {children} = this.props

    const selectedChildren = React.Children.toArray(children).filter(child =>
      _.includes(selectedIDs, _.get(child, 'props.id', null))
    )

    let label: string | Array<string | JSX.Element>

    if (selectedChildren.length) {
      label = selectedChildren.map((sc, i) => {
        if (i < selectedChildren.length - 1) {
          return (
            <Fragment key={_.get(sc, 'props.id', null)}>
              {_.get(sc, 'props.children', null)}
              {separatorText}
            </Fragment>
          )
        }

        return _.get(sc, 'props.children', null)
      })
    } else {
      label = emptyText
    }

    return (
      <DropdownButton
        active={expanded}
        color={buttonColor}
        size={buttonSize}
        icon={icon}
        onClick={this.toggleMenu}
        status={status}
      >
        {label}
      </DropdownButton>
    )
  }

  private get menuItems(): JSX.Element | undefined {
    const {selectedIDs, maxMenuHeight, menuColor, children} = this.props
    const {expanded} = this.state

    const scrollColors = getColorsFromGradient(menuColor)

    if (expanded) {
      return (
        <div
          className={`dropdown--menu-container dropdown--${menuColor.toLowerCase()}`}
          style={this.menuStyle}
        >
          <DapperScrollbars
            style={{
              maxWidth: '100%',
              maxHeight: `${maxMenuHeight}px`,
            }}
            autoHide={false}
            autoSize={true}
            thumbStartColor={scrollColors && scrollColors.start}
            thumbStopColor={scrollColors && scrollColors.stop}
          >
            <div className="dropdown--menu" data-testid="dropdown-menu">
              {React.Children.map(children, (child: JSX.Element) => {
                if (this.childTypeIsValid(child)) {
                  if (child.type === DropdownItem) {
                    return (
                      <DropdownItem
                        {...child.props}
                        key={child.props.id}
                        checkbox={true}
                        selected={_.includes(selectedIDs, child.props.id)}
                        onClick={this.handleItemClick}
                      >
                        {child.props.children}
                      </DropdownItem>
                    )
                  }

                  return (
                    <DropdownDivider {...child.props} key={child.props.id} />
                  )
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

    return
  }

  private get menuStyle(): CSSProperties {
    const {wrapText, widthPixels} = this.props

    let containerWidth = '100%'

    if (widthPixels) {
      containerWidth = `${widthPixels}px`
    }

    if (wrapText && widthPixels) {
      return {
        width: containerWidth,
      }
    }

    return {
      minWidth: containerWidth,
    }
  }

  private handleItemClick = (value: any): void => {
    const {onChange, selectedIDs} = this.props
    let updatedSelection

    if (_.includes(selectedIDs, value.id)) {
      updatedSelection = selectedIDs.filter(id => id !== value.id)
    } else {
      updatedSelection = [...selectedIDs, value.id]
    }

    onChange(updatedSelection, value)
  }

  private childTypeIsValid = (child: JSX.Element): boolean =>
    child.type === DropdownItem || child.type === DropdownDivider
}
