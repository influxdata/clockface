// Libraries
import React, {Component, MouseEvent} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {DropdownButton} from './../Family/DropdownButton'
import {DropdownItem} from './../Family/DropdownItem'
import {DropdownItemEmpty} from './../Family/DropdownItemEmpty'
import {DropdownLinkItem} from './../Family/DropdownLinkItem'
import {DropdownDivider} from './../Family/DropdownDivider'
import {DropdownMenu} from './../Family/DropdownMenu'
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Types
import {StandardProps} from '../../../Types'

// Styles
import '../Dropdown.scss'

interface Props extends StandardProps {
  /** Component to render as the button (use Dropdown.Button) */
  button: (
    active: boolean,
    onClick: (e: MouseEvent<HTMLElement>) => void
  ) => JSX.Element
  /** Component to render as the menu (use Dropdown.Menu) */
  menu: (onCollapse?: () => void) => JSX.Element
  /** Width of the dropdown in pixels, if blank the dropdown will expand to fill its parent's width */
  widthPixels?: number
  /** Renders the menu element above the button instead of below */
  dropUp?: boolean
}

interface State {
  expanded: boolean
}

export class Dropdown extends Component<Props, State> {
  public static readonly displayName = 'Dropdown'

  public static defaultProps = {
    testID: 'dropdown',
    dropUp: false,
  }

  public static Button = DropdownButton
  public static Item = DropdownItem
  public static ItemEmpty = DropdownItemEmpty
  public static LinkItem = DropdownLinkItem
  public static Divider = DropdownDivider
  public static Menu = DropdownMenu

  constructor(props: Props) {
    super(props)

    this.state = {
      expanded: false,
    }
  }

  public render() {
    const {widthPixels, button, testID, id, style} = this.props
    const {expanded} = this.state
    const width = widthPixels ? `${widthPixels}px` : '100%'

    return (
      <ClickOutside onClickOutside={this.collapseMenu}>
        <div
          className={this.className}
          style={{width, ...style}}
          data-testid={testID}
          id={id}
        >
          {button(expanded, this.toggleMenu)}
          <div className="cf-dropdown--menu-container">{this.menu}</div>
        </div>
      </ClickOutside>
    )
  }

  private get menu(): JSX.Element | undefined {
    const {menu} = this.props
    const {expanded} = this.state

    if (expanded) {
      return menu(this.collapseMenu)
    }

    return
  }

  private toggleMenu = (e: MouseEvent<HTMLElement>): void => {
    e.preventDefault()
    this.setState({expanded: !this.state.expanded})
  }

  private collapseMenu = (): void => {
    this.setState({expanded: false})
  }

  private get className(): string {
    const {className, dropUp} = this.props

    return classnames('cf-dropdown', {
      [`${className}`]: className,
      'cf-dropdown__up': dropUp,
      'cf-dropdown__down': !dropUp,
    })
  }
}
