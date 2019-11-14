// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './AppWrapper.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export type AppWrapperType = 'standard' | 'funnel'

export interface AppWrapperProps extends StandardFunctionProps {
  /** Hides the page header and nav menu so that the contents can take up the whole screen */
  presentationMode?: boolean
  /** Controls responsive layout (can be either "page" for "funnel") */
  type?: AppWrapperType
}

export type AppWrapperRef = HTMLDivElement

export const AppWrapper = forwardRef<AppWrapperRef, AppWrapperProps>(
  (
    {
      id = 'cf-app-wrapper',
      type = 'standard',
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
      [`clockface--app-wrapper__${type}`]: type,
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
