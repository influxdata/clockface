// Libraries
import React, {Component} from 'react'

interface Props {
  /** Secondary text to be displayed when no elements are loaded */
  text: string
  /** Test ID for Integration Tests */
  testID: string
}

export class EmptyStateSubText extends Component<Props> {
  public static defaultProps = {
    testID: 'empty-state--sub-text',
  }

  render() {
    const {text, testID} = this.props

    return (
      <p className="empty-state--sub-text" data-testid={testID}>
        {text}
      </p>
    )
  }
}
