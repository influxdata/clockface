// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox, FlexBoxRef, FlexBoxProps} from '../../FlexBox'

// Types
import {Omit, ComponentSize, JustifyContent} from '../../../Types'

export interface PanelFooterProps
  extends Omit<FlexBoxProps, 'stretchToFitWidth' | 'stretchToFitHeight'> {
  /** Controls padding */
  size?: ComponentSize
}

export type PanelFooterRef = FlexBoxRef

export const PanelFooter = forwardRef<PanelFooterRef, PanelFooterProps>(
  (
    {
      id,
      size = ComponentSize.Small,
      style,
      testID = 'panel--footer',
      margin,
      children,
      className,
      direction,
      alignItems,
      justifyContent = JustifyContent.Center,
    },
    ref
  ) => {
    const panelFooterClass = classnames('cf-panel--footer', {
      [`cf-panel--footer__${size}`]: size,
      [`${className}`]: className,
    })

    return (
      <FlexBox.FlexBox
        id={id}
        ref={ref}
        style={style}
        margin={margin}
        direction={direction}
        className={panelFooterClass}
        alignItems={alignItems}
        testID={testID}
        justifyContent={justifyContent}
        stretchToFitWidth={true}
      >
        {children}
      </FlexBox.FlexBox>
    )
  }
)

PanelFooter.displayName = 'PanelFooter'
