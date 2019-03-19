// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {Alignment, Stack} from '../../Types'

// Styles
import './ComponentSpacer.scss'

interface PassedProps {
  /** alignment left, center, or right */
  align: Alignment
}

interface DefaultProps {
  /** vertical or horizontal stacking */
  stackChildren?: Stack
  /** stretches component spacer to fit parent width */
  stretchToFitWidth?: boolean
  /** stretches component spacer to fit parent height */
  stretchToFitHeight?: boolean
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = DefaultProps & PassedProps

export class ComponentSpacer extends Component<Props> {
  public static defaultProps: DefaultProps = {
    stackChildren: Stack.Columns,
    stretchToFitWidth: false,
    stretchToFitHeight: false,
    testID: 'component-spacer',
  }

  render() {
    const {
      children,
      align,
      stackChildren,
      stretchToFitWidth,
      stretchToFitHeight,
      testID,
    } = this.props
    return (
      <div
        className={classnames('component-spacer', {
          'component-spacer--left': align === Alignment.Left,
          'component-spacer--center': align === Alignment.Center,
          'component-spacer--right': align === Alignment.Right,
          'component-spacer--horizontal': stackChildren === Stack.Columns,
          'component-spacer--vertical': stackChildren === Stack.Rows,
          'component-spacer--stretch-w': stretchToFitWidth,
          'component-spacer--stretch-h': stretchToFitHeight,
        })}
        data-testid={testID}
      >
        {children}
      </div>
    )
  }
}
