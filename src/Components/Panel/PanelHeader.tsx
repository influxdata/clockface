// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {FlexDirection, JustifyContent, AlignItems} from '../../Types'
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'

interface Props {
  /** Title of Panel */
  title: string
  /** Test ID for Integration Tests */
  testID: string
  /** Class name for custom styles */
  className?: string
}

export class PanelHeader extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--header',
  }

  public render() {
    const {children, title} = this.props

    return (
      <div className={this.className}>
        <div className="panel--title">{title}</div>
        <div className="panel--controls">
          <ComponentSpacer
            direction={FlexDirection.Row}
            justifyContent={JustifyContent.FlexEnd}
            alignItems={AlignItems.Center}
          >
            {children}
          </ComponentSpacer>
        </div>
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('panel--header', {[`${className}`]: className})
  }
}
