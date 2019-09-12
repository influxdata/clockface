// Libraries
import React, {Component} from 'react'

// Types
import {IconFont, StandardClassProps} from 'src/Types'

interface Props extends StandardClassProps {
  /** Icon to display */
  glyph: IconFont | string
}

export class Icon extends Component<Props> {
  public static readonly displayName = 'Icon'

  public static defaultProps = {
    testID: 'icon',
  }

  render() {
    const {glyph, testID, id, style} = this.props

    const className = this.props.className
      ? `cf-icon ${glyph} ${this.props.className}`
      : `cf-icon ${glyph}`

    return (
      <span className={className} data-testid={testID} style={style} id={id} />
    )
  }
}
