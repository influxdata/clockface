// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Styles
import './Bullet.scss'

// Composed
import {Icon} from '../Base/Icon'

// Types
import {
  IconFont,
  StandardFunctionProps,
  InfluxColors,
  ComponentSize,
} from '../../../Types'

export interface BulletProps extends StandardFunctionProps {
  /** Icon to display */
  glyph?: IconFont | string
  /** Text to display */
  text?: string | number
  /** Coloration of bullet circle */
  backgroundColor?: InfluxColors | string
  /** Coloration of bullet text or icon */
  color?: InfluxColors | string
  /** Size of bullet */
  size?: ComponentSize
}

export type BulletRef = HTMLSpanElement

export const Bullet = forwardRef<BulletRef, BulletProps>(
  (
    {
      id,
      text,
      glyph,
      size = ComponentSize.Small,
      color,
      style,
      testID = 'bullet',
      className,
      backgroundColor,
    },
    ref
  ) => {
    const bulletClassName = classnames('cf-bullet', {
      [`cf-bullet__${size}`]: size,
      [`${className}`]: className,
    })

    const bulletStyle = {
      backgroundColor,
      color,
      ...style,
    }

    return (
      <span
        className={bulletClassName}
        data-testid={testID}
        style={bulletStyle}
        ref={ref}
        id={id}
      >
        {glyph ? <Icon glyph={glyph} /> : text}
      </span>
    )
  }
)

Bullet.displayName = 'Bullet'
