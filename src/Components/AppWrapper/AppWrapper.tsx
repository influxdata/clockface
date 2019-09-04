// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {PopoverPortal} from '../Popover/PopoverPortal'

// Styles
import './AppWrapper.scss'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Hides the page header and nav menu so that the contents can take up the whole screen */
  presentationMode: boolean
}

export class AppWrapper extends PureComponent<Props> {
  public static readonly displayName = 'AppWrapper'

  public static defaultProps = {
    testID: 'app-wrapper',
    presentationMode: false,
    id: 'cf-app-wrapper',
  }

  public render() {
    const {children, testID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <PopoverPortal />
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, presentationMode} = this.props

    return classnames('clockface--app-wrapper', {
      'clockface--app-wrapper__presentation-mode': presentationMode,
      [`${className}`]: className,
    })
  }
}
