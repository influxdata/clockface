// Libraries
import React, {Component} from 'react'

// Components
import {FlexBox} from '../FlexBox/FlexBox'

// Types
import {
  StandardProps,
  Orientation,
  FlexDirection,
  AlignItems,
} from '../../Types'

interface Props extends StandardProps {
  /** Should match the orientation prop of Tabs component */
  orientation: Orientation
  /** Stretches TabsContainer to fit parent width */
  stretchToFitWidth?: boolean
  /** Stretches TabsContainer to fit parent height */
  stretchToFitHeight?: boolean
}

export class TabsContainer extends Component<Props> {
  public static readonly displayName = 'TabsContainer'

  public static defaultProps = {
    testID: 'tabs--container',
  }

  public render() {
    const {
      testID,
      id,
      children,
      style,
      className,
      orientation,
      stretchToFitWidth,
      stretchToFitHeight,
    } = this.props

    const direction =
      orientation === Orientation.Vertical
        ? FlexDirection.Row
        : FlexDirection.Column

    return (
      <FlexBox
        className={className}
        data-testid={testID}
        id={id}
        style={style}
        direction={direction}
        alignItems={AlignItems.Stretch}
        stretchToFitWidth={stretchToFitWidth}
        stretchToFitHeight={stretchToFitHeight}
      >
        {children}
      </FlexBox>
    )
  }
}
