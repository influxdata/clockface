// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {OverlayContainer} from './OverlayContainer'
import {OverlayMask} from './OverlayMask'
import {OverlayHeader} from './OverlayHeader'
import {OverlayBody} from './OverlayBody'
import {OverlayFooter} from './OverlayFooter'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Types
import {StandardProps, InfluxColors} from '../../Types'

// Styles
import './Overlay.scss'

interface Props extends StandardProps {
  /** Controls showing/hiding the overlay */
  visible: boolean
  /** Will replace the mask element with a custom element, useful for customizing the mask appearance */
  renderMaskElement: JSX.Element
}

interface State {
  showChildren: boolean
}

export class Overlay extends Component<Props, State> {
  public static readonly displayName = 'Overlay'

  public static Container = OverlayContainer
  public static Mask = OverlayMask
  public static Header = OverlayHeader
  public static Body = OverlayBody
  public static Footer = OverlayFooter

  public static defaultProps = {
    testID: 'overlay',
    renderMaskElement: <OverlayMask />,
  }

  public static getDerivedStateFromProps(props: Props) {
    if (props.visible) {
      return {showChildren: true}
    }

    return {}
  }

  private animationTimer: number

  constructor(props: Props) {
    super(props)

    this.state = {
      showChildren: false,
    }
  }

  public componentDidUpdate(prevProps: Props) {
    if (prevProps.visible && !this.props.visible) {
      clearTimeout(this.animationTimer)
      this.animationTimer = window.setTimeout(this.hideChildren, 300)
    }
  }

  public render() {
    const {testID, renderMaskElement, id} = this.props

    return (
      <DapperScrollbars
        className={this.overlayClass}
        thumbStartColor={InfluxColors.White}
        thumbStopColor={InfluxColors.Moonstone}
        autoHide={false}
        testID={testID}
        id={id}
      >
        {this.childContainer}
        {renderMaskElement}
      </DapperScrollbars>
    )
  }

  private get childContainer(): JSX.Element {
    const {children, testID} = this.props
    const {showChildren} = this.state

    if (showChildren) {
      return (
        <div
          className="overlay--transition"
          data-testid={`${testID}--children`}
        >
          {children}
        </div>
      )
    }

    return (
      <div
        className="overlay--transition"
        data-testid={`${testID}--children`}
      />
    )
  }

  private get overlayClass(): string {
    const {visible, className} = this.props

    return classnames('overlay', {
      show: visible,
      [`${className}`]: className,
    })
  }

  private hideChildren = (): void => {
    this.setState({showChildren: false})
  }
}
