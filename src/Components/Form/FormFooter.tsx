// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {}

export class FormFooter extends Component<Props> {
  public static readonly displayName = 'FormFooter'

  public static defaultProps = {
    testID: 'form--footer',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-form--element cf-form--footer', {
      [`${className}`]: className,
    })
  }
}
