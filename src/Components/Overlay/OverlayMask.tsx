// Libraries
import React, {PureComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {InfluxColors, Gradients, StandardProps} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

interface Props extends StandardProps {
  /** Optional gradient theme of panel*/
  gradient: Gradients
  /** Optional background color of panel, supercedes gradient prop  */
  backgroundColor?: InfluxColors | string
}

export class OverlayMask extends PureComponent<Props> {
  public static readonly displayName = 'OverlayMask'

  public static defaultProps = {
    gradient: Gradients.GundamPilot,
    testID: 'overlay--mask',
  }

  public render() {
    const {testID, className, id} = this.props

    const classname = classnames('cf-overlay--mask', {
      [`${className}`]: className,
    })

    return (
      <div
        className={classname}
        data-testid={testID}
        style={this.style}
        id={id}
      />
    )
  }

  private get style(): CSSProperties {
    const {backgroundColor, gradient, style} = this.props

    if (backgroundColor) {
      return {backgroundColor, ...style}
    }

    const colors = getColorsFromGradient(gradient)

    return {
      background: `linear-gradient(45deg,  ${colors.start} 0%,${
        colors.stop
      } 100%)`,
      ...style,
    }
  }
}
