// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {EmptyStateText} from './EmptyStateText'
import {EmptyStateSubText} from './EmptyStateSubText'

// Types
import {ComponentSize, StandardProps} from '../../Types'

// Styles
import './EmptyState.scss'

interface Props extends StandardProps {
  /** Controls vertical padding in container and font size of children */
  size: ComponentSize
}

export class EmptyState extends Component<Props> {
  public static readonly displayName = 'EmptyState'

  public static defaultProps = {
    size: ComponentSize.Small,
    testID: 'empty-state',
  }

  public static Text = EmptyStateText
  public static SubText = EmptyStateSubText

  public render() {
    const {children, testID, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, size} = this.props

    return classnames('cf-empty-state', {
      [`cf-empty-state--${size}`]: size,
      [`${className}`]: className,
    })
  }
}
