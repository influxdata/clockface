// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

// Styles
import './AppHeader.scss'

export interface AppHeaderProps extends StandardFunctionProps {
  /** Height of header bar */
  size?: ComponentSize
}

export type AppHeaderRef = HTMLDivElement

export const AppHeaderRoot = forwardRef<AppHeaderRef, AppHeaderProps>(
  (
    {
      id,
      style,
      children,
      className,
      testID = 'app-header',
      size = ComponentSize.Small,
    },
    ref
  ) => {
    const appHeaderClass = classnames('cf-app-header', {
      [`cf-app-header__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={appHeaderClass}
      >
        {children}
      </div>
    )
  }
)

AppHeaderRoot.displayName = 'AppHeader'
