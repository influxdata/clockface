// Libraries
import React, {PureComponent} from 'react'

interface Props {
  title: string
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
