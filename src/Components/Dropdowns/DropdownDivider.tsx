// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

interface Props {
  /** id used as list key */
  id: string
  /** Text to be displayed on divider, a line will be displayed if no text is provided */
  text?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class DropdownDivider extends Component<Props> {
  public static defaultProps = {
    testID: 'dropdown--divider',
  }
  public render() {
    const {text, testID} = this.props

    return (
      <div
        className={classnames('dropdown--divider', {line: !text})}
        data-testid={testID}
      >
        {text}
      </div>
    )
  }
}
