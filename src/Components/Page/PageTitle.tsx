// Libraries
import React, {PureComponent} from 'react'

// Types
import {StandardProps} from '../../Types'

interface ComponentProps {
  /** Text to display in PageTitle */
  title: string
  /** Alternate text for screen readers */
  altText?: string
}

type Props = ComponentProps & StandardProps

export class PageTitle extends PureComponent<Props> {
  public static defaultProps = {
    testID: 'page-title',
  }

  public render() {
    const {title, altText, testID} = this.props

    return (
      <h1 className={this.className} title={altText} data-testid={testID}>
        {title}
      </h1>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `page--title ${className}` : 'page--title'
  }
}
