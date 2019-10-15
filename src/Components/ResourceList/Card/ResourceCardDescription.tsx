// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../../Types'

// Styles
import './ResourceCardDescription.scss'

export interface ResourceCardDescriptionProps extends StandardFunctionProps {
  /** Text to display in description */
  description: string
}

export type ResourceCardDescriptionRef = HTMLDivElement

export const ResourceCardDescription = forwardRef<
  ResourceCardDescriptionRef,
  ResourceCardDescriptionProps
>(
  (
    {id, style, testID = 'resource-list--description', className, description},
    ref
  ) => {
    const resourceCardDescriptionClass = classnames('cf-resource-description', {
      [`${className}`]: className,
    })

    const resourceCardDescriptionPreviewClass = classnames(
      'cf-resource-description--preview',
      {
        untitled: !description,
      }
    )

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={resourceCardDescriptionClass}
        data-testid={testID}
      >
        <div className={resourceCardDescriptionPreviewClass}>
          {description || 'No description'}
        </div>
      </div>
    )
  }
)

ResourceCardDescription.displayName = 'ResourceCardDescription'
