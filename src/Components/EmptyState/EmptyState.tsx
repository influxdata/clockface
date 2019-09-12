// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {EmptyStateText} from 'src/Components/EmptyState/EmptyStateText'
import {EmptyStateSubText} from 'src/Components/EmptyState/EmptyStateSubText'

// Types
import {ComponentSize, StandardClassProps} from 'src/Types'

// Styles
import 'src/Components/EmptyState/EmptyState.scss'

interface Props extends StandardClassProps {
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
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
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
