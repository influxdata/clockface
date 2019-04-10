// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface Props {
  /** Text to be displayed as label */
  text: string
  /** Class name for custom styles */
  className?: string
}

export class SlideToggleLabel extends Component<Props> {
  public render() {
    const {text} = this.props
    return <label className={this.className}>{text}</label>
  }

  private get className(): string {
    const {className} = this.props

    return classnames('slide-toggle--label', {[`${className}`]: className})
  }
}
