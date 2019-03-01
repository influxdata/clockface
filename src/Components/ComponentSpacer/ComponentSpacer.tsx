// Libraries
import React, {SFC} from 'react'
import classnames from 'classnames'

// Types
import {Alignment, Stack} from '../../Types'

// Styles
import './ComponentSpacer.scss'

interface Props {
  children: JSX.Element | JSX.Element[]
  align: Alignment
  stackChildren?: Stack
  stretchToFitWidth?: boolean
  stretchToFitHeight?: boolean
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
