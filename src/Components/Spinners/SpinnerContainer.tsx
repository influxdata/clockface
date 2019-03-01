// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {RemoteDataState} from '../../Types'

// Styles
import './SpinnerContainer.scss'

interface Props {
  children: JSX.Element[] | JSX.Element
  className?: string
  loading: RemoteDataState
  spinnerComponent: JSX.Element
  testID?: string
}

export class SpinnerContainer extends Component<Props> {
  public static defaultProps: Partial<Props> = {
    testID: 'spinner-container',
  }

  public render() {
    const {loading, children, spinnerComponent, testID} = this.props

    if (
      loading === RemoteDataState.Loading ||
      loading === RemoteDataState.NotStarted
    ) {
      return (
        <div className={this.className} data-testid={testID}>
          {spinnerComponent}
        </div>
      )
    }

    return children
  }

  private get className(): string {
    const {className} = this.props

    return classnames('spinner-container', {[`${className}`]: className})
  }
}
