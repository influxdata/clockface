// Libraries
import React, {FC, ChangeEvent, forwardRef} from 'react'

// Components
import {Input, InputProps, InputRef} from '../Input'
import {ButtonGroup} from '../../Button/Composed/ButtonGroup'
import {Dropdown} from '../../Dropdowns'

// Types
import {
  Omit,
  ComponentSize,
  ComponentStatus,
  InputType,
  AutoComplete,
  TimeUnit,
} from '../../../Types'

const TIME_INPUT_DROPDOWN_SIZE = {
  xs: '47px',
  sm: '54px',
  md: '64px',
  lg: '82px',
}

export type TimeInputRef = InputRef

export interface TimeInputProps
  extends Omit<
    InputProps,
    | 'type'
    | 'checked'
    | 'spellCheck'
    | 'step'
    | 'min'
    | 'max'
    | 'pattern'
    | 'onChange'
    | 'autocomplete'
    | 'monospace'
  > {
  /** Callback for input changes */
  onChange: (value: string, e?: ChangeEvent<TimeInputRef>) => void
  /** Time unit */
  unit: TimeUnit
  /** Callback for when time unit is changed */
  onChangeUnit: (unit: TimeUnit) => void
}

export const TimeInput = forwardRef<TimeInputRef, TimeInputProps>(
  (
    {
      id,
      icon,
      unit,
      size = ComponentSize.Small,
      name = '',
      style = {width: '100%'},
      value = '',
      status = ComponentStatus.Default,
      onBlur,
      testID = 'time-input',
      onFocus,
      onKeyUp,
      required = false,
      tabIndex,
      onChange,
      maxLength,
      titleText = '',
      className,
      autoFocus = false,
      onKeyDown,
      onKeyPress,
      inputStyle,
      placeholder = '',
      onChangeUnit,
      containerRef,
      disabledTitleText = 'This input is disabled',
    },
    ref
  ) => {
    const numbersOnly = (value: string): string => {
      return value.replace(/[\D]+/g, '')
    }

    const handleInputChange = (e: ChangeEvent<TimeInputRef>): void => {
      const timeValue = numbersOnly(e.target.value)
      onChange(timeValue, e)
    }

    const dropdownStyle = {
      flex: `0 0 ${TIME_INPUT_DROPDOWN_SIZE[size]}`,
      width: TIME_INPUT_DROPDOWN_SIZE[size],
    }

    const dropdownStatus =
      status === ComponentStatus.Disabled || status === ComponentStatus.Loading
        ? ComponentStatus.Disabled
        : ComponentStatus.Default

    return (
      <ButtonGroup style={style} testID={`${testID}--container`}>
        <Input
          id={id}
          ref={ref}
          icon={icon}
          type={InputType.Text}
          size={size}
          name={name}
          style={{flex: '1 0 0'}}
          value={numbersOnly(`${value}`)}
          status={status}
          onBlur={onBlur}
          testID={testID}
          onFocus={onFocus}
          onKeyUp={onKeyUp}
          required={required}
          tabIndex={tabIndex}
          onChange={handleInputChange}
          maxLength={maxLength}
          monospace={true}
          titleText={titleText}
          className={className}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          onKeyPress={onKeyPress}
          spellCheck={false}
          inputStyle={inputStyle}
          placeholder={placeholder}
          autocomplete={AutoComplete.Off}
          containerRef={containerRef}
          disabledTitleText={disabledTitleText}
        />
        <Dropdown
          style={dropdownStyle}
          testID={`${testID}--dropdown`}
          button={(active, onClick) => (
            <Dropdown.Button
              active={active}
              size={size}
              onClick={onClick}
              status={dropdownStatus}
              testID={`${testID}--dropdown-button`}
            >
              {`${unit}`}
            </Dropdown.Button>
          )}
          menu={onCollapse => (
            <TimeInputMenu
              testID={testID}
              onCollapse={onCollapse}
              selectedItem={unit}
              onSelect={onChangeUnit}
            />
          )}
        />
      </ButtonGroup>
    )
  }
)

interface TimeInputMenuProps {
  testID: string
  onCollapse?: () => void
  selectedItem: TimeUnit
  onSelect: (unit: TimeUnit) => void
}

const TimeInputMenu: FC<TimeInputMenuProps> = ({
  testID,
  onCollapse,
  selectedItem,
  onSelect,
}) => {
  return (
    <Dropdown.Menu onCollapse={onCollapse} testID={`${testID}--dropdown-menu`}>
      {Object.keys(TimeUnit).map(item => (
        <Dropdown.Item
          testID={`${testID}--dropdown-item ${item}`}
          key={item}
          selected={item === selectedItem}
          value={TimeUnit[item]}
          onClick={onSelect}
        >
          {`${TimeUnit[item]}`}
        </Dropdown.Item>
      ))}
    </Dropdown.Menu>
  )
}
