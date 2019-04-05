// Libraries
import React, {PureComponent} from 'react'

interface Props {
  /** Text to display in PageTitle */
  title: string
  /** Alternate text for screen readers */
  altText?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class PageTitle extends PureComponent<Props> {
  public static defaultProps = {
    testID: 'page-title',
  }

  public render() {
    const {title, altText, testID} = this.props

    return (
      <h1 className="page--title" title={altText} data-testid={testID}>
        {title}
      </h1>
    )
  }
}
