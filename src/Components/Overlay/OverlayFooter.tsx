// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {ComponentSpacer} from '../ComponentSpacer/ComponentSpacer'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
  StandardProps,
} from '../../Types'

interface Props extends StandardProps {}

export class OverlayFooter extends PureComponent<Props> {
  public static readonly displayName = 'Overlay.Footer'

  public static defaultProps = {
    testID: 'overlay--footer',
  }

  public render() {
    const {children, className, testID} = this.props

    const classname = classnames('overlay--footer', {
      [`${className}`]: className,
    })

    return (
      <div className={classname} data-testid={testID}>
        <ComponentSpacer
          margin={ComponentSize.Small}
          direction={FlexDirection.Row}
          justifyContent={JustifyContent.Center}
          alignItems={AlignItems.Center}
          stretchToFitWidth={true}
        >
          {children}
        </ComponentSpacer>
      </div>
    )
  }
}
