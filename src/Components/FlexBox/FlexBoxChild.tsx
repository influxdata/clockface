// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from 'src/Types'

interface Props extends StandardFunctionProps {
  /** Optional fixed width of element */
  basis?: number
  /** Maximumn proportional width to grow until */
  grow?: number
  /** Minimum proportional width to shrink until */
  shrink?: number
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const FlexBoxChild: FunctionComponent<Props> = ({
  id,
  ref,
  grow = 1,
  style,
  basis,
  shrink = 0,
  testID = 'flex-box--child',
  children,
  className,
}) => {
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
    >
      {children}
    </div>
  )
}

FlexBoxChild.displayName = 'FlexBoxChild'
