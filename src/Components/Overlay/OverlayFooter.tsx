// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox} from '../FlexBox'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
  StandardFunctionProps,
} from '../../Types'

export interface OverlayFooterProps extends StandardFunctionProps {}

export type OverlayFooterRef = HTMLDivElement

export const OverlayFooter = forwardRef<OverlayFooterRef, OverlayFooterProps>(
  ({id, style, testID = 'overlay--footer', children, className}, ref) => {
    const overlayFooterClass = classnames('cf-overlay--footer', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={overlayFooterClass}
        data-testid={testID}
      >
        <FlexBox
          margin={ComponentSize.Small}
          direction={FlexDirection.Row}
          justifyContent={JustifyContent.Center}
          alignItems={AlignItems.Center}
          stretchToFitWidth={true}
        >
          {children}
        </FlexBox>
      </div>
    )
  }
)

OverlayFooter.displayName = 'OverlayFooter'
