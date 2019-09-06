// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Types
import {StandardProps} from '../../Types'

// Constants
import {DEFAULT_OFFSET} from '../../Constants/pageLayout'

interface Props extends StandardProps {
  /** If a PageHeaderCenter is present PageHeaderRight will automatically get assigned this value */
  offsetPixels: number
}

export class PageHeaderRight extends Component<Props> {
  public static readonly displayName = 'PageHeaderRight'

  public static defaultProps = {
    offsetPixels: DEFAULT_OFFSET,
    testID: 'page-header--right',
  }

  public render() {
    const {children, testID, id} = this.props

    return (
      <div
        className={this.className}
        // style={this.style}
        data-testid={testID}
        id={id}
      >
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, children} = this.props

    const noChildren = React.Children.count(children) === 0

    return classnames('cf-page-header--right', {
      'cf-page-header--no-children': noChildren,
      [`${className}`]: className,
    })
  }

  // private get style(): CSSProperties | undefined {
  //   const {offsetPixels, style} = this.props

  //   if (offsetPixels === DEFAULT_OFFSET) {
  //     return style
  //   }

  //   return {
  //     flex: `1 0 calc(50% - ${offsetPixels}px)`,
  //     ...style,
  //   }
  // }
}
