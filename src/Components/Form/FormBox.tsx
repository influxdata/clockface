// Libraries
import React, {Component} from 'react'

// Types
import {StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {}

export class FormBox extends Component<Props> {
  public static readonly displayName = 'FormBox'

  public static defaultProps = {
    className: '',
    testID: 'form--box',
  }

  public render() {
    const {children, className, testID, id, style} = this.props

    return (
      <div
        className={`cf-form--box ${className}`}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }
}
