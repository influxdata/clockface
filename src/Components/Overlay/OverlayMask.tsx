// Libraries
import React, {PureComponent, CSSProperties} from 'react'
import classnames from 'classnames'

// Types
import {InfluxColors, Gradients, StandardProps} from '../../Types'

// Constants
import {getColorsFromGradient} from '../../Constants/colors'

interface ComponentProps {
  /** Optional gradient theme of panel*/
  gradient: Gradients
  /** Optional background color of panel, supercedes gradient prop  */
  backgroundColor?: InfluxColors | string
}

type Props = ComponentProps & StandardProps

export class OverlayMask extends PureComponent<Props> {
  public static defaultProps = {
    gradient: Gradients.GundamPilot,
    testID: 'overlay--mask',
  }

  public render() {
    const {testID, className} = this.props

    const classname = classnames('overlay--mask', {[`${className}`]: className})

    return (
      <div className={classname} data-testid={testID} style={this.styles} />
    )
  }

  private get styles(): CSSProperties {
    const {backgroundColor, gradient} = this.props

    if (backgroundColor) {
      return {backgroundColor}
    }

    const colors = getColorsFromGradient(gradient)

    return {
      background: `linear-gradient(45deg,  ${colors.start} 0%,${
        colors.stop
      } 100%)`,
    }
  }
}
