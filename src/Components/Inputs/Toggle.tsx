// Libraries
import React, {
  ChangeEvent,
  KeyboardEvent,
  forwardRef,
  RefObject,
  useState,
} from 'react'
import classnames from 'classnames'

// Components
import {Icon} from '../Icon/Base/Icon'

// Styles
import './Toggle.scss'

// Types
import {
  Omit,
  ComponentColor,
  ComponentSize,
  IconFont,
  StandardFunctionProps,
  InputToggleType,
  Appearance,
} from '../../Types'

export interface ToggleProps extends Omit<StandardFunctionProps, 'id'> {
  /** Unique identifier for this toggle */
  id: string
  /** Determines whether checkbox is checked */
  checked?: boolean
  /** Choose either "Radio" or "Checkbox" */
  type: InputToggleType
  /** Function to be called on change */
  onChange: (value?: string) => void
  /** Function to be called on focus loss */
  onBlur?: (e?: ChangeEvent<HTMLLabelElement>) => void
  /** Function to be called on focus gain */
  onFocus?: (e?: ChangeEvent<HTMLLabelElement>) => void
  /** Function to be called on key press */
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Function to be called on key up */
  onKeyUp?: (e: KeyboardEvent<HTMLLabelElement>) => void
  /** Function to be called on key down */
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
  /** Icon to be displayed to the left of text */
  icon?: IconFont
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Used to group toggles together in a form */
  name?: string
  /** Togle field value to be updated with 'on X' functions */
  value?: string
  /** Text to be displayed on hover tooltip */
  titleText?: string
  /** Text to be displayed on hover tooltip when radio button is disabled */
  disabledTitleText?: string
  /** Toggle Component size */
  size?: ComponentSize
  /** Prevents the user from interacting with this component */
  disabled?: boolean
  /** Whether or not the input receives autofocus when mounted */
  autoFocus?: boolean
  /** Refers to the visible element rather than the hidden input that ref refers to */
  containerRef?: RefObject<ToggleContainerRef>
  /** Controls color of toggle */
  color?: ComponentColor
  /** Renders the toggle as either "Solid" or "Outline" */
  appearance?: Appearance
}

export type ToggleRef = HTMLInputElement
export type ToggleContainerRef = HTMLDivElement

export const Toggle = forwardRef<ToggleRef, ToggleProps>(
  (
    {
      id,
      icon,
      type,
      size = ComponentSize.Small,
      name,
      style,
      value = '',
      color = ComponentColor.Primary,
      onBlur,
      testID = 'toggle',
      onFocus,
      checked = false,
      onKeyUp,
      disabled = false,
      children,
      tabIndex,
      onChange,
      titleText = '',
      className,
      autoFocus = false,
      onKeyDown,
      onKeyPress,
      appearance = Appearance.Outline,
      containerRef,
      disabledTitleText = 'This input is disabled',
    },
    ref
  ) => {
    const [isFocused, setFocus] = useState<boolean>(autoFocus)

    const toggleClass = classnames('cf-toggle', {
      [`cf-toggle__${size}`]: size,
      [`cf-toggle__${color}`]: color,
      [`cf-toggle__${appearance}`]: appearance,
      'cf-toggle__checked': checked,
      'cf-toggle__focused': isFocused,
      'cf-toggle__checkbox': type === InputToggleType.Checkbox,
      'cf-toggle__radio': type === InputToggleType.Radio,
      'cf-toggle__disabled': disabled,
      'cf-toggle__labelled': !!React.Children.count(children),
      [`${className}`]: className,
    })

    const handleClick = (): void => {
      if (disabled) {
        return
      }

      onChange(value)
    }

    const handleKeyUp = (e: KeyboardEvent<HTMLLabelElement>): void => {
      if (e.key === ' ') {
        handleClick()
      }

      if (onKeyUp) {
        onKeyUp(e)
      }
    }

    const handleInputFocus = (e: ChangeEvent<HTMLLabelElement>): void => {
      setFocus(true)

      if (onFocus) {
        onFocus(e)
      }
    }

    const handleInputBlur = (e: ChangeEvent<HTMLLabelElement>): void => {
      setFocus(false)

      if (onBlur) {
        onBlur(e)
      }
    }

    let indicator = <span className="cf-toggle--indicator cf-toggle--dot" />

    if (icon) {
      indicator = (
        <Icon glyph={icon} className="cf-toggle--indicator cf-toggle--icon" />
      )
    }

    const title = disabled ? disabledTitleText : titleText

    return (
      <div className={toggleClass} style={style} ref={containerRef}>
        <input
          id={id}
          ref={ref}
          type={type}
          name={name}
          title={title}
          value={value}
          tabIndex={-1}
          disabled={disabled}
          readOnly={true}
          onKeyDown={onKeyDown}
          autoFocus={autoFocus}
          className="cf-toggle--input"
          onKeyPress={onKeyPress}
          data-testid={`${testID}--input`}
          checked={checked}
        />
        <label
          title={title}
          onBlur={handleInputBlur}
          htmlFor={id}
          onFocus={handleInputFocus}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          tabIndex={tabIndex}
          className="cf-toggle--visual-input"
          data-testid={testID}
        >
          {indicator}
        </label>
        {children}
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'
