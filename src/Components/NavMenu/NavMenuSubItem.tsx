// Libraries
import {PureComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Controls highlighting of the menu item */
  active: boolean
  /** Render prop for linked title text (suggested <a /> or <Link /> ) */
  titleLink: (className: string, testID?: string) => JSX.Element
}

type Props = ComponentProps & StandardProps

export class NavMenuSubItem extends PureComponent<Props> {
  public static defaultProps = {
    testID: 'nav-menu--link-item',
  }

  public render() {
    const {active, className, titleLink, testID} = this.props

    const titleClass = classnames('nav--sub-item', {
      active,
      [`${className}`]: className,
    })

    return titleLink(titleClass, testID)
  }
}
