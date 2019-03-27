// Libraries
import React, {Component} from 'react'

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
}

interface PassedProps {
  /** Input discription  or instruction text */
  text: string
}

type Props = DefaultProps & PassedProps

export class FormHelpText extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'form--help-text',
  }

  public render() {
    const {text, testID} = this.props

    return (
      <span className="form--help-text" data-testid={testID}>
        {text}
      </span>
    )
  }
}
