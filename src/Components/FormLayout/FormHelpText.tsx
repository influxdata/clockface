// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Input discription  or instruction text */
  text: string
}

type Props = ComponentProps & StandardProps

export class FormHelpText extends Component<Props> {
  public static defaultProps = {
    testID: 'form--help-text',
  }

  public render() {
    const {text, testID} = this.props

    return (
      <span className={this.className} data-testid={testID}>
        {text}
      </span>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `form--help-text ${className}` : 'form--help-text'
  }
}
