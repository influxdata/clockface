// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class FormBox extends Component<Props> {
  public static readonly displayName = 'Form.Box'

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
