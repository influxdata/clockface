// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {RemoteDataState, StandardFunctionProps} from '../../Types'

// Styles
import './SpinnerContainer.scss'

export interface SpinnerContainerProps extends StandardFunctionProps {
  /** Loading state */
  loading: RemoteDataState
  /** Spinner component */
  spinnerComponent: JSX.Element
}

export type SpinnerContainerRef = HTMLDivElement

export const SpinnerContainer = forwardRef<
  SpinnerContainerRef,
  SpinnerContainerProps
>(
  (
    {
      id,
      style,
      testID = 'spinner-container',
      loading,
      children,
      className,
      spinnerComponent,
    },
    ref
  ) => {
    const spinnerContainerClass = classnames('cf-spinner-container', {
      [`${className}`]: className,
    })

    if (
      loading === RemoteDataState.Loading ||
      loading === RemoteDataState.NotStarted
    ) {
      return (
        <div
          className={spinnerContainerClass}
          data-testid={testID}
          id={id}
          ref={ref}
          style={style}
        >
          {spinnerComponent}
        </div>
      )
    }

    return <>{children}</>
  }
)

SpinnerContainer.displayName = 'SpinnerContainer'
