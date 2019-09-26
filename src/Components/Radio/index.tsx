// Libraries
import React, {Component} from 'react'

// Components
import {RadioRoot, RadioProps} from './Radio'
import {RadioButton} from './RadioButton'

export class Radio extends Component<RadioProps> {
  public static readonly displayName = 'Radio'

  public static Radio = RadioRoot
  public static Button = RadioButton

  render() {
    return <RadioRoot {...this.props} />
  }
}

export {RadioProps, RadioRef} from './Radio'
export {RadioButtonProps, RadioButtonRef} from './RadioButton'
