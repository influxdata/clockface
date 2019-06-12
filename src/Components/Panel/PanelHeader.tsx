// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  StandardProps,
} from '../../Types'

interface Props extends StandardProps {
  /** Title of Panel */
  title: string
}

export class PanelHeader extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--header',
  }

  public render() {
    const {children, title, testID} = this.props

    return (
      <div className={this.className} data-testid={testID}>
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
