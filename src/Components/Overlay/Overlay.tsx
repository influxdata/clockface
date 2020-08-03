// Libraries
import React, {
  FunctionComponent,
  CSSProperties,
  useLayoutEffect,
  useState,
} from 'react'
import {createPortal} from 'react-dom'
import {Transition} from 'react-spring/renderprops'
import classnames from 'classnames'
import uuid from 'uuid'
import * as easings from 'd3-ease'

// Components
import {OverlayMask} from './OverlayMask'
import {DapperScrollbars} from '../DapperScrollbars/DapperScrollbars'

// Utils
import {createPortalElement, destroyPortalElement} from '../../Utils'

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
}

const overlayPortalName = 'overlay'

export const OverlayRoot: FunctionComponent<OverlayProps> = ({
  id,
  testID = 'overlay',
  visible,
  children,
  className,
  transitionDuration = 360,
  renderMaskElement = (style: CSSProperties) => <OverlayMask style={style} />,
}) => {
  const [portalID, setPortalID] = useState<string>('')

  useLayoutEffect((): (() => void) => {
    const newPortalID = `cf-${overlayPortalName}-portal-${uuid.v4()}`
    !portalID && setPortalID(newPortalID)

    createPortalElement(newPortalID, overlayPortalName)

    return (): void => {
      destroyPortalElement(newPortalID)
    }
  }, [])

  const portalElement = document.getElementById(portalID)

  if (!portalElement) {
    return null
  }

  const transitionConfig = {
    duration: transitionDuration,
    easing: easings.easeExpInOut,
  }

  const overlayClass = classnames('cf-overlay', {
    [`${className}`]: className,
  })

  const overlay = (
    <>
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
      <Transition
        items={visible}
        from={{opacity: 0}}
        enter={{opacity: 0.7}}
        leave={{opacity: 0}}
        config={transitionConfig}
      >
        {visible => visible && (props => renderMaskElement(props))}
      </Transition>
    </>
  )

  return createPortal(overlay, portalElement)
}

OverlayRoot.displayName = 'Overlay'
