// Libraries
import * as React from 'react'

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
import {mapEnumKeys} from '../../../.storybook/utils'
import {jsxDecorator} from 'storybook-addon-jsx'

// Components
import {Overlay} from './Overlay'
import {OverlayContainer} from './OverlayContainer'
import {OverlayMask} from './OverlayMask'
import {OverlayHeader} from './OverlayHeader'
import {OverlayBody} from './OverlayBody'
import {OverlayFooter} from './OverlayFooter'
import {Button} from '../Button/Composed/Button'

// Types
import {Gradients, ComponentColor} from '../../Types'

const overlayStories = storiesOf('Components|Overlays/Family', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

overlayStories.add('Overlay', () => (
  <Overlay visible={boolean('visible', true)} />
))

overlayStories.add('OverlayContainer', () => (
  <OverlayContainer maxWidth={number('maxWidth', 800)}>
    <div
      className="mockComponent"
      style={{width: '100%', height: '66px', marginBottom: '2px'}}
    >
      OverlayHeader
    </div>
    <div className="mockComponent" style={{width: '100%', height: '200px'}}>
      OverlayBody
    </div>
  </OverlayContainer>
))

overlayStories.add('OverlayMask', () => (
  <div className="mockOverlay">
    <OverlayMask
      gradient={
        Gradients[
          Gradients[select('gradient', mapEnumKeys(Gradients), 'GundamPilot')]
        ]
      }
      backgroundColor={color('backgroundColor', '')}
    />
  </div>
))

overlayStories.add('OverlayHeader', () => (
  <OverlayHeader
    title={text('title', 'Are you sure?')}
    onDismiss={() => {
      alert('Dismissed')
    }}
  />
))

overlayStories.add('OverlayBody', () => (
  <OverlayBody>
    <div className="mockComponent" style={{width: '100%', height: '300px'}} />
  </OverlayBody>
))

overlayStories.add('OverlayFooter', () => (
  <OverlayFooter>
    <div className="mockComponent" style={{width: '100px'}}>
      Button
    </div>
    <div className="mockComponent" style={{width: '100px'}}>
      Button
    </div>
  </OverlayFooter>
))

const overlayExampleStories = storiesOf('Components|Overlays/Examples', module)
  .addDecorator(withKnobs)
  .addDecorator(jsxDecorator)

overlayExampleStories.add('Confirmation Overlay', () => (
  <Overlay
    visible={boolean('visible', true)}
    renderMaskElement={
      <OverlayMask
        gradient={
          Gradients[
            Gradients[select('gradient', mapEnumKeys(Gradients), 'GundamPilot')]
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
          This action could cause a lot of things to break unexpectedly. We're
          pretty sure you don't want to do this accidentally. What will it be?
        </p>
      </OverlayBody>
      <OverlayFooter>
        <Button text="Cancel" />
        <Button text="Pull the Lever!" color={ComponentColor.Danger} />
      </OverlayFooter>
    </OverlayContainer>
  </Overlay>
))
