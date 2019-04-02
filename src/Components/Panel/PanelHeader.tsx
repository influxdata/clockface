// Libraries
import React, {Component} from 'react'

// Components
import {FlexDirection, JustifyContent, AlignItems} from '../../Types'
import {ComponentSpacer} from '../../Utilities/ComponentSpacer/ComponentSpacer'

interface Props {
  /** Title of Panel */
  title: string
  /** Test ID for Integration Tests */
  testID: string
}

export class PanelHeader extends Component<Props> {
  public static defaultProps = {
    testID: 'panel--header',
  }

  public render() {
    const {children, title} = this.props

    return (
      <div className="panel--header">
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
}
