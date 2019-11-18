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
  /** Panel title */
  title: JSX.Element
  /** Number to display */
  number: number
  /** Customize appearance of number element */
  numberStyle?: CSSProperties
  /** Use the same size value as your PanelHeader */
  numberSize?: ComponentSize
  /** Controls padding on nested header component */
  headerSize?: ComponentSize
}

export type NumberedPanelRef = PanelRef

export const NumberedPanel = forwardRef<NumberedPanelRef, NumberedPanelProps>(
  (
    {
      id,
      title,
      style = {width: '100%'},
      testID = 'numbered-panel',
      number,
      gradient,
      children,
      className,
      onDismiss,
      headerSize,
      numberSize = ComponentSize.Small,
      numberStyle,
      backgroundColor,
      dismissButtonColor,
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
        id={id}
        ref={ref}
        style={style}
        testID={testID}
        gradient={gradient}
        onDismiss={onDismiss}
        className={numberedPanelClassName}
        backgroundColor={backgroundColor}
        dismissButtonColor={dismissButtonColor}
      >
        <Panel.Header size={headerSize}>
          <div className={numberedPanelIndicatorClassName} style={numberStyle}>
            {number}
          </div>
          {title}
        </Panel.Header>
        {children}
      </Panel.Panel>
    )
  }
)

NumberedPanel.displayName = 'NumberedPanel'
