// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class NaturalLanguageSection extends Component<Props> {
  public static readonly displayName = 'NaturalLanguageSection'

  public static defaultProps = {
    testID: 'natural-language--section',
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-natural-language--section', {
      [`${className}`]: className,
    })
  }
}
