// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Render prop for linked title text (suggested <a /> or <Link /> ) */
  titleLink: (className: string) => JSX.Element
  /** Render prop for linked icon component (suggested <a /> or <Link /> ) */
  iconLink: (className: string) => JSX.Element
  /** Controls highlighting of the menu item */
  active: boolean
}

export class NavMenuItem extends PureComponent<Props> {
  public static readonly displayName = 'NavMenuItem'

  public static defaultProps = {
    testID: 'nav-menu--item',
  }

  public render() {
    const {
      children,
      active,
      testID,
      className,
      titleLink,
      iconLink,
      id,
    } = this.props

    return (
      <div
        className={classnames('cf-nav--item', {
          active,
          [`${className}`]: className,
        })}
        data-testid={testID}
        id={id}
      >
        {iconLink('cf-nav--item-icon')}
        <div className="cf-nav--item-menu">
          {titleLink('cf-nav--item-header')}
          {children}
        </div>
      </div>
    )
  }
}
