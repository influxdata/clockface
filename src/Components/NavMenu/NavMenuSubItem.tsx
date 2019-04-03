// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

interface Props {
  /** Title of sub menu item */
  title: string
  /** Controls highlighting of the menu item */
  active: boolean
  /** Pass in an <a /> or <Link /> element */
  linkElement: JSX.Element
  /** Class name for custom styles */
  className?: string
}

export class NavMenuSubItem extends PureComponent<Props> {
  public render() {
    const {active, className, linkElement, title} = this.props

    return React.cloneElement(linkElement, {
      className: classnames('nav--sub-item', {
        active,
        [`${className}`]: className,
      }),
      children: title,
    })
  }
}
