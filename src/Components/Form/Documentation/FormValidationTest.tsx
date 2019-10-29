import React, {Component, ChangeEvent} from 'react'

// This component only exists to test FormValidationElement with a stateful wrapper
// Our addon-state storybook plugin is currently broken

import {Input} from '../../Inputs/Input'
import {FormValidationElement} from '../FormValidationElement'

interface State {
  inputValue: string
}

interface Props {}

export class FormValidationTest extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      inputValue: '',
    }
  }

  public render() {
    const {inputValue} = this.state

    return (
      <FormValidationElement
        label="This is a test"
        value={inputValue}
        validationFunc={this.handleValidation}
      >
        {status => (
          <Input
            status={status}
            value={inputValue}
            onChange={this.handleInputChange}
            placeholder="Try typing something in here to see validation happen"
          />
        )}
      </FormValidationElement>
    )
  }

  private handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({inputValue: e.target.value})
  }

  private handleValidation = (value: string): string | null => {
    if (value.trim() === '') {
      return 'This field cannot be empty'
    }

    if (value.length >= 21) {
      return 'Must be 20 characters or less'
    }

    return null
  }
}
