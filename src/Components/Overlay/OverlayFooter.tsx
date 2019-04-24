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
} from '../../Types'

interface Props {
  /** Class name for custom styles */
  className?: string
  /** Test ID for Integration Tests */
  testID: string
}

export class OverlayFooter extends PureComponent<Props> {
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
