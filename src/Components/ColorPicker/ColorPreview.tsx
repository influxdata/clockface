// Libraries
import React, {FunctionComponent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

// Styles
import './ColorPreview.scss'

interface ColorPreviewProps extends StandardFunctionProps {
  /** Any CSS color value is good */
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
