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
  public static readonly displayName = 'DropdownDivider'

  public static defaultProps = {
    testID: 'dropdown-divider',
  }

  public render() {
    const {text, testID, className, id, style} = this.props

    return (
      <div
        className={classnames('cf-dropdown-divider', {
          line: !text,
          [`${className}`]: className,
        })}
        data-testid={testID}
        id={id}
        style={style}
      >
        {text}
      </div>
    )
  }
}
