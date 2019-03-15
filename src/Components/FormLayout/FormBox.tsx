// Libraries
import React, {Component} from 'react'

interface Props {
  className?: string
}

export class FormBox extends Component<Props> {
  public static defaultProps: Props = {
    className: '',
  }

  public render() {
    const {children, className} = this.props

    return <div className={`form--box ${className}`}>{children}</div>
  }
}
