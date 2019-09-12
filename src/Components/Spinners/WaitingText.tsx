// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Styles
import './WaitingText.scss'

// Types
import {StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Text to be displayed */
  text: string
}

export class WaitingText extends Component<Props> {
  public static readonly displayName = 'WaitingText'

  public static defaultProps = {
    testID: 'waiting-text',
  }

  public render() {
    const {text, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        {text}
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-waiting-text', {[`${className}`]: className})
  }
}
