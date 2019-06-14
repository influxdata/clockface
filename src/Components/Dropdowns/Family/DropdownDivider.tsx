// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../../Types'

interface Props extends StandardProps {
  /** Text to be displayed on divider, a line will be displayed if no text is provided */
  text?: string
}

export class DropdownDivider extends Component<Props> {
  public static readonly displayName = 'Dropdown.Divider'

  public static defaultProps = {
    testID: 'dropdown-divider',
  }

  public render() {
    const {text, testID, className} = this.props

    return (
      <div
        className={classnames('dropdown-divider', {
          line: !text,
          [`${className}`]: className,
        })}
        data-testid={testID}
      >
        {text}
      </div>
    )
  }
}
