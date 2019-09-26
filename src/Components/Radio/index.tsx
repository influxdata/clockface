// Libraries
import React, {Component} from 'react'

// Components
import {Radio, RadioProps} from './Radio'
import {RadioButton} from './RadioButton'

export class RadioFamily extends Component<RadioProps> {
  public static readonly displayName = 'Radio'

  public static Radio = Radio
  public static Button = RadioButton

  render() {
    return <Radio {...this.props} />
  }
}
