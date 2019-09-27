// Libraries
import React, {Component} from 'react'

// Components
import {SlideToggleRoot, SlideToggleProps} from './SlideToggle'
import {SlideToggleLabel} from './SlideToggleLabel'

export class SlideToggle extends Component<SlideToggleProps> {
  public static readonly displayName = 'SlideToggle'

  public static SlideToggle = SlideToggleRoot
  public static Label = SlideToggleLabel

  render() {
    return <SlideToggleRoot {...this.props} />
  }
}

export {SlideToggleProps, SlideToggleRef} from './SlideToggle'
export * from './SlideToggleLabel'
