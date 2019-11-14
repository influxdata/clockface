// Libraries
import {FunctionComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface PopNavItemProps extends StandardFunctionProps {
  /** Controls highlighting of the menu item */
  active: boolean
  /** Render prop for linked title text (suggested <a /> or <Link /> ) */
  titleLink: (
    className: string,
    testID?: string,
    style?: CSSProperties
  ) => JSX.Element
}

export const PopNavItem: FunctionComponent<PopNavItemProps> = ({
  style,
  active,
  className,
  titleLink,
  testID = 'pop-nav--item',
}) => {
  const titleClass = classnames('cf-pop-nav--item', {
    active,
    [`${className}`]: className,
  })

  return titleLink(titleClass, testID, style)
}

PopNavItem.displayName = 'PopNavItem'
