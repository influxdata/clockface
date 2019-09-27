// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors, ComponentSize} from '../../Types'

// Utils
import {generateTextBlockStyle} from '../../Utils'

// Styles
import './TextBlock.scss'

export interface TextBlockProps extends StandardFunctionProps {
  /** Contents of text block */
  text: string
  /** Sizing of text block, should be the same as the adjacent form elements */
  size?: ComponentSize
  /** Background color of text block */
  backgroundColor?: InfluxColors | string
  /** Color of text, leave blank to have the text color computed for optimal contrast from the background */
  textColor?: InfluxColors | string
  /** Use monospace font instead of default */
  monospace?: boolean
}

export type TextBlockRef = HTMLDivElement

export const TextBlock = forwardRef<TextBlockRef, TextBlockProps>(
  (
    {
      id,
      text,
      size = ComponentSize.Small,
      style,
      testID = 'text-block',
      className,
      monospace = false,
      textColor,
      backgroundColor,
    },
    ref
  ) => {
    const textBlockClass = classnames('cf-text-block', {
      'cf-text-block__monospace': monospace,
      [`cf-text-block__${size}`]: size,
      [`${className}`]: className,
    })

    const textBlockStyle = generateTextBlockStyle(
      backgroundColor,
      textColor,
      style
    )

    return (
      <div
        id={id}
        ref={ref}
        style={textBlockStyle}
        data-testid={testID}
        className={textBlockClass}
      >
        {text}
      </div>
    )
  }
)

TextBlock.displayName = 'TextBlock'
