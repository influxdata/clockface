// Libraries
import React, {useRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'
import {useState} from '@storybook/addons'

// Components
import {Popover} from '../Components/Popover'
import {Overlay} from '../Components/Overlay'
import {Notification} from '../Components/Notification'
import {RightClick} from '../Components/RightClick'

// Types
import {
  ComponentColor,
  IconFont,
  ComponentSize,
  Gradients,
  Appearance,
} from '../Types'

// Notes
import PortalsReadme from './Portals.md'

const alertStories = storiesOf('Sandbox|Portal Elements', module).addDecorator(
  withKnobs
)

alertStories.add(
  'Interplay of all portals',
  () => {
    const triggerRefA = useRef<HTMLDivElement>(null)
    const triggerRefB = useRef<HTMLDivElement>(null)
    const triggerRefC = useRef<HTMLDivElement>(null)
    const [firstOverlayState, setFirstOverlayState] = useState<boolean>(false)
    const [secondOverlayState, setSecondOverlayState] = useState<boolean>(false)

    const handleDismissFirstOverlay = (): void => {
      setFirstOverlayState(false)
    }

    const handleShowFirstOverlay = (): void => {
      setFirstOverlayState(true)
    }

    const handleDismissSecondOverlay = (): void => {
      setSecondOverlayState(false)
    }

    const handleShowSecondOverlay = (): void => {
      setSecondOverlayState(true)
    }

    return (
      <div className="story--example">
        <div className="mockComponent mockButton" ref={triggerRefA}>
          Click Me
        </div>
        <Popover
          triggerRef={triggerRefA}
          appearance={Appearance.Outline}
          color={ComponentColor.Primary}
          contents={() => (
            <div
              className="mockComponent mockButton"
              onClick={handleShowFirstOverlay}
            >
              Show Overlay
            </div>
          )}
        />
        <Notification
          icon={IconFont.CrownSolid}
          size={ComponentSize.Small}
          gradient={Gradients.PolarExpress}
        >
          I am notifying you!
        </Notification>
        <Overlay visible={firstOverlayState}>
          <Overlay.Container maxWidth={500}>
            <Overlay.Header
              title="Overlay Example"
              onDismiss={handleDismissFirstOverlay}
            />
            <Overlay.Body>
              <p>I should be below the Notification</p>
              <div className="mockComponent mockButton" ref={triggerRefB}>
                Another Popover
              </div>
              <div className="mockComponent mockButton" ref={triggerRefC}>
                Right Click Me
              </div>
              <Popover
                triggerRef={triggerRefB}
                appearance={Appearance.Solid}
                color={ComponentColor.Success}
                contents={() => <>I'm a nested popover!</>}
              />
              <RightClick triggerRef={triggerRefC}>
                <RightClick.MenuItem onClick={handleShowSecondOverlay}>
                  Show another overlay
                </RightClick.MenuItem>
              </RightClick>
            </Overlay.Body>
          </Overlay.Container>
        </Overlay>
        <Overlay visible={secondOverlayState}>
          <Overlay.Container maxWidth={300}>
            <Overlay.Header
              title="Another Overlay"
              onDismiss={handleDismissSecondOverlay}
            />
            <Overlay.Body>
              <p>
                I should be on top of the previous Overlay but still underneath
                the Notification
              </p>
            </Overlay.Body>
          </Overlay.Container>
        </Overlay>
      </div>
    )
  },
  {
    readme: {
      content: marked(PortalsReadme),
    },
  }
)
