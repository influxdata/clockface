// Libraries
// Libraries
import React, {forwardRef, ReactNode, useState} from 'react'
import classnames from 'classnames'

// Styles
import './RadioButtonGroup.scss'

// Types
import {StandardFunctionProps, ComponentOrientation} from '../../Types'
import {RadioButton, RadioButtonProps} from './RadioButton'

export interface RadioButtonGroupProps extends StandardFunctionProps {
  /**
   * Use this to pass the radio Button that will be included in the group
   */
  children: ReactNode
  /**
   * Vertical or horizontal orientation
   */
  orientation: ComponentOrientation
  /**
   * name of the group of radio buttons
   */
  name: string
  /**
   * Use optionally to pass a function
   */
  onChange: (value?: string) => void
  /**
   * Use optionally to define a default active value
   */
  activeValue?: string
}

export type RadioButtonGroupRef = HTMLDivElement

export const RadioButtonGroup = forwardRef<
  RadioButtonGroupRef,
  RadioButtonGroupProps
>(({orientation, children, name, onChange, activeValue = 'test-1'}, ref) => {
  const [selectedValue, setSelectedValue] = useState(activeValue)
  const radioButtonGroupClass = classnames('cf-radio-button-group', {
    [`cf-radio-button-group__${orientation}`]: orientation,
  })
  const mapRadioButtons = () => {
    const radioButtons = React.Children.map(children, radioButton => {
      if (!React.isValidElement<RadioButtonProps>(radioButton)) {
        return radioButton
      }
      const child: React.ReactElement<RadioButtonProps> = radioButton
      const {value, ...other} = child.props

      return (
        <RadioButton
          {...other}
          name={name}
          onChange={handleChange}
          value={value}
          checked={value === selectedValue}
        ></RadioButton>
      )
    })
    return radioButtons
  }

  const handleChange = (value: string): void => {
    setSelectedValue(value)
    onChange(value)
  }
  return (
    <div ref={ref} className={radioButtonGroupClass}>
      {mapRadioButtons()}
    </div>
  )
})

RadioButton.displayName = 'RadioButtonGroup'
