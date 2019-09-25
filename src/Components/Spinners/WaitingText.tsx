// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './WaitingText.scss'

// Types
import {StandardFunctionProps} from '../../Types'

export interface WaitingTextProps extends StandardFunctionProps {
  /** Text to be displayed */
  text: string
}

export type WaitingTextRef = HTMLDivElement

export const WaitingText = forwardRef<WaitingTextRef, WaitingTextProps>(
  ({id, text, style, testID = 'waiting-text', className}, ref) => {
    const waitingTextClass = classnames('cf-waiting-text', {
      [`${className}`]: className,
    })

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={waitingTextClass}
      >
        {text}
      </div>
    )
  }
)

WaitingText.displayName = 'WaitingText'
