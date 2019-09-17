// Libraries
import React, {Component} from 'react'

// Types
import {StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Input discription  or instruction text */
  text: string
}

export class FormHelpText extends Component<Props> {
  public static readonly displayName = 'FormHelpText'

  public static defaultProps = {
    testID: 'form--help-text',
  }

  public render() {
    const {text, testID, id, style} = this.props

    return (
      <span
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {text}
      </span>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `cf-form--help-text ${className}` : 'cf-form--help-text'
  }
}
