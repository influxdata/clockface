// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

// Styles
import './ResourceCardName.scss'

export interface ResourceCardNameProps extends StandardFunctionProps {
  /** Text to display as name */
  name: string
  /** Fires when the name is clicked */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
}

export type ResourceCardNameRef = HTMLDivElement

export const ResourceCardName = forwardRef<
  ResourceCardNameRef,
  ResourceCardNameProps
>(({id, name, style, testID = 'resource-name', onClick, className}, ref) => {
  const resourceNameClass = classnames('cf-resource-name', {
    [`${className}`]: className,
  })

  const resourceNameLinkClass = classnames('cf-resource-name--text', {
    'cf-resource-name--text__link': onClick,
  })

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <div id={id} ref={ref} style={style} className={resourceNameClass}>
      <span
        className={resourceNameLinkClass}
        onClick={handleClick}
        data-testid={testID}
      >
        <span>{name}</span>
      </span>
    </div>
  )
})

ResourceCardName.displayName = 'ResourceCardName'
