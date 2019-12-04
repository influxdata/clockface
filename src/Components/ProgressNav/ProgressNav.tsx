// Libraries
import React, {forwardRef, Children} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, Orientation, ComponentSize} from '../../Types'

// Styles
import './ProgressNav.scss'

export interface ProgressNavProps extends StandardFunctionProps {
  /** Determines the layout of the component, can be Vertical or Horizontal */
  orientation: Orientation
  /** Controls overall scale of the component */
  size?: ComponentSize
}

export type ProgressNavRef = HTMLElement

export const ProgressNavRoot = forwardRef<ProgressNavRef, ProgressNavProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      testID = 'progress-nav',
      children,
      className,
      orientation = Orientation.Horizontal,
    },
    ref
  ) => {
    const progressNavClass = classnames('cf-progress-nav', {
      [`cf-progress-nav__${orientation}`]: orientation,
      [`cf-progress-nav__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <nav
        id={id}
        ref={ref}
        style={style}
        className={progressNavClass}
        data-testid={testID}
      >
        {Children.map(children, (child, i) => {
          if (i < Children.count(children) - 1) {
            return (
              <>
                {child}
                <div className="cf-progress-nav--bar" />
              </>
            )
          }

          return child
        })}
      </nav>
    )
  }
)

ProgressNavRoot.displayName = 'ProgressNav'
