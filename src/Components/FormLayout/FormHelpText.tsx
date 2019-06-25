// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Input discription  or instruction text */
  text: string
}

export class FormHelpText extends Component<Props> {
  public static readonly displayName = 'FormHelpText'

  public static defaultProps = {
    testID: 'form--help-text',
  }

  public render() {
    const {text, testID, id} = this.props

    return (
      <span className={this.className} data-testid={testID} id={id}>
        {text}
      </span>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `form--help-text ${className}` : 'form--help-text'
  }
}
