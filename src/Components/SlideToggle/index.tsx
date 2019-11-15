// Libraries
import React, {Component} from 'react'

// Components
import {SlideToggleRoot, SlideToggleProps} from './SlideToggle'

export class SlideToggle extends Component<SlideToggleProps> {
  public static readonly displayName = 'SlideToggle'

  public static SlideToggle = SlideToggleRoot

  render() {
    return <SlideToggleRoot {...this.props} />
  }
}

export {SlideToggleProps, SlideToggleRef} from './SlideToggle'
