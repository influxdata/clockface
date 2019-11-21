// Libraries
import React, {
  forwardRef,
  KeyboardEvent,
  ChangeEvent,
  RefObject,
  useState,
} from 'react'
import classnames from 'classnames'

// Components
import {Input, InputRef} from '../../Inputs/Input'
import {Icon} from '../../Icon/Base/Icon'
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Types
import {StandardFunctionProps, ComponentSize, IconFont} from '../../../Types'

// Styles
import './ResourceCardDescription.scss'

export interface ResourceCardEditableDescriptionProps
  extends StandardFunctionProps {
  /** Called when user hits enter or blurs the input  */
  onUpdate: (description: string) => void
  /** Text to display in description */
  description: string
  /** Placeholder text to display in input during editing */
  placeholder?: string
  /** Pass through to assign a ref to the Input present in edit mode */
  inputRef?: RefObject<InputRef>
}

export type ResourceCardEditableDescriptionRef = HTMLDivElement

export const ResourceCardEditableDescription = forwardRef<
  ResourceCardEditableDescriptionRef,
  ResourceCardEditableDescriptionProps
>(
  (
    {
      id,
      style,
      testID = 'resource-list--editable-description',
      onUpdate,
      inputRef,
      className,
      description,
      placeholder = '',
    },
    ref
  ) => {
    const [isEditing, setEditingState] = useState<boolean>(false)
    const [workingDescription, setWorkingDescription] = useState<string>(
      description
    )

    const resourceCardEditableDescriptionClass = classnames(
      'cf-resource-description cf-resource-description__editable',
      {
        [`${className}`]: className,
      }
    )

    const resourceCardEditableDescriptionPreviewClass = classnames(
      'cf-resource-description--preview',
      {
        untitled: !description,
      }
    )

    const handleStartEditing = (): void => {
      setEditingState(true)
    }

    const handleStopEditing = async (): Promise<void> => {
      await onUpdate(workingDescription)
      setEditingState(false)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setWorkingDescription(e.target.value)
    }

    const handleKeyDown = async (
      e: KeyboardEvent<HTMLInputElement>
    ): Promise<void> => {
      if (e.key === 'Enter') {
        await onUpdate(workingDescription)
        setEditingState(false)
      }

      if (e.key === 'Escape') {
        setWorkingDescription(description)
        setEditingState(false)
      }
    }

    const handleInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
      e.currentTarget.select()
    }

    let descriptionElement = (
      <div
        className={resourceCardEditableDescriptionPreviewClass}
        onClick={handleStartEditing}
      >
        {description || 'No description'}
        <Icon glyph={IconFont.Pencil} />
      </div>
    )

    if (isEditing) {
      descriptionElement = (
        <ClickOutside onClickOutside={handleStopEditing}>
          <Input
            ref={inputRef}
            size={ComponentSize.ExtraSmall}
            autoFocus={true}
            spellCheck={false}
            placeholder={placeholder}
            onFocus={handleInputFocus}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="cf-resource-description--input"
            value={workingDescription}
          />
        </ClickOutside>
      )
    }

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={resourceCardEditableDescriptionClass}
        data-testid={testID}
      >
        {descriptionElement}
      </div>
    )
  }
)

ResourceCardEditableDescription.displayName = 'ResourceCardEditableDescription'
