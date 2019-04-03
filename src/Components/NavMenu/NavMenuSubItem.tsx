// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

interface Props {
  title: string
  active: boolean
  linkElement: JSX.Element
  className?: string
}

export class NavMenuSubItem extends PureComponent<Props> {
  public render() {
    const {active, className, linkElement, title} = this.props

    return React.cloneElement(linkElement, {
      className: classnames('nav--sub-item', {
        active,
        [`${className}`]: className,
      }),
      children: title,
    })
  }
}
