// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

interface Props {
  /** Render prop for linked title text (suggested <a /> or <Link /> ) */
  titleLink: (className: string) => JSX.Element
  /** Render prop for linked icon component (suggested <a /> or <Link /> ) */
  iconLink: (className: string) => JSX.Element
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
      children,
      active,
      testID,
      className,
      titleLink,
      iconLink,
    } = this.props

    return (
      <div
        className={classnames('nav--item', {
          active,
          [`${className}`]: className,
        })}
        data-testid={testID}
      >
        {iconLink('nav--item-icon')}
        <div className="nav--item-menu">
          {titleLink('nav--item-header')}
          {children}
        </div>
      </div>
    )
  }
}
