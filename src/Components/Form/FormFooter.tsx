// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class FormFooter extends Component<Props> {
  public static readonly displayName = 'FormFooter'

  public static defaultProps = {
    testID: 'form--footer',
  }

  public render() {
    const {children, testID, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
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
