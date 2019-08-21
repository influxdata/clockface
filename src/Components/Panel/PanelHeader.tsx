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
  ComponentSize,
} from '../../Types'

interface Props extends StandardProps {
  /** Vertical or horizontal flex alignment */
  flexDirection: FlexDirection
  /** Inserted margin between children */
  childMargin?: ComponentSize
  /** Can be FlexStart, FlexEnd, Center, SpaceBetween, or SpaceAround */
  justifyContent: JustifyContent
  /** Can be FlexStart, FlexEnd, Center, or Stretch */
  alignItems: AlignItems
}

export class PanelHeader extends Component<Props> {
  public static readonly displayName = 'PanelHeader'

  public static defaultProps = {
    testID: 'panel--header',
    flexDirection: FlexDirection.Row,
    justifyContent: JustifyContent.SpaceBetween,
    alignItems: AlignItems.Center,
  }

  public render() {
    const {
      children,
      testID,
      id,
      style,
      flexDirection,
      childMargin,
      justifyContent,
      alignItems,
    } = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <FlexBox
          direction={flexDirection}
          justifyContent={justifyContent}
          alignItems={alignItems}
          stretchToFitWidth={true}
          margin={childMargin}
        >
          {children}
        </FlexBox>
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-panel--header', {[`${className}`]: className})
  }
}
