// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Styles
import 'src/Components/Spinners/WaitingText.scss'

// Types
import {StandardFunctionProps} from 'src/Types'

interface Props extends StandardFunctionProps {
  /** Text to be displayed */
  text: string
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const WaitingText: FunctionComponent<Props> = ({
  id,
  ref,
  text,
  style,
  testID = 'waiting-text',
  className,
}) => {
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

WaitingText.displayName = 'WaitingText'
