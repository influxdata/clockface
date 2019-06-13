// Libraries
import React, {Component} from 'react'

// Styles
import './WaitingText.scss'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Text to be displayed */
  text: string
}

export class WaitingText extends Component<Props> {
  public static readonly displayName = 'WaitingText'

  public static defaultProps = {
    testID: 'waiting-text',
  }

  public render() {
    const {text, className, testID} = this.props

    return (
      <div className={`waiting-text ${className || ''}`} data-testid={testID}>
        {text}
      </div>
    )
  }
}
