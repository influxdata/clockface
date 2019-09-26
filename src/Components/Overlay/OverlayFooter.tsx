// Libraries
import React, {PureComponent} from 'react'
import classnames from 'classnames'

// Components
import {FlexBox} from '../FlexBox'

// Types
import {
  FlexDirection,
  JustifyContent,
  AlignItems,
  ComponentSize,
  StandardClassProps,
} from '../../Types'

interface Props extends StandardClassProps {}

export class OverlayFooter extends PureComponent<Props> {
  public static readonly displayName = 'OverlayFooter'

  public static defaultProps = {
    testID: 'overlay--footer',
  }

  public render() {
    const {children, className, testID, id, style} = this.props

    const classname = classnames('cf-overlay--footer', {
      [`${className}`]: className,
    })

    return (
      <div className={classname} data-testid={testID} id={id} style={style}>
        <FlexBox
          margin={ComponentSize.Small}
          direction={FlexDirection.Row}
          justifyContent={JustifyContent.Center}
          alignItems={AlignItems.Center}
          stretchToFitWidth={true}
        >
          {children}
        </FlexBox>
      </div>
    )
  }
}
