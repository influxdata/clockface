// Libraries
import {FunctionComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface NavMenuSubItemProps extends StandardFunctionProps {
  /** Controls highlighting of the menu item */
  active: boolean
  /** Render prop for linked title text (suggested <a /> or <Link /> ) */
  titleLink: (
    className: string,
    testID?: string,
    style?: CSSProperties
  ) => JSX.Element
}

export const NavMenuSubItem: FunctionComponent<NavMenuSubItemProps> = ({
  style,
  active,
  className,
  titleLink,
  testID = 'nav-menu--link-item',
}) => {
  const titleClass = classnames('cf-nav--sub-item', {
    active,
    [`${className}`]: className,
  })

  return titleLink(titleClass, testID, style)
}

NavMenuSubItem.displayName = 'NavMenuSubItem'
