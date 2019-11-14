// Libraries
import React, {forwardRef, CSSProperties} from 'react'
import classnames from 'classnames'

// Styles
import './NumberedPanel.scss'

// Components
import {Panel, PanelProps, PanelRef} from '../'

// Types
import {ComponentSize} from '../../../Types'

export interface NumberedPanelProps extends PanelProps {
  /** Number to display */
  number: number
  /** Customize appearance of number element */
  numberStyle?: CSSProperties
  /** Use the same size value as your PanelHeader */
  numberSize?: ComponentSize
}

export type NumberedPanelRef = PanelRef

export const NumberedPanel = forwardRef<NumberedPanelRef, NumberedPanelProps>(
  (
    {
      id,
      style = {width: '100%'},
      testID = 'numbered-panel',
      number,
      children,
      className,
      numberSize = ComponentSize.Small,
      numberStyle,
    },
    ref
  ) => {
    const numberedPanelClassName = classnames('cf-numbered-panel', {
      [`${className}`]: className,
    })

    const numberedPanelIndicatorClassName = classnames(
      'cf-numbered-panel--indicator',
      {[`cf-numbered-panel--indicator__${numberSize}`]: numberSize}
    )

    return (
      <Panel.Panel
        className={numberedPanelClassName}
        ref={ref}
        testID={testID}
        style={style}
        id={id}
      >
        <div className={numberedPanelIndicatorClassName} style={numberStyle}>
          {number}
        </div>
        {children}
      </Panel.Panel>
    )
  }
)

NumberedPanel.displayName = 'NumberedPanel'
