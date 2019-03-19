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

interface PassedProps {
  /** Class name for custom styles */
  customClass?: string
}

interface DefaultProps {
  /** Empty State component size */
  size?: ComponentSize
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = DefaultProps & PassedProps

export class EmptyState extends Component<Props> {
  public static defaultProps: DefaultProps = {
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
    const {customClass, size} = this.props

    return classnames('empty-state', {
      [`empty-state--${size}`]: size,
      [`${customClass}`]: customClass,
    })
  }
}
