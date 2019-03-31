// Libraries
import React, {Component} from 'react'

interface PassedProps {
  /** Contents */
  children: JSX.Element[] | JSX.Element
}

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
}

type Props = PassedProps & DefaultProps

export class PanelFooter extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'panel--footer',
  }

  public render() {
    const {children} = this.props

    return <div className="panel--footer">{children}</div>
  }
}
