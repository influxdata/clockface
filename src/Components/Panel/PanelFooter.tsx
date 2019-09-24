// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PanelFooterProps extends StandardFunctionProps {
  /** Controls padding */
  size?: ComponentSize
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const PanelFooter: FunctionComponent<PanelFooterProps> = ({
  id,
  ref,
  style,
  size = ComponentSize.Small,
  testID = 'panel--footer',
  children,
  className,
}) => {
  const panelFooterClass = classnames('cf-panel--footer', {
    [`cf-panel--footer__${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={panelFooterClass}
    >
      {children}
    </div>
  )
}

PanelFooter.displayName = 'PanelFooter'
