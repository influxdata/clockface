// Libraries
import React, {Component} from 'react'

// Components
import {EmptyStateRoot, EmptyStateProps} from './EmptyState'
import {EmptyStateText} from './EmptyStateText'
import {EmptyStateSubText} from './EmptyStateSubText'

export class EmptyState extends Component<EmptyStateProps> {
  public static readonly displayName = 'EmptyState'

  public static EmptyState = EmptyStateRoot
  public static Text = EmptyStateText
  public static SubText = EmptyStateSubText

  render() {
    return <EmptyStateRoot {...this.props} />
  }
}

export {EmptyStateProps, EmptyStateRef} from './EmptyState'
export * from './EmptyStateText'
export * from './EmptyStateSubText'
