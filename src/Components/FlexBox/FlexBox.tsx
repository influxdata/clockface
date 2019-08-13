// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {FlexBoxChild} from './FlexBoxChild'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
  StandardProps,
} from '../../Types'

// Styles
import './FlexBox.scss'

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

export class FlexBox extends Component<Props> {
  public static readonly displayName = 'FlexBox'

  public static FlexChild = FlexBoxChild

  public static defaultProps = {
    justifyContent: JustifyContent.FlexStart,
    alignItems: AlignItems.Center,
    stretchToFitWidth: false,
    stretchToFitHeight: false,
    testID: 'flex-box',
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
        className={classnames('cf-flex-box', {
          [`cf-flex-box__margin-${margin}`]: margin,
          [`cf-flex-box__${direction}`]: direction,
          [`cf-flex-box__justify-${justifyContent}`]: justifyContent,
          [`cf-flex-box__align-${alignItems}`]: alignItems,
          'cf-flex-box__stretch-w': stretchToFitWidth,
          'cf-flex-box__stretch-h': stretchToFitHeight,
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
