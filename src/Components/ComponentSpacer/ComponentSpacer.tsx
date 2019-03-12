// Libraries
import React, {SFC} from 'react'
import classnames from 'classnames'

// Types
import {Alignment, Stack} from '../../Types'

// Styles
import './ComponentSpacer.scss'

interface Props {
  /** Child components to be aligned  */
  children: JSX.Element | JSX.Element[]
  /** alignment left, center, or right */
  align: Alignment
  /** vertical or horizontal stacking */
  stackChildren?: Stack
  /** stretches component spacer to fit parent width */
  stretchToFitWidth?: boolean
  /** stretches component spacer to fit parent height */
  stretchToFitHeight?: boolean
  /** Test ID for Integration Tests */
  testID?: string
}

export const ComponentSpacer: SFC<Props> = ({
  children,
  align,
  stackChildren = Stack.Columns,
  stretchToFitWidth = false,
  stretchToFitHeight = false,
  testID = 'component-spacer',
}) => (
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
