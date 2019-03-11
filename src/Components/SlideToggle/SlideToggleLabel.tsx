// Libraries
import React, {Component} from 'react'

interface Props {
  /** Text to be displayed as label */
  text: string
}

export class SlideToggleLabel extends Component<Props> {
  public render() {
    const {text} = this.props
    return <label className="slide-toggle--label">{text}</label>
  }
}
