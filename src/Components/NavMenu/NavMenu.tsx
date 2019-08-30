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

export class NavMenu extends PureComponent<Props> {
  public static readonly displayName = 'NavMenu'

  public static defaultProps = {
    testID: 'nav-menu',
  }

  public static Item = NavMenuItem
  public static SubItem = NavMenuSubItem

  constructor(props: Props) {
    super(props)
  }

  public render() {
    const {children, testID, id, style} = this.props

    const className = classnames('cf-nav', {
      [`${this.props.className}`]: this.props.className,
    })

    return (
      <nav className={className} data-testid={testID} id={id} style={style}>
        {children}
      </nav>
    )
  }
}
