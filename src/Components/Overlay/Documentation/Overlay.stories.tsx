// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {
  withKnobs,
  number,
  text,
  boolean,
  color,
  select,
} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'

// Components
import {OverlayRoot as Overlay} from '../Overlay'
import {OverlayContainer, OverlayContainerRef} from '../OverlayContainer'
import {OverlayMask, OverlayMaskRef} from '../OverlayMask'
import {OverlayHeader, OverlayHeaderRef} from '../OverlayHeader'
import {OverlayBody, OverlayBodyRef} from '../OverlayBody'
import {OverlayFooter, OverlayFooterRef} from '../OverlayFooter'
import {Button} from '../../Button/Composed/Button'

// Types
import {Gradients, ComponentColor, ComponentSize} from '../../../Types'

// Notes
import OverlayReadme from './Overlay.md'
import OverlayContainerReadme from './OverlayContainer.md'
import OverlayMaskReadme from './OverlayMask.md'
import OverlayHeaderReadme from './OverlayHeader.md'
import OverlayBodyReadme from './OverlayBody.md'
import OverlayFooterReadme from './OverlayFooter.md'
import ConfirmationOverlayReadme from './ConfirmationOverlay.md'

const instructionsElement = (
  <p>
    Look in the <strong>Knobs</strong> panel to toggle the overlay
  </p>
)

const overlayStories = storiesOf(
  'Components|Overlays/Family',
  module
).addDecorator(withKnobs)

overlayStories.add(
  'Overlay',
  () => (
    <div className="story--example">
      {instructionsElement}
      <Overlay
        transitionDuration={number('transitionDuration', 360)}
        visible={boolean('visible', false)}
        renderMaskElement={style => (
          <OverlayMask
            style={style}
            gradient={
              Gradients[
                Gradients[
                  select('gradient', mapEnumKeys(Gradients), 'GundamPilot')
                ]
              ]
            }
          />
        )}
      >
        <OverlayContainer
          maxWidth={400}
          margin={
            ComponentSize[
              select('margin', mapEnumKeys(ComponentSize), 'Medium')
            ]
          }
        >
          <OverlayHeader
            wrapText={boolean('wrap header text', false)}
            title={text('title', 'Howdy partner!')}
            onDismiss={() => {
              alert('Overlay dismiss clicked')
            }}
          />
          <OverlayBody>
            <p>
              Before you go riding off into the sunset make sure you really want
              to do this. Deleting all your data cannot be undone and can have
              dangerous and permanent side effects.
            </p>
          </OverlayBody>
          <OverlayFooter>
            <Button text="Cancel" />
            <Button text="Yes, burn it all!" color={ComponentColor.Danger} />
          </OverlayFooter>
        </OverlayContainer>
      </Overlay>
    </div>
  ),
  {
    readme: {
      content: marked(OverlayReadme),
    },
  }
)

overlayStories.add(
  'OverlayContainer',
  () => {
    const overlayContainerRef: RefObject<OverlayContainerRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(overlayContainerRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <OverlayContainer
          maxWidth={number('maxWidth', 800)}
          ref={overlayContainerRef}
        >
          <div
            className="mockComponent"
            style={{width: '100%', height: '400px'}}
          >
            Header, Body, or Footer go here
          </div>
        </OverlayContainer>
      </div>
    )
  },
  {
    readme: {
      content: marked(OverlayContainerReadme),
    },
  }
)

overlayStories.add(
  'OverlayMask',
  () => {
    const overlayMaskRef: RefObject<OverlayMaskRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(overlayMaskRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        {instructionsElement}
        <OverlayMask
          ref={overlayMaskRef}
          gradient={
            Gradients[
              Gradients[
                select('gradient', mapEnumKeys(Gradients), 'GundamPilot')
              ]
            ]
          }
          backgroundColor={color('backgroundColor', '')}
        />
      </div>
    )
  },
  {
    readme: {
      content: marked(OverlayMaskReadme),
    },
  }
)

overlayStories.add(
  'OverlayHeader',
  () => {
    const overlayHeaderRef: RefObject<OverlayHeaderRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(overlayHeaderRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <OverlayHeader
          ref={overlayHeaderRef}
          title={text('title', 'Are you sure?')}
          onDismiss={() => {
            alert('Dismissed')
          }}
        >
          <div className="mockComponent mockButton">Child Element</div>
        </OverlayHeader>
      </div>
    )
  },
  {
    readme: {
      content: marked(OverlayHeaderReadme),
    },
  }
)

overlayStories.add(
  'OverlayBody',
  () => {
    const overlayBodyRef: RefObject<OverlayBodyRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(overlayBodyRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <OverlayBody ref={overlayBodyRef}>
          <div
            className="mockComponent"
            style={{width: '100%', height: '300px'}}
          >
            This is a great place to stick a form or important text
          </div>
        </OverlayBody>
      </div>
    )
  },
  {
    readme: {
      content: marked(OverlayBodyReadme),
    },
  }
)

overlayStories.add(
  'OverlayFooter',
  () => {
    const overlayFooterRef: RefObject<OverlayFooterRef> = createRef()

    const logRef = (): void => {
      /* eslint-disable */
      console.log(overlayFooterRef.current)
      /* eslint-enable */
    }

    return (
      <div className="story--example">
        <div className="story--test-buttons">
          <button onClick={logRef}>Log Ref</button>
        </div>
        <OverlayFooter ref={overlayFooterRef}>
          <div className="mockComponent" style={{width: '120px'}}>
            Action Button
          </div>
          <div className="mockComponent" style={{width: '120px'}}>
            Action Button
          </div>
        </OverlayFooter>
      </div>
    )
  },
  {
    readme: {
      content: marked(OverlayFooterReadme),
    },
  }
)

const overlayExampleStories = storiesOf(
  'Components|Overlays/Examples',
  module
).addDecorator(withKnobs)

overlayExampleStories.add(
  'Confirmation Overlay',
  () => (
    <div className="story--example">
      {instructionsElement}
      <Overlay
        visible={boolean('visible', false)}
        renderMaskElement={style => (
          <OverlayMask
            style={style}
            gradient={
              Gradients[
                Gradients[
                  select('gradient', mapEnumKeys(Gradients), 'GundamPilot')
                ]
              ]
            }
          />
        )}
      >
        <OverlayContainer maxWidth={number('maxWidth', 400)}>
          <OverlayHeader
            title="Are you sure?"
            onDismiss={() => {
              alert('Dismissed')
            }}
          />
          <OverlayBody>
            <p>
              This action could cause a lot of things to break unexpectedly.
              We're pretty sure you don't want to do this accidentally. What
              will it be?
            </p>
          </OverlayBody>
          <OverlayFooter>
            <Button text="Cancel" />
            <Button text="Pull the Lever!" color={ComponentColor.Danger} />
          </OverlayFooter>
        </OverlayContainer>
      </Overlay>
    </div>
  ),
  {
    readme: {
      content: marked(ConfirmationOverlayReadme),
    },
  }
)
