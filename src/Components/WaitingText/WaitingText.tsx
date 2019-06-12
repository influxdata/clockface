// Libraries
import React, {Component} from 'react'

// Styles
import './WaitingText.scss'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Text to be displayed */
  text: string
}

type Props = ComponentProps & StandardProps

export class WaitingText extends Component<Props> {
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
