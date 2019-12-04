// Libraries
import React, {Component} from 'react'

// Components
import {ProgressNavRoot, ProgressNavProps} from './ProgressNav'
import {ProgressNavStep} from './ProgressNavStep'

export class ProgressNav extends Component<ProgressNavProps> {
  public static readonly displayName = 'ProgressNav'

  public static ProgressNav = ProgressNavRoot
  public static Step = ProgressNavStep

  render() {
    return <ProgressNavRoot {...this.props} />
  }
}

export {ProgressNavProps, ProgressNavRef} from './ProgressNav'
export * from './ProgressNavStep'
