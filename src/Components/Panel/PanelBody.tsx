// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PanelBodyProps extends StandardFunctionProps {
  /** Controls padding */
  size?: ComponentSize
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const PanelBody: FunctionComponent<PanelBodyProps> = ({
  id,
  ref,
  size = ComponentSize.Small,
  style,
  testID = 'panel--body',
  children,
  className,
}) => {
  const panelBodyClass = classnames('cf-panel--body', {
    [`cf-panel--body__${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={panelBodyClass}
    >
      {children}
    </div>
  )
}

PanelBody.displayName = 'PanelBody'
