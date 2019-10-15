// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface OverlayBodyProps extends StandardFunctionProps {}

export type OverlayBodyRef = HTMLDivElement

export const OverlayBody = forwardRef<OverlayBodyRef, OverlayBodyProps>(
  ({id, style, testID = 'overlay--body', children, className}, ref) => {
    const overlayBodyClass = classnames('cf-overlay--body', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={overlayBodyClass}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
)

OverlayBody.displayName = 'OverlayBody'
