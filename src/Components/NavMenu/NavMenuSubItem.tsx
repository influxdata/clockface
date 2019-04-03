// Libraries
import {PureComponent} from 'react'
import classnames from 'classnames'

interface Props {
  /** Controls highlighting of the menu item */
  active: boolean
  /** Render prop for linked title text (suggested <a /> or <Link /> ) */
  titleLink: (className: string) => JSX.Element
  /** Class name for custom styles */
  className?: string
}

export class NavMenuSubItem extends PureComponent<Props> {
  public render() {
    const {active, className, titleLink} = this.props

    const titleClass = classnames('nav--sub-item', {
      active,
      [`${className}`]: className,
    })

    return titleLink(titleClass)
  }
}
