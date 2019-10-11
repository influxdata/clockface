// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './AppWrapper.scss'

// Types
import {StandardFunctionProps} from '../../Types'

interface AppWrapperProps extends StandardFunctionProps {
  /** Hides the page header and nav menu so that the contents can take up the whole screen */
  presentationMode?: boolean
}

export type AppWrapperRef = HTMLDivElement

export const AppWrapper = forwardRef<AppWrapperRef, AppWrapperProps>(
  (
    {
      id = 'cf-app-wrapper',
      style,
      testID = 'app-wrapper',
      children,
      className,
      presentationMode = false,
    },
    ref
  ) => {
    const appWrapperClass = classnames('clockface--app-wrapper', {
      'clockface--app-wrapper__presentation-mode': presentationMode,
      [`${className}`]: className,
    })

    return (
      <div
        className={appWrapperClass}
        data-testid={testID}
        id={id}
        style={style}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

AppWrapper.displayName = 'AppWrapper'
