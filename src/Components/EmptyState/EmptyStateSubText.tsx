// Libraries
import React, {Component} from 'react'

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
}
interface PassedProps {
  /** Secondary text to be displayed when no elements are loaded */
  text: string
}

type Props = DefaultProps & PassedProps

export class EmptyStateSubText extends Component<Props> {
  public static defaultProps: DefaultProps = {
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
