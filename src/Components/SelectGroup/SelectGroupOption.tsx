// Libraries
import React, {forwardRef, RefObject, KeyboardEvent} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, InputToggleType, Omit} from '../../Types'

export interface SelectGroupOptionProps
  extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for this radio button */
  id: string
  /** Toggles radio button active state */
  active: boolean
  /** Input value of the selected radio button */
  value: any
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Used to group toggles together in a form */
  name?: string
  /** Function to be called on radio button click */
  onClick: (value: any) => void
  /** Function to be called on key up */
  onKeyUp?: (e: KeyboardEvent<HTMLLabelElement>) => void
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Prevents the user from interacting with this component */
  disabled?: boolean
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText?: string
  /** Choose either "SelectGroup" or "Checkbox" */
  type?: InputToggleType
  /** Refers to the visible element rather than the hidden input that ref refers to */
  containerRef?: RefObject<SelectGroupOptionContainerRef>
}

export type SelectGroupOptionRef = HTMLInputElement
export type SelectGroupOptionContainerRef = HTMLLabelElement

export const SelectGroupOption = forwardRef<
  SelectGroupOptionRef,
  SelectGroupOptionProps
>(
  (
    {
      id,
      name,
      type = InputToggleType.Radio,
      value,
      style,
      testID = 'select-group--option',
      active,
      onClick,
      onKeyUp,
      tabIndex,
      disabled = false,
      children,
      className,
      titleText,
      containerRef,
      disabledTitleText = 'This option is disabled',
    },
    ref
  ) => {
    const radioButtonClass = classnames('cf-select-group--option', {
      'cf-select-group--option__active': active,
      'cf-select-group--option__disabled': disabled,
      [`${className}`]: className,
    })

    const title = disabled ? disabledTitleText : titleText

    const handleClick = () => {
      if (disabled) {
        return
      }

      onClick(value)
    }

    const handleKeyUp = (
      e: KeyboardEvent<SelectGroupOptionContainerRef>
    ): void => {
      if (e.key === ' ') {
        handleClick()
      }

      if (onKeyUp) {
        onKeyUp(e)
      }
    }

    const tabDisabled = -1

    return (
      <>
        <input
          id={id}
          ref={ref}
          type={type}
          name={name}
          value={id}
          title={title}
          readOnly={true}
          defaultChecked={active}
          disabled={disabled}
          tabIndex={tabDisabled}
          data-testid={`${testID}--input`}
        />
        <label
          ref={containerRef}
          title={title}
          style={style}
          htmlFor={id}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          tabIndex={disabled ? tabDisabled : tabIndex}
          className={radioButtonClass}
          data-testid={testID}
        >
          {children}
        </label>
      </>
    )
  }
)

SelectGroupOption.displayName = 'SelectGroupOption'
