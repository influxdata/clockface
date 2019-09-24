// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Types
import {RemoteDataState, StandardFunctionProps} from '../../Types'

// Styles
import './SpinnerContainer.scss'

interface Props extends StandardFunctionProps {
  /** Loading state */
  loading: RemoteDataState
  /** Spinner component */
  spinnerComponent: JSX.Element
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const SpinnerContainer: FunctionComponent<Props> = ({
  id,
  ref,
  style,
  testID = 'spinner-container',
  loading,
  children,
  className,
  spinnerComponent,
}) => {
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

SpinnerContainer.displayName = 'SpinnerContainer'
