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
import {Icon} from '../Icon/Icon'

// Styles
import './Toggle.scss'

// Types
import {
  Omit,
  ComponentColor,
  ComponentStatus,
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
  onChange: (checked: boolean) => void
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
  /** Keyboard control tab order  */
  tabIndex?: number
  /** Used to group toggles together in a form */
  name?: string
  /** Input field value to be updated with 'on X' functions */
  value?: string
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
  /** Pass through for container ref */
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
      style = {width: '100%'},
      value = '',
      color = ComponentColor.Primary,
      status = ComponentStatus.Default,
      onBlur,
      testID = 'toggle',
      onFocus,
      checked,
      onKeyUp,
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
      'cf-toggle__disabled': status === ComponentStatus.Disabled,
      'cf-toggle__labelled': !!React.Children.count(children),
      [`${className}`]: className,
    })

    const handleInputChange = (): void => {
      onChange(!checked)
    }

    const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        handleInputChange()
      }

      if (e.key === 'Escape') {
        e.currentTarget.blur()
      }

      if (onKeyUp) {
        onKeyUp(e)
      }
    }

    const handleInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
      setFocus(true)

      if (onFocus) {
        onFocus(e)
      }
    }

    const handleInputBlur = (e: ChangeEvent<HTMLInputElement>): void => {
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

    const title =
      status === ComponentStatus.Disabled ? disabledTitleText : titleText

    return (
      <div className={toggleClass} style={style} ref={containerRef}>
        <input
          id={id}
          ref={ref}
          type={type}
          checked={checked}
          title={title}
          name={name}
          value={value}
          autoFocus={autoFocus}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          onKeyUp={handleKeyUp}
          onKeyPress={onKeyPress}
          onKeyDown={onKeyDown}
          className="cf-toggle--input"
          disabled={status === ComponentStatus.Disabled}
          tabIndex={tabIndex}
          data-testid={testID}
        />
        <label htmlFor={id} className="cf-toggle--visual-input" title={title}>
          {indicator}
        </label>
        {children}
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'
