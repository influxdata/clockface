// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

interface Props extends StandardFunctionProps {
  /** Controls padding */
  size?: ComponentSize
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const PanelTitle: FunctionComponent<Props> = ({
  id,
  ref,
  style,
  size = ComponentSize.Small,
  testID = 'panel--title',
  children,
  className,
}) => {
  const panelTitleClass = classnames('cf-panel--title', {
    [`cf-panel--title__${size}`]: size,
    [`${className}`]: className,
  })

  return (
    <div
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={panelTitleClass}
    >
      {children}
    </div>
  )
}

PanelTitle.displayName = 'PanelTitle'
