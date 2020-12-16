// Libraries
import React, {useEffect, FunctionComponent, CSSProperties} from 'react'
import {Transition} from 'react-spring/renderprops'
import classnames from 'classnames'
import * as easings from 'd3-ease'

// Components
import {OverlayMask} from './OverlayMask'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Utils
import {usePortal} from '../../Utils/portals'

// Types
import {StandardFunctionProps, InfluxColors} from '../../Types'

// Styles
import './Overlay.scss'

export interface OverlayProps extends StandardFunctionProps {
  /** Controls visibility of the overlay */
  visible: boolean
  /** Will replace the mask element with a custom element, useful for customizing the mask appearance */
  renderMaskElement?: (style: CSSProperties) => JSX.Element
  /** Controls the transition timing */
  transitionDuration?: number
  /** Accepts state handler for visible prop to enable escape press functionality */
  onEscape?: (visible: boolean) => void
}

export const OverlayRoot: FunctionComponent<OverlayProps> = ({
  id,
  testID = 'overlay',
  visible,
  children,
  className,
  transitionDuration = 360,
  onEscape,
  renderMaskElement = (style: CSSProperties) => <OverlayMask style={style} />,
}) => {
  const {
    addElementToPortal,
    //  addEventListenerToPortal,
    // removeEventListenerFromPortal,
  } = usePortal()

  const transitionConfig = {
    duration: transitionDuration,
    easing: easings.easeExpInOut,
  }

  const overlayClass = classnames('cf-overlay', {
    [`${className}`]: className,
  })

  const handleEscapeKey = (e: KeyboardEvent): void => {
    if (e.key === 'Escape' && visible && onEscape) {
      onEscape(false)
    }
  }

  const OverlayRender = () => {
    useEffect((): (() => void) => {
      window.addEventListener('keydown', handleEscapeKey)

      return (): void => {
        window.removeEventListener('keydown', handleEscapeKey)
      }
    }, [])
    return (
      <>
        <Transition
          items={visible}
          from={{opacity: 0}}
          enter={{opacity: 0.7}}
          leave={{opacity: 0}}
          config={transitionConfig}
        >
          {visible => visible && (props => renderMaskElement(props))}
        </Transition>
        <Transition
          items={visible}
          from={{opacity: 0, transform: 'translateY(44px)'}}
          enter={{opacity: 1, transform: 'translateY(0)'}}
          leave={{opacity: 0, transform: 'translateY(44px)'}}
          config={transitionConfig}
        >
          {visible =>
            visible &&
            (props => (
              <DapperScrollbars
                className={overlayClass}
                thumbStartColor={InfluxColors.White}
                thumbStopColor={InfluxColors.Hydrogen}
                noScrollX={true}
                autoHide={false}
                testID={testID}
                id={id}
              >
                <div
                  className="cf-overlay--children"
                  data-testid={`${testID}--children`}
                  style={props}
                >
                  {children}
                </div>
              </DapperScrollbars>
            ))
          }
        </Transition>
      </>
    )
  }

  return addElementToPortal(<OverlayRender />)
}

OverlayRoot.displayName = 'Overlay'
