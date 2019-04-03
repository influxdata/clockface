// Libraries
import React, {PureComponent} from 'react'
import _ from 'lodash'

// Components
import {NavMenuItem} from './NavMenuItem'
import {NavMenuSubItem} from './NavMenuSubItem'

// Styles
import './NavMenu.scss'

interface PassedProps {
  className?: string
}

interface DefaultProps {
  testID: string
}

type Props = PassedProps & Partial<DefaultProps>

export class NavMenu extends PureComponent<Props> {
  public static defaultProps = {
    testID: 'nav-menu',
  }

  public static Item = NavMenuItem
  public static SubItem = NavMenuSubItem

  constructor(props: Props) {
    super(props)
  }

  public render() {
    const {children, testID} = this.props

    const className = this.props.className
      ? `nav ${this.props.className}`
      : 'nav'

    return (
      <nav className={className} data-testid={testID}>
        {children}
      </nav>
    )
  }
}
