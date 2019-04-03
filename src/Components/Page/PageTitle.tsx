// Libraries
import React, {PureComponent} from 'react'

interface Props {
  /** Text to display in PageTitle */
  title: string
  /** Alternate text for screen readers */
  altText?: string
}

export class PageTitle extends PureComponent<Props> {
  public render() {
    const {title, altText} = this.props

    return (
      <h1 className="page--title" title={altText}>
        {title}
      </h1>
    )
  }
}
