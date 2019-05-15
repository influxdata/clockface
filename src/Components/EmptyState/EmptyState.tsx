// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {EmptyStateText} from './EmptyStateText'
import {EmptyStateSubText} from './EmptyStateSubText'

// Types
import {ComponentSize} from '../../Types'

// Styles
import './EmptyState.scss'

interface Props {
  /** Controls vertical padding in container and font size of children */
  size: ComponentSize
  /** Class name for custom styles */
  className?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class EmptyState extends Component<Props> {
  public static defaultProps = {
    size: ComponentSize.Small,
    testID: 'empty-state',
  }

  public static Text = EmptyStateText
  public static SubText = EmptyStateSubText

  public render() {
    const {children, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, size} = this.props

    return classnames('empty-state', {
      [`empty-state--${size}`]: size,
      [`${className}`]: className,
    })
  }
}
