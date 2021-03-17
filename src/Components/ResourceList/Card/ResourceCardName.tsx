// Libraries
import React, {forwardRef, MouseEvent} from 'react'
import classnames from 'classnames'

import {ErrorTooltip} from '../../Popover/Composed/ErrorTooltip'

// Types
import {StandardFunctionProps, ComponentStatus} from '../../../Types'

// Styles
import './ResourceCardName.scss'

export interface ResourceCardNameProps extends StandardFunctionProps {
  /** Text to display as name */
  name: string
  /** Fires when the name is clicked */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  /** error message to be displayeed IF the name component has an error status */
  errorMessage?: string
  /** Display error state or default state */
  status?: ComponentStatus.Default | ComponentStatus.Error
}

export type ResourceCardNameRef = HTMLDivElement

export const ResourceCardName = forwardRef<
  ResourceCardNameRef,
  ResourceCardNameProps
>(
  (
    {
      id,
      name,
      style,
      testID = 'resource-name',
      onClick,
      className,
      errorMessage = 'This value is invalid',
      status = ComponentStatus.Default,
    },
    ref
  ) => {
    const isError = status === ComponentStatus.Error

    const resourceNameClass = classnames('cf-resource-name', {
      [`${className}`]: className,
    })

    const resourceNameLinkClass = classnames('cf-resource-name--text', {
      'cf-resource-name--text__link': onClick,
      'cf-resource-name--text__error': isError,
      'cf-resource-name--text__error__link': isError && onClick,
    })

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e)
      }
    }

    const tooltipStyle = {
      padding: '8px', //$cf-marg-b
      fontSize: '14px', //$cf-form-md-font
    }

    return (
      <div id={id} ref={ref} style={style} className={resourceNameClass}>
        <span
          className={resourceNameLinkClass}
          onClick={handleClick}
          data-testid={testID}
        >
          <span className={'cf-resource-name--text-gap'}>{name}</span>
          {isError && (
            <ErrorTooltip
              tooltipContents={<>{errorMessage}</>}
              tooltipStyle={tooltipStyle}
              style={{
                //offset for the icon to be aligned to the name text
                transform: 'translateY(-5%)',
              }}
            />
          )}
        </span>
      </div>
    )
  }
)

ResourceCardName.displayName = 'ResourceCardName'
