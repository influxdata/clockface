// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {DropdownChild} from '../../Types'

interface Props {
  id: string
  text: string
  children?: DropdownChild
}

export class DropdownDivider extends Component<Props> {
  public static defaultProps = {
    text: '',
  }

  public render() {
    const {text} = this.props

    return (
      <div className={classnames('dropdown--divider', {line: !text})}>
        {text}
      </div>
    )
  }
}
