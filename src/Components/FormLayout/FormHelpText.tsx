// Libraries
import React, {Component} from 'react'

interface Props {
  /** Input discription  or instruction text */
  text: string
}

export class FormHelpText extends Component<Props> {
  public render() {
    const {text} = this.props

    return <span className="form--help-text">{text}</span>
  }
}
