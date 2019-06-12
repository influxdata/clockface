// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

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
  /** Pass through styles object */
  style?: CSSProperties
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
    } = this.props

    return (
      <div
        className={classnames('component-spacer', {
          [`component-spacer__margin-${margin}`]: margin,
          [`component-spacer__${direction}`]: direction,
          [`component-spacer__justify-${justifyContent}`]: justifyContent,
          [`component-spacer__align-${alignItems}`]: alignItems,
          'component-spacer__stretch-w': stretchToFitWidth,
          'component-spacer__stretch-h': stretchToFitHeight,
          [`${className}`]: className,
        })}
        data-testid={testID}
        style={style}
      >
        {children}
      </div>
    )
  }
}
