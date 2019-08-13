// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {ComponentSpacerFlexChild} from './ComponentSpacerFlexChild'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
  StandardProps,
} from '../../Types'

// Styles
import './ComponentSpacer.scss'

interface Props extends StandardProps {
  /** Vertical or horizontal flex alignment */
  direction: FlexDirection
  /** Inserted margin between children */
  margin?: ComponentSize
  /** Can be FlexStart, FlexEnd, Center, SpaceBetween, or SpaceAround */
  justifyContent: JustifyContent
  /** Can be FlexStart, FlexEnd, Center, or Stretch */
  alignItems: AlignItems
  /** stretches component spacer to fit parent width */
  stretchToFitWidth: boolean
  /** stretches component spacer to fit parent height */
  stretchToFitHeight: boolean
}

export class ComponentSpacer extends Component<Props> {
  public static readonly displayName = 'ComponentSpacer'

  public static FlexChild = ComponentSpacerFlexChild

  public static defaultProps = {
    justifyContent: JustifyContent.FlexStart,
    alignItems: AlignItems.Center,
    stretchToFitWidth: false,
    stretchToFitHeight: false,
    testID: 'component-spacer',
  }

  render() {
    const {
      stretchToFitHeight,
      stretchToFitWidth,
      justifyContent,
      alignItems,
      className,
      direction,
      children,
      margin,
      testID,
      style,
      id,
    } = this.props

    return (
      <div
        className={classnames('cf-component-spacer', {
          [`cf-component-spacer__margin-${margin}`]: margin,
          [`cf-component-spacer__${direction}`]: direction,
          [`cf-component-spacer__justify-${justifyContent}`]: justifyContent,
          [`cf-component-spacer__align-${alignItems}`]: alignItems,
          'cf-component-spacer__stretch-w': stretchToFitWidth,
          'cf-component-spacer__stretch-h': stretchToFitHeight,
          [`${className}`]: className,
        })}
        data-testid={testID}
        style={style}
        id={id}
      >
        {children}
      </div>
    )
  }
}
