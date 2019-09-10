// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'
import _ from 'lodash'

// Components
import {NavMenuItem} from './NavMenuItem'
import {NavMenuSubItem} from './NavMenuSubItem'

// Types
import {StandardProps} from '../../Types'

// Styles
import './NavMenu.scss'

type Props = StandardProps

interface State {
  menuVisible: boolean
}

export class NavMenu extends PureComponent<Props, State> {
  public static readonly displayName = 'NavMenu'

  public static defaultProps = {
    testID: 'nav-menu',
  }

  public static Item = NavMenuItem
  public static SubItem = NavMenuSubItem

  constructor(props: Props) {
    super(props)

    this.state = {
      menuVisible: false,
    }
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <>
        <div className={this.toggleClassName} onClick={this.handleToggleMenu}>
          <div className="cf-nav--hamburger">
            <div className="cf-nav--hamburger-top" />
            <div className="cf-nav--hamburger-middle" />
            <div className="cf-nav--hamburger-bottom" />
          </div>
        </div>
        <nav
          className={this.className}
          data-testid={testID}
          id={id}
          style={style}
        >
          <div className="cf-nav--menu">{children}</div>
        </nav>
        <div className="cf-nav--mask" />
      </>
    )
  }

  private get className(): string {
    const {className} = this.props
    const {menuVisible} = this.state

    return classnames('cf-nav', {
      'cf-nav__expanded': menuVisible,
      [`${className}`]: className,
    })
  }

  private get toggleClassName(): string {
    const {menuVisible} = this.state

    return classnames('cf-nav--toggle', {
      'cf-nav--toggle__expanded': menuVisible,
    })
  }

  private handleToggleMenu = (): void => {
    this.setState({menuVisible: !this.state.menuVisible})
  }
}
