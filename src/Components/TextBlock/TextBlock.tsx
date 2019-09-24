// Libraries
import React, {FunctionComponent, CSSProperties, RefObject} from 'react'
import chroma from 'chroma-js'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InfluxColors, ComponentSize} from '../../Types'

// Styles
import './TextBlock.scss'

interface Props extends StandardFunctionProps {
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
  /** Pass through for ref */
  ref?: RefObject<HTMLDivElement>
}

export const TextBlock: FunctionComponent<Props> = ({
  id,
  ref,
  text,
  size = ComponentSize.Small,
  style,
  testID = 'text-block',
  className,
  monospace = false,
  textColor,
  backgroundColor,
}) => {
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

// Note:
// This logic should re-use the contrast logic found in /utils
// once #313 is merged in

const generateTextBlockStyle = (
  backgroundColor?: InfluxColors | string,
  textColor?: InfluxColors | string,
  style?: CSSProperties
): CSSProperties | undefined => {
  if (!backgroundColor) {
    return {color: `${textColor}`, ...style}
  }

  const darkContrast = chroma.contrast(
    `${backgroundColor}`,
    InfluxColors.Kevlar
  )
  const lightContrast = chroma.contrast(
    `${backgroundColor}`,
    InfluxColors.White
  )

  let color

  if (darkContrast > lightContrast) {
    color = `${InfluxColors.Kevlar}`
  } else {
    color = `${InfluxColors.White}`
  }

  if (textColor) {
    color = `${textColor}`
  }

  return {backgroundColor, color, ...style}
}

TextBlock.displayName = 'TextBlock'
