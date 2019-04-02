// Libraries
import React, {Component, CSSProperties, Fragment} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DropdownDivider} from './DropdownDivider'
import {DropdownItem} from './DropdownItem'
import {DropdownButton} from './DropdownButton'
import {ClickOutside} from '../../Utilities/ClickOutside/ClickOutside'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Types
import {
  DropdownMenuColors,
  ComponentStatus,
  ComponentColor,
  ComponentSize,
  IconFont,
} from '../../Types'

interface Props {
  children: JSX.Element[]
  onChange: (selectedIDs: string[], value: any) => void
  selectedIDs: string[]
  buttonColor: ComponentColor
  buttonSize: ComponentSize
  menuColor: DropdownMenuColors
  wrapText: boolean
  maxMenuHeight: number
  emptyText: string
  separatorText: string
  customClass?: string
  onCollapse?: () => void
  status?: ComponentStatus
  widthPixels?: number
  icon?: IconFont
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
    menuColor: DropdownMenuColors.Sapphire,
    emptyText: 'Choose an item',
    separatorText: ', ',
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
    return (
      <ClickOutside onClickOutside={this.collapseMenu}>
        <div className={this.containerClassName} style={this.containerStyle}>
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
    const {buttonColor, buttonSize, status, wrapText, customClass} = this.props

    return classnames(
      `dropdown dropdown-${buttonSize} dropdown-${buttonColor}`,
      {
        disabled: status === ComponentStatus.Disabled,
        'dropdown-wrap': wrapText,
        customClass: customClass,
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
    const children: JSX.Element[] = this.props.children

    const selectedChildren = children.filter(child =>
      _.includes(selectedIDs, child.props.id)
    )

    let label: string | Array<string | JSX.Element>

    if (selectedChildren.length) {
      label = selectedChildren.map((sc, i) => {
        if (i < selectedChildren.length - 1) {
          return (
            <Fragment key={sc.props.id}>
              {sc.props.children}
              {separatorText}
            </Fragment>
          )
        }

        return sc.props.children
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

    if (expanded) {
      return (
        <div
          className={`dropdown--menu-container dropdown--${menuColor}`}
          style={this.menuStyle}
        >
          <DapperScrollbars
            style={{
              maxWidth: '100%',
              maxHeight: `${maxMenuHeight}px`,
            }}
            autoHide={false}
            autoSize={true}
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
