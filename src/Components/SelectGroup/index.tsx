// Libraries
import React, {Component} from 'react'

// Components
import {SelectGroupRoot, SelectGroupProps} from './SelectGroup'
import {SelectGroupButton} from './SelectGroupButton'

export class SelectGroup extends Component<SelectGroupProps> {
  public static readonly displayName = 'SelectGroup'

  public static SelectGroup = SelectGroupRoot
  public static Button = SelectGroupButton

  render() {
    return <SelectGroupRoot {...this.props} />
  }
}

export {SelectGroupProps, SelectGroupRef} from './SelectGroup'
export * from './SelectGroupButton'
