// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {Alignment, StandardClassProps} from '../../Types'

interface Props extends StandardClassProps {
  /** Text alignment of contents */
  alignment: Alignment
  /** If true the contents of this cell will be hidden until the containing row is hovered */
  revealOnHover: boolean
}

export class IndexListRowCell extends Component<Props> {
  public static readonly displayName = 'IndexListCell'

  public static defaultProps = {
    alignment: Alignment.Left,
    revealOnHover: false,
    testID: 'table-cell',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <td className={this.className}>
        <div
          className="index-list--cell"
          data-testid={testID}
          id={id}
          style={style}
        >
          {children}
        </div>
      </td>
    )
  }

  private get className(): string {
    const {alignment, revealOnHover, className} = this.props

    return classnames('index-list--row-cell', {
      'index-list--show-hover': revealOnHover,
      'index-list--align-left': alignment === Alignment.Left,
      'index-list--align-center': alignment === Alignment.Center,
      'index-list--align-right': alignment === Alignment.Right,
      [`${className}`]: className,
    })
  }
}
