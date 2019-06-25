// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Styles
import './AppWrapper.scss'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {}

export class AppWrapper extends PureComponent<Props> {
  public static readonly displayName = 'AppWrapper'

  public static defaultProps = {
    testID: 'app-wrapper',
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

    return classnames('clockface--app-wrapper', {[`${className}`]: className})
  }
}
