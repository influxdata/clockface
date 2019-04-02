// Libraries
import React, {Component} from 'react'

// Styles
import './WaitingText.scss'

interface Props {
  /** Text to be displayed */
  text: string
  /** Class name for custom styles */
  className?: string
  /** Used for unit and e2e tests */
  testID: string
}

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
