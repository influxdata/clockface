// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Icon'

// Styles
import './Alert.scss'

// Types
import {ComponentColor, IconFont, StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Alert color */
  color: ComponentColor
  /** Icon to be displayed to the left of text */
  icon?: IconFont
}

export type AlertRef = HTMLDivElement

export const Alert = forwardRef<AlertRef, Props>((props, ref) => {
  const {testID, color, icon, className, children, id, style} = props

  const alertClassName = classnames('cf-alert', {
    [`cf-alert--${color}`]: color,
    'cf-alert--has-icon': icon,
    [`${className}`]: className,
  })

  return (
    <div
      className={alertClassName}
      data-testid={testID}
      id={id}
      style={style}
      ref={ref}
    >
      {!!icon && <Icon glyph={icon} className="cf-alert--icon" />}
      <div className="cf-alert--contents">{children}</div>
    </div>
  )
})

Alert.displayName = 'Alert'

Alert.defaultProps = {
  testID: 'alert'
};