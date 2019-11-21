// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Base/Icon'

// Types
import {
  StandardFunctionProps,
  ComponentStatus,
  IconFont,
  ComponentSize,
} from '../../Types'

// Styles
import './StatusIndicator.scss'

export interface StatusIndicatorProps extends StandardFunctionProps {
  /** The status to indicate */
  status: ComponentStatus
  /** Renders a shadow beneath the indicator for increased legibility */
  shadow?: boolean
  /** Controls the size of the indicator, this should match the size of the associated input */
  size?: ComponentSize
}

export type StatusIndicatorRef = HTMLDivElement

export const StatusIndicator = forwardRef<
  StatusIndicatorRef,
  StatusIndicatorProps
>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      status,
      testID = 'status-indicator',
      shadow = true,
      className,
    },
    ref
  ) => {
    const statusIndicatorClass = classnames('cf-status-indicator', {
      [`cf-status-indicator__${status}`]: status,
      [`cf-status-indicator__${size}`]: size,
      [`${className}`]: className,
    })

    let statusElement: JSX.Element = <></>
    const shadowElement = shadow && (
      <div className="cf-status-indicator--shadow" />
    )

    if (status === ComponentStatus.Loading) {
      statusElement = (
        <span className="cf-status-indicator--child">
          <div className="cf-status-indicator--spinner" />
        </span>
      )
    }

    if (status === ComponentStatus.Error) {
      statusElement = (
        <Icon
          glyph={IconFont.AlertTriangle}
          className="cf-status-indicator--child"
        />
      )
    }

    if (status === ComponentStatus.Valid) {
      statusElement = (
        <Icon
          glyph={IconFont.Checkmark}
          className="cf-status-indicator--child"
        />
      )
    }

    return (
      <div
        className={statusIndicatorClass}
        data-testid={`${testID}--${status}`}
        ref={ref}
        id={id}
        style={style}
      >
        {statusElement}
        {shadowElement}
      </div>
    )
  }
)

StatusIndicator.displayName = 'StatusIndicator'
