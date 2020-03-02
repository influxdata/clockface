// Libraries
import React, {forwardRef} from 'react'
import _ from 'lodash'
import classnames from 'classnames'

// Types
import {
  Gradients,
  InfluxColors,
  StandardFunctionProps,
  ComponentColor,
} from '../../../Types'

// Utils
import {
  generateBackgroundStyle,
  calculateTextColorFromBackground,
} from '../../../Utils'

// Components
import {DismissButton} from '../../Button/Composed/DismissButton'

// Styles
import './Panel.scss'

export interface PanelProps extends StandardFunctionProps {
  /** Optional gradient theme of panel, supercedes backgroundColor prop */
  gradient?: Gradients
  /** Optional background color of panel */
  backgroundColor?: InfluxColors | string
  /** If a function is passed in a dismiss button will appear on the Panel */
  onDismiss?: () => void
  /** Applies to the dismiss button rendered when onDismiss is present */
  dismissButtonColor?: ComponentColor
  /** Renders a border based on the background color or gradient */
  border?: boolean
}

export type PanelRef = HTMLDivElement

export const PanelRoot = forwardRef<PanelRef, PanelProps>(
  (
    {
      id,
      style,
      testID = 'panel',
      border = false,
      gradient,
      children,
      className,
      onDismiss,
      backgroundColor = InfluxColors.Castle,
      dismissButtonColor = ComponentColor.Primary,
    },
    ref
  ) => {
    const textColor = calculateTextColorFromBackground(
      backgroundColor,
      gradient
    )

    const panelClass = classnames('cf-panel', {
      [`${className}`]: className,
      'cf-panel__gradient': gradient,
      'cf-panel__bordered': border,
      [`cf-panel__${textColor}-text`]: textColor,
    })

    const dismissButton = onDismiss && (
      <DismissButton onClick={onDismiss} color={dismissButtonColor} />
    )

    const panelStyle = generateBackgroundStyle(
      backgroundColor,
      gradient,
      border,
      style
    )

    return (
      <div
        id={id}
        ref={ref}
        style={panelStyle}
        data-testid={testID}
        className={panelClass}
      >
        {dismissButton}
        {children}
      </div>
    )
  }
)

PanelRoot.displayName = 'Panel'
