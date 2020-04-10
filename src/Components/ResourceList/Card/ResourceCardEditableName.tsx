// Libraries
import React, {
  forwardRef,
  KeyboardEvent,
  ChangeEvent,
  MouseEvent,
  useState,
  RefObject,
} from 'react'
import classnames from 'classnames'

// Components
import {Input, InputRef} from '../../Inputs/Input'
import {Icon} from '../../Icon/Base/Icon'
import {SpinnerContainer} from '../../Spinners/SpinnerContainer'
import {TechnoSpinner} from '../../Spinners/TechnoSpinner'
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Types
import {
  StandardFunctionProps,
  ComponentSize,
  RemoteDataState,
  IconFont,
} from '../../../Types'

// Styles
import './ResourceCardEditableName.scss'

export interface ResourceCardEditableNameProps extends StandardFunctionProps {
  /** Called when editing is finished, new name is passed  */
  onUpdate: (name: string) => void
  /** Text to display as name */
  name: string
  /** Fires when the name itself is clicked and not edited */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  /** Placeholder text to display in input during editing */
  placeholder?: string
  /** Text to display when not editing and when no name is present */
  noNameString?: string
  /** TestID for edit button sub-component */
  buttonTestID?: string
  /** TestID for input sub-component */
  inputTestID?: string
  /** Pass through to assign a ref to the Input present in edit mode */
  inputRef?: RefObject<InputRef>
}

export type ResourceCardEditableNameRef = HTMLDivElement

export const ResourceCardEditableName = forwardRef<
  ResourceCardEditableNameRef,
  ResourceCardEditableNameProps
>(
  (
    {
      id,
      name,
      style,
      testID = 'resource-editable-name',
      onClick,
      inputRef,
      onUpdate,
      className,
      placeholder = 'Enter a new name',
      inputTestID = 'resource-editable-name--input',
      noNameString = 'Untitled',
      buttonTestID = 'resource-editable-name--button',
    },
    ref
  ) => {
    const [isEditing, setEditingState] = useState<boolean>(false)
    const [workingName, setWorkingName] = useState<string>(name)
    const [loading, setLoading] = useState<RemoteDataState>(
      RemoteDataState.Done
    )

    const resourceCardEditableNameClass = classnames(
      'cf-resource-editable-name',
      {
        'cf-resource-editable-name__editing': isEditing,
        'untitled-name': name === noNameString,
        [`${className}`]: className,
      }
    )

    const resourceCardEditableNameLinkClass = classnames(
      'cf-resource-name--text',
      {
        'cf-resource-name--text__link': onClick,
      }
    )

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) {
        onClick(e)
      }
    }

    const handleStartEditing = (): void => {
      setEditingState(true)
    }

    const handleStopEditing = async (): Promise<void> => {
      setLoading(RemoteDataState.Loading)
      await onUpdate(workingName)
      setLoading(RemoteDataState.Done)
      setEditingState(false)
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
      setWorkingName(e.target.value)
    }

    const handleInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
      e.currentTarget.select()
    }

    const handleKeyDown = async (
      e: KeyboardEvent<HTMLInputElement>
    ): Promise<void> => {
      if (e.key === 'Enter') {
        e.persist()

        if (!workingName) {
          setEditingState(false)
          setWorkingName(name)

          return
        }
        setLoading(RemoteDataState.Loading)
        await onUpdate(workingName)
        setLoading(RemoteDataState.Done)
        setEditingState(false)
      }

      if (e.key === 'Escape') {
        setWorkingName(name)
        setEditingState(false)
      }
    }

    const showInput = isEditing && loading !== RemoteDataState.Loading

    return (
      <div
        id={id}
        ref={ref}
        style={style}
        className={resourceCardEditableNameClass}
      >
        <SpinnerContainer
          loading={loading}
          spinnerComponent={<TechnoSpinner diameterPixels={20} />}
        >
          <span
            className={resourceCardEditableNameLinkClass}
            onClick={handleClick}
            data-testid={testID}
          >
            <span>{name || noNameString}</span>
          </span>
        </SpinnerContainer>
        <div
          className="cf-resource-editable-name--toggle"
          onClick={handleStartEditing}
          data-testid={buttonTestID}
        >
          <Icon glyph={IconFont.Pencil} />
        </div>
        {showInput && (
          <ClickOutside onClickOutside={handleStopEditing}>
            <Input
              ref={inputRef}
              size={ComponentSize.ExtraSmall}
              maxLength={90}
              autoFocus={true}
              spellCheck={false}
              placeholder={placeholder}
              onFocus={handleInputFocus}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="cf-resource-editable-name--input"
              value={workingName}
              testID={inputTestID}
            />
          </ClickOutside>
        )}
      </div>
    )
  }
)

ResourceCardEditableName.displayName = 'ResourceCardEditableName'
