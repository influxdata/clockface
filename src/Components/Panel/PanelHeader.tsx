// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox} from '../FlexBox/FlexBox'

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
  public static readonly displayName = 'PanelHeader'

  public static defaultProps = {
    testID: 'panel--header',
  }

  public render() {
    const {children, title, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <div className="cf-panel--title">{title}</div>
        <div className="cf-panel--controls">
          <FlexBox
            direction={FlexDirection.Row}
            justifyContent={JustifyContent.FlexEnd}
            alignItems={AlignItems.Center}
          >
            {children}
          </FlexBox>
        </div>
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-panel--header', {[`${className}`]: className})
  }
}
