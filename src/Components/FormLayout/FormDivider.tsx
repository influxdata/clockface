// Libraries
import React, {Component} from 'react'

interface Props {
  /** Test ID for Integration Tests */
  testID?: string
}

export class FormDivider extends Component<Props> {
  public static defaultProps: Props = {
    testID: 'form--divider',
  }

  public render() {
    const {testID} = this.props

    return <label className="form---divider" data-testid={testID} />
  }
}
