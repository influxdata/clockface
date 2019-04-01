// Libraries
import React, {Component} from 'react'

// Styles
import './Icon.scss'

// Types
import {IconFont} from '../../Types'

interface Props {
  /** Icon to display */
  glyph: IconFont
  /** Class name for custom styles */
  className?: string
  /** Used for unit and e2e tests */
  testID: string
}

export class Icon extends Component<Props> {
  public static defaultProps = {
    testID: 'icon',
  }

  render() {
    const {glyph, testID} = this.props

    const className = this.props.className
      ? `icon ${glyph} ${this.props.className}`
      : `icon ${glyph}`

    return <span className={className} data-testid={testID} />
  }
}
