// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {RemoteDataState, StandardClassProps} from 'src/Types'

// Styles
import 'src/Components/Spinners/SpinnerContainer.scss'

interface Props extends StandardClassProps {
  /** Loading state */
  loading: RemoteDataState
  /** Spinner component */
  spinnerComponent: JSX.Element
}

export class SpinnerContainer extends Component<Props> {
  public static readonly displayName = 'SpinnerContainer'

  public static defaultProps = {
    testID: 'spinner-container',
  }

  public render() {
    const {loading, children, spinnerComponent, testID, id, style} = this.props

    if (
      loading === RemoteDataState.Loading ||
      loading === RemoteDataState.NotStarted
    ) {
      return (
        <div
          className={this.className}
          data-testid={testID}
          id={id}
          style={style}
        >
          {spinnerComponent}
        </div>
      )
    }

    return children
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-spinner-container', {[`${className}`]: className})
  }
}
