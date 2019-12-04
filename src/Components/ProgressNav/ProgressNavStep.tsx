// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon'

// Types
import { StandardFunctionProps, IconFont, ComponentStatus, Omit} from '../../Types'

export interface ProgressNavStepProps extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for this nav step */
  id: string
  /** Icon to show when status is "default" */
  defaultIcon?: IconFont
  /** Icon to show when status is "valid" */
  validIcon?: IconFont
  /** Icon to show when status is "error" */
  errorIcon?: IconFont
  /** State of the step */
  status?: ComponentStatus
  /** Set to true if the user is currently viewing this step */
  active?: boolean
  /** Controls text wrapping */
  wrapText?: boolean
  /** Fires when either the circle or label are clicked */
  onClick?: (id?: string) => void
}

export type ProgressNavStepRef = HTMLDivElement

export const ProgressNavStep = forwardRef<
  ProgressNavStepRef,
  ProgressNavStepProps
>(
  (
    {
      id,
      style,
      testID = 'progress-nav--step',
      status,
      active,
      onClick,
      children,
      wrapText = false,
      validIcon = IconFont.Checkmark,
      errorIcon = IconFont.Triangle,
      className,
      defaultIcon = IconFont.CircleThick,
    },
    ref
  ) => {
    const progressNavStepClass = classnames('cf-progress-nav--step', {
      [`cf-progress-nav--step__${status}`]: status,
      'cf-progress-nav--step__active': active,
      [`${className}`]: className,
    })

    const progressNavStepLabelClass = classnames('cf-progress-nav--label', {
      'cf-progress-nav--label__wrap-text': wrapText,
    })

    const handleClick = (): void => {
      if (onClick) {
        onClick(id)
      }
    }

    let iconElement = <Icon glyph={defaultIcon} className="cf-progress-nav--icon" />

    if (status == ComponentStatus.Valid) {
      iconElement = <Icon glyph={validIcon} className="cf-progress-nav--icon" />
    }

    if (status == ComponentStatus.Error) {
      iconElement = <Icon glyph={errorIcon} className="cf-progress-nav--icon" />
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        onClick={handleClick}
        className={progressNavStepClass}
        data-testid={testID}
      >
        <div className="cf-progress-nav--circle">
          {iconElement}
        </div>
        <div className={progressNavStepLabelClass}>{children}</div>
      </div>
    )
  }
)

ProgressNavStep.displayName = 'ProgressNavStep'
