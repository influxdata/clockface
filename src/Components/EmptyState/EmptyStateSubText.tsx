// Libraries
import React, {Component} from 'react'

interface Props {
  /** Secondary text to be displayed when no elements are loaded */
  text: string
}

export class EmptyStateSubText extends Component<Props> {
  render() {
    const {text} = this.props

    return <p className="empty-state--sub-text">{text}</p>
  }
}
