// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface Props {
  /** Text to be displayed on divider, a line will be displayed if no text is provided */
  text?: string
  /** Test ID for Integration Tests */
  testID: string
  /** Useful when you want to apply custom positioning to the dropdown or override the appearance */
  className?: string
}

export class DropdownDivider extends Component<Props> {
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
