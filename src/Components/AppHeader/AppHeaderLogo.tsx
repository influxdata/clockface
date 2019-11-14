// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

// Styles
import './AppHeaderLogo.scss'

export interface AppHeaderLogoProps extends StandardFunctionProps {
  /** Image source url */
  src?: string
  /** Size of logo */
  size?: ComponentSize
}

export type AppHeaderLogoRef = HTMLDivElement

export const AppHeaderLogo = forwardRef<AppHeaderLogoRef, AppHeaderLogoProps>(
  (
    {
      id,
      src,
      style,
      children,
      className,
      testID = 'app-header-logo',
      size = ComponentSize.Small,
    },
    ref
  ) => {
    const appHeaderLogoClass = classnames('cf-app-header--logo', {
      [`cf-app-header--logo__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={appHeaderLogoClass}
      >
        {src && <img src={src} className="app-header--logo-image" />}
        {children}
      </div>
    )
  }
)

AppHeaderLogo.displayName = 'AppHeaderLogo'
