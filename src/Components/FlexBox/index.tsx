// Libraries
import React, {Component} from 'react'

// Components
import {FlexBoxRoot, FlexBoxProps} from './FlexBox'
import {FlexBoxChild} from './FlexBoxChild'

export class FlexBox extends Component<FlexBoxProps> {
  public static readonly displayName = 'FlexBox'

  public static FlexBox = FlexBoxRoot
  public static Child = FlexBoxChild

  render() {
    return <FlexBoxRoot {...this.props} />
  }
}

export {FlexBoxProps, FlexBoxRef} from './FlexBox'
export * from './FlexBoxChild'
