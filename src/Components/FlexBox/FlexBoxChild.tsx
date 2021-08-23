// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FlexBoxChildProps extends StandardFunctionProps {
  /** Optional fixed width of element */
  basis?: number
  /** Maximumn proportional width to grow until */
  grow?: number
  /** Minimum proportional width to shrink until */
  shrink?: number
  onClick?: (e: MouseEvent<HTMLElement>) => void
}

export type FlexBoxChildRef = HTMLDivElement

export const FlexBoxChild = forwardRef<FlexBoxChildRef, FlexBoxChildProps>(
  (
    {
      id,
      grow = 1,
      style,
      basis,
      shrink = 0,
      testID = 'flex-box--child',
      children,
      className,
      onClick
    },
    ref
  ) => {
    const flexBoxChildClass = classnames('cf-flex-box--child', {
      [`${className}`]: className,
    })

    const flexBoxChildStyle = {
      flexGrow: grow,
      flexShrink: shrink,
      flexBasis: basis ? `${basis}px` : '0',
      ...style,
    }

    return (
      <div
        id={id}
        ref={ref}
        style={flexBoxChildStyle}
        data-testid={testID}
        className={flexBoxChildClass}
        onClick={onClick}
      >
        {children}
      </div>
    )
  }
)

FlexBoxChild.displayName = 'FlexBoxChild'
