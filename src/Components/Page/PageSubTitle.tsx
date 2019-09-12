// Libraries
import React, {PureComponent} from 'react'

// Types
import {StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {
  /** Text to display in title */
  title: string
}

export class PageSubTitle extends PureComponent<Props> {
  public static readonly displayName = 'PageSubTitle'

  public static defaultProps = {
    testID: 'page-sub-title',
  }

  public render() {
    const {title, testID, id, style} = this.props

    return (
      <h2 className={this.className} data-testid={testID} id={id} style={style}>
        {title}
      </h2>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `cf-page--sub-title ${className}` : 'cf-page--sub-title'
  }
}
