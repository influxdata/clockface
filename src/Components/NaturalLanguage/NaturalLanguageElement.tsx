// Libraries
import React, {Component, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Optional fixed with of element */
  widthPixels?: number
  /** Optional proportion of element within row */
  sizeProportion: number
}

export class NaturalLanguageElement extends Component<Props> {
  public static readonly displayName = 'NaturalLanguageElement'

  public static defaultProps = {
    testID: 'natural-language--element',
    sizeProportion: 1,
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={this.style}
      >
        {children}
      </div>
    )
  }

  private get style(): CSSProperties {
    const {widthPixels, sizeProportion} = this.props

    const flexBasis = widthPixels ? `${widthPixels}px` : '0'
    const flexGrow = sizeProportion

    return {
      flexBasis,
      flexGrow,
    }
  }

  private get className(): string {
    const {className} = this.props

    return classnames('cf-natural-language--element', {
      [`${className}`]: className,
    })
  }
}
