// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Secondary text to be displayed when no elements are loaded */
  text: string
}

type Props = ComponentProps & StandardProps

export class EmptyStateSubText extends Component<Props> {
  public static defaultProps = {
    testID: 'empty-state--sub-text',
  }

  render() {
    const {text, testID} = this.props

    return (
      <p className={this.className} data-testid={testID}>
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
