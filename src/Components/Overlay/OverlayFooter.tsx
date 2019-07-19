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
  public static readonly displayName = 'OverlayFooter'

  public static defaultProps = {
    testID: 'overlay--footer',
  }

  public render() {
    const {children, className, testID, id} = this.props

    const classname = classnames('cf-overlay--footer', {
      [`${className}`]: className,
    })

    return (
      <div className={classname} data-testid={testID} id={id}>
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
