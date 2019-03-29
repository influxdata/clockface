// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {RemoteDataState} from '../../Types'

// Styles
import './SpinnerContainer.scss'

interface Props {
  /** custom classname for spinner container */
  className?: string
  /** loading state */
  loading: RemoteDataState
  /** spinner component */
  spinnerComponent: JSX.Element
  /** Test ID for Integration Tests */
  testID: string
}

export class SpinnerContainer extends Component<Props> {
  public static defaultProps = {
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
