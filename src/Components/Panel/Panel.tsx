// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import _ from 'lodash'
import classnames from 'classnames'

// Types
import {
  Gradients,
  InfluxColors,
  StandardFunctionProps,
  ComponentColor,
} from 'src/Types'

// Utils
import {generatePanelStyle, calculateTextColorFromBackground} from 'src/Utils'

// Components
import {DismissButton} from 'src/Components/Button/Composed/DismissButton'

// Styles
import 'src/Components/Panel/Panel.scss'

interface Props extends StandardFunctionProps {
  /** Optional gradient theme of panel, supercedes backgroundColor prop */
  gradient?: Gradients
  /** Optional background color of panel */
  backgroundColor?: InfluxColors | string
  /** If a function is passed in a dismiss button will appear on the Panel */
  onDismiss?: () => void
  /** Applies to the dismiss button rendered when onDismiss is present */
  dismissButtonColor?: ComponentColor
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const Panel: FunctionComponent<Props> = ({
  id,
  ref,
  style,
  testID = 'panel',
  gradient,
  children,
  className,
  onDismiss,
  backgroundColor = InfluxColors.Castle,
  dismissButtonColor = ComponentColor.Primary,
}) => {
  const textColor = calculateTextColorFromBackground(backgroundColor, gradient)

  const panelClass = classnames('cf-panel', {
    [`${className}`]: className,
    'cf-panel__gradient': gradient,
    [`cf-panel__${textColor}-text`]: textColor,
  })

  const dismissButton = onDismiss && (
    <DismissButton onClick={onDismiss} color={dismissButtonColor} />
  )

  const panelStyle = generatePanelStyle(backgroundColor, gradient, style)

  return (
    <div
      className={panelClass}
      style={panelStyle}
      data-testid={testID}
      id={id}
      ref={ref}
    >
      {dismissButton}
      {children}
    </div>
  )
}

Panel.displayName = 'Panel'
