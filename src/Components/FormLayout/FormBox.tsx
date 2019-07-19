// Libraries
import React, {Component} from 'react'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class FormBox extends Component<Props> {
  public static readonly displayName = 'FormBox'

  public static defaultProps = {
    className: '',
    testID: 'form--box',
  }

  public render() {
    const {children, className, testID, id} = this.props

    return (
      <div className={`cf-form--box ${className}`} data-testid={testID} id={id}>
        {children}
      </div>
    )
  }
}
