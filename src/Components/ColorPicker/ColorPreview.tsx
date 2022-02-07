// Libraries
import React, {FunctionComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './ColorPreview.scss'

interface ColorPreviewProps extends StandardFunctionProps {
  /** Hex color in #000000 format */
  color: string
}

export const ColorPreview: FunctionComponent<ColorPreviewProps> = ({
  color,
  className,
}) => {
  const colorPreviewClass = classnames('cf-color-preview', {
    [`${className}`]: className,
  })

  return <div className={colorPreviewClass} style={{backgroundColor: color}} />
}

ColorPreview.displayName = 'ColorPickerPreview'
