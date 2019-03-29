// Libraries
import React, {Component} from 'react'

interface Props {
  /** Class name for custom styles */
  className: string
  /** Test ID for Integration Tests */
  testID: string
}

export class FormBox extends Component<Props> {
  public static defaultProps = {
    className: '',
    testID: 'form--box',
  }

  public render() {
    const {children, className, testID} = this.props

    return (
      <div className={`form--box ${className}`} data-testid={testID}>
        {children}
      </div>
    )
  }
}
