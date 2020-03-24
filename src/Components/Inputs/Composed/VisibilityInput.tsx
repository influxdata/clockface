import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  forwardRef,
  FunctionComponent,
  useState,
} from 'react'
import classnames from 'classnames'

// Components
import {Input} from '../Input'

// Styles
import './VisibilityInput.scss'

// Types
import {
  InputType,
  StandardFunctionProps,
  ComponentSize,
  AutoComplete,
  ComponentStatus,
  IconFont,
} from '../../../Types'

import {SquareButton} from '../../Button/Composed/SquareButton'

export interface VisibilityInputProps extends StandardFunctionProps {
  /** Function to be called on field value change */
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on focus loss */
  onBlur?: (e?: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on focus gain */
  onFocus?: (e?: ChangeEvent<HTMLInputElement>) => void
  /** Function to be called on key press */
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Function to be called on key up */
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Function to be called on key down */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Icon to be displayed to the left of text */
  icon?: IconFont
  /** Maximum string length for input value */
  maxLength?: number
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Input field name attribute */
  name?: string
  /** Input field value to be updated with 'on X' functions */
  value?: string
  /** Placeholder text when no value is present */
  placeholder?: string
  /** Allows or disallows browser autocomplete functionality */
  autocomplete?: AutoComplete
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText?: string
  /** Input Component size */
  size?: ComponentSize
  /** Input status state */
  status?: ComponentStatus
  /** Whether or not the input receives autofocus when mounted */
  autoFocus?: boolean
  /** Allows or disallows browser spellcheck functionality */
  spellCheck?: boolean
  /** For use within a form, marks the input as required */
  required?: boolean
  /** Pass in a RegEx matcher for best results */
  pattern?: string
  /** Toggle Visibility of text */
  visible?: boolean
  /** Function to be called on button click */
  onToggleClick?: (e?: MouseEvent<HTMLButtonElement>) => void
}

export type VisibilityInputRef = HTMLInputElement

export const VisibilityInput = forwardRef<
  VisibilityInputRef,
  VisibilityInputProps
>(
  (
    {
      id,
      icon,
      name,
      value,
      style,
      onBlur,
      pattern,
      onKeyUp,
      onFocus,
      tabIndex,
      required,
      onChange,
      titleText,
      maxLength,
      onKeyDown,
      className,
      autoFocus,
      onKeyPress,
      spellCheck,
      placeholder,
      autocomplete,
      onToggleClick,
      visible = false,
      disabledTitleText,
      testID = 'visibility-input',
      size = ComponentSize.Small,
      status = ComponentStatus.Default,
    },
    ref
  ) => {
    const [mode, setMode] = useState<'visible' | 'hidden'>('hidden')
    const visibilityInputClass = classnames('cf-visibility-input', {
      [`${className}`]: className,
    })

    const visibility = visible || mode === 'visible'
    const inputType = visibility ? InputType.Text : InputType.Password

    const handleToggleClick = (e: MouseEvent<HTMLButtonElement>): void => {
      if (onToggleClick) {
        onToggleClick(e)
      } else if (mode === 'visible') {
        setMode('hidden')
      } else {
        setMode('visible')
      }
    }

    return (
      <div className={visibilityInputClass} style={style}>
        <Input
          placeholder={placeholder}
          spellCheck={spellCheck}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          onBlur={onBlur}
          pattern={pattern}
          onKeyUp={onKeyUp}
          onFocus={onFocus}
          tabIndex={tabIndex}
          required={required}
          id={id}
          ref={ref}
          icon={icon}
          size={size}
          name={name}
          maxLength={maxLength}
          disabledTitleText={disabledTitleText}
          titleText={titleText}
          type={inputType}
          value={value}
          testID={testID}
          status={status}
          onChange={onChange}
          className={visibilityInputClass}
          autocomplete={autocomplete}
        >
          <VisibilityIcon
            status={status}
            size={size}
            visible={visibility}
            onClick={handleToggleClick}
          />
        </Input>
      </div>
    )
  }
)

VisibilityInput.displayName = 'VisibilityInput'

interface VisibilityIconProps {
  visible: boolean
  status: ComponentStatus
  size: ComponentSize
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const VisibilityIcon: FunctionComponent<VisibilityIconProps> = ({
  size,
  status,
  onClick,
  visible,
}) => {
  const iconStatus =
    status === ComponentStatus.Loading ? ComponentStatus.Default : status

  return (
    <SquareButton
      status={iconStatus}
      className="cf-visibility-input--icon"
      size={size}
      icon={visible ? IconFont.EyeOpen : IconFont.EyeClosed}
      onClick={onClick}
    />
  )
}

VisibilityIcon.displayName = 'VisibilityIcon'
