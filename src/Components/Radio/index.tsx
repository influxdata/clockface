// Libraries
import React, {Component} from 'react'

// Components
import {RadioRoot, RadioProps} from './Radio'
import {RadioButton} from './RadioButton'

export class Radio extends Component<RadioProps> {
  public static Root = RadioRoot
  public static Button = RadioButton

  render() {
    return <RadioRoot {...this.props} />
  }
}
