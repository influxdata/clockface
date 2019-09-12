// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Render prop for linked title text */
  titleLink: (className: string) => JSX.Element
  /** Render prop for linked icon component */
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
      style,
    } = this.props

    return (
      <div
        className={classnames('cf-nav--item', {
          active,
          [`${className}`]: className,
        })}
        data-testid={testID}
        id={id}
        style={style}
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
