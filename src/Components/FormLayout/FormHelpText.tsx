// Libraries
import React, {Component} from 'react'

interface Props {
  /** Input discription  or instruction text */
  text: string
  /** Test ID for Integration Tests */
  testID: string
}

export class FormHelpText extends Component<Props> {
  public static defaultProps = {
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
