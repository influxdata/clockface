// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {IconFont} from '../../Types'

// Components
import {Icon} from '../Icon/Icon'

interface Props {
  /** Title of tab, visible on hover */
  title: string
  /** Icon to display on tab */
  icon: IconFont
  /** Pass in an <a /> or <Link /> element */
  linkElement: JSX.Element
  /** Controls highlighting of the menu item */
  active: boolean
  /** Class name for custom styles */
  className?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class NavMenuItem extends PureComponent<Props> {
  public static defaultProps = {
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
