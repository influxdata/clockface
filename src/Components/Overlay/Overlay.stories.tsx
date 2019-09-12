// Libraries
import * as React from 'react'
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
import {mapEnumKeys} from 'src/Utils/storybook'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Overlay} from 'src/Components/Overlay/Overlay'
import {OverlayContainer} from 'src/Components/Overlay/OverlayContainer'
import {OverlayMask} from 'src/Components/Overlay/OverlayMask'
import {OverlayHeader} from 'src/Components/Overlay/OverlayHeader'
import {OverlayBody} from 'src/Components/Overlay/OverlayBody'
import {OverlayFooter} from 'src/Components/Overlay/OverlayFooter'
import {Button} from 'src/Components/Button/Composed/Button'

// Types
import {Gradients, ComponentColor} from 'src/Types'

// Notes
import OverlayReadme from 'src/Components/Overlay/Overlay.md'
import OverlayContainerReadme from 'src/Components/Overlay/OverlayContainer.md'
import OverlayMaskReadme from 'src/Components/Overlay/OverlayMask.md'
import OverlayHeaderReadme from 'src/Components/Overlay/OverlayHeader.md'
import OverlayBodyReadme from 'src/Components/Overlay/OverlayBody.md'
import OverlayFooterReadme from 'src/Components/Overlay/OverlayFooter.md'
import ConfirmationOverlayReadme from 'src/Components/Overlay/ConfirmationOverlay.md'

const instructionsElement = (
  <p>
    Look in the <strong>Knobs</strong> panel to toggle the overlay
  </p>
)

const overlayStories = storiesOf('Components|Overlays/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

overlayStories.add(
  'Overlay',
  () => (
    <div className="story--example">
      {instructionsElement}
      <Overlay visible={boolean('visible', false)}>
        <OverlayContainer maxWidth={400}>
          <OverlayHeader
            title="Howdy partner!"
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
  () => (
    <div className="story--example">
      <OverlayContainer maxWidth={number('maxWidth', 800)}>
        <div className="mockComponent" style={{width: '100%', height: '400px'}}>
          Header, Body, or Footer go here
        </div>
      </OverlayContainer>
    </div>
  ),
  {
    readme: {
      content: marked(OverlayContainerReadme),
    },
  }
)

overlayStories.add(
  'OverlayMask',
  () => (
    <div
      className={`story--example overlay--example ${
        boolean('visible', false) ? 'show-overlay' : ''
      }`}
    >
      {instructionsElement}
      <OverlayMask
        gradient={
          Gradients[
            Gradients[select('gradient', mapEnumKeys(Gradients), 'GundamPilot')]
          ]
        }
        backgroundColor={color('backgroundColor', '')}
      />
    </div>
  ),
  {
    readme: {
      content: marked(OverlayMaskReadme),
    },
  }
)

overlayStories.add(
  'OverlayHeader',
  () => (
    <div className="story--example">
      <OverlayHeader
        title={text('title', 'Are you sure?')}
        onDismiss={() => {
          alert('Dismissed')
        }}
      />
    </div>
  ),
  {
    readme: {
      content: marked(OverlayHeaderReadme),
    },
  }
)

overlayStories.add(
  'OverlayBody',
  () => (
    <div className="story--example">
      <OverlayBody>
        <div className="mockComponent" style={{width: '100%', height: '300px'}}>
          This is a great place to stick a form or important text
        </div>
      </OverlayBody>
    </div>
  ),
  {
    readme: {
      content: marked(OverlayBodyReadme),
    },
  }
)

overlayStories.add(
  'OverlayFooter',
  () => (
    <div className="story--example">
      <OverlayFooter>
        <div className="mockComponent" style={{width: '120px'}}>
          Action Button
        </div>
        <div className="mockComponent" style={{width: '120px'}}>
          Action Button
        </div>
      </OverlayFooter>
    </div>
  ),
  {
    readme: {
      content: marked(OverlayFooterReadme),
    },
  }
)

const overlayExampleStories = storiesOf('Components|Overlays/Examples', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

overlayExampleStories.add(
  'Confirmation Overlay',
  () => (
    <div className="story--example">
      {instructionsElement}
      <Overlay
        visible={boolean('visible', false)}
        renderMaskElement={
          <OverlayMask
            gradient={
              Gradients[
                Gradients[
                  select('gradient', mapEnumKeys(Gradients), 'GundamPilot')
                ]
              ]
            }
          />
        }
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
