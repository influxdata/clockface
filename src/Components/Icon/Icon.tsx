// Libraries
import React, {FunctionComponent, RefObject} from 'react'
import classnames from 'classnames'

// Types
import {IconFont, StandardFunctionProps} from 'src/Types'

interface Props extends StandardFunctionProps {
  /** Icon to display */
  glyph: IconFont | string
  /** Pass through for ref */
  ref?: RefObject<HTMLSpanElement>
}

export const Icon: FunctionComponent<Props> = ({
  id,
  ref,
  glyph,
  style,
  testID = 'icon',
  className,
}) => {
  const iconClassName = classnames('cf-icon', {
    [`${glyph}`]: glyph,
    [`${className}`]: className,
  })

  return (
    <span
      id={id}
      ref={ref}
      style={style}
      data-testid={testID}
      className={iconClassName}
    />
  )
}

Icon.displayName = 'Icon'
