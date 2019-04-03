// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {IconFont} from '../../Types'

// Components
import {Icon} from '../Icon/Icon'

interface PassedProps {
  title: string
  icon: IconFont
  linkElement: JSX.Element
  active: boolean
  className?: string
}

interface DefaultProps {
  testID: string
}

type Props = PassedProps & Partial<DefaultProps>

export class NavMenuItem extends PureComponent<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'nav-menu--item',
  }

  public render() {
    const {
      title,
      icon,
      children,
      active,
      testID,
      className,
      linkElement,
    } = this.props

    const iconLink = React.cloneElement(linkElement, {
      className: 'nav--item-icon',
      children: <Icon glyph={icon} className="sidebar--icon" />,
    })
    const headerLink = React.cloneElement(linkElement, {
      className: 'nav--item-header',
      children: title,
    })

    return (
      <div
        className={classnames('nav--item', {
          active,
          [`${className}`]: className,
        })}
        data-testid={testID}
      >
        {iconLink}
        <div className="nav--item-menu">
          {headerLink}
          {children}
        </div>
      </div>
    )
  }
}
