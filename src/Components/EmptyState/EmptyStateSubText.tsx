// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Secondary text to be displayed when no elements are loaded */
  text: string
}

export class EmptyStateSubText extends Component<Props> {
  public static readonly displayName = 'EmptyStateSubText'

  public static defaultProps = {
    testID: 'empty-state--sub-text',
  }

  render() {
    const {text, testID, id} = this.props

    return (
      <p className={this.className} data-testid={testID} id={id}>
        {text}
      </p>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className
      ? `empty-state--sub-text ${className}`
      : 'empty-state--sub-text'
  }
}
