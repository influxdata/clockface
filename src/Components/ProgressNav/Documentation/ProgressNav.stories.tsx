// Libraries
import React, {RefObject, createRef} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'
import {withKnobs, select, object, boolean} from '@storybook/addon-knobs'
import {mapEnumKeys} from '../../../Utils/storybook'
import { useState } from '@storybook/addons'

// Components
import {ProgressNav, ProgressNavRef, ProgressNavStepRef} from '../'

// Types
import {Orientation, ComponentSize, ComponentStatus} from '../../../Types'

// Notes
import ProgressNavReadme from './ProgressNav.md'

const progressNavStories = storiesOf('Layout|Navigation', module).addDecorator(
  withKnobs
)

progressNavStories.add(
  'ProgressNav',
  () => {
    const progressNavRef: RefObject<ProgressNavRef> = createRef()
    const progressNavStepRef: RefObject<ProgressNavStepRef> = createRef()

    const [activeStep, setActiveStep] = useState<string>('weapons')

    const logRefs = (): void => {
      /* eslint-disable */
      console.log('ProgressNav', progressNavRef.current)
      console.log('ProgressNavStep', progressNavStepRef.current)
      /* eslint-enable */
    }

    const steps = [
      {
        label: 'Chassis',
        id: 'chassis',
      },
      {
        label: 'Choose Crew',
        id: 'crew',
      },
      {
        label: 'Outfit Weapons',
        id: 'weapons',
      },
      {
        label: 'Calibrate Warp Core',
        id: 'warp-core',
      },
      {
        label: 'Armor',
        id: 'armor',
      }
    ]

    const handleStepClick = (id: string): void => {
      setActiveStep(id)
    }

    return (
      <div className="story--example">
        <ProgressNav.ProgressNav
          ref={progressNavRef}
          style={object('style', {width: '600px'})}
          orientation={
            Orientation[
              select('orientation', mapEnumKeys(Orientation), 'Horizontal')
            ]
          }
          size={
            ComponentSize[select('size', mapEnumKeys(ComponentSize), 'Small')]
          }
        >
          {steps.map(step => (
            <ProgressNav.Step
              key={step.id}
              id={step.id}
              wrapText={boolean('wrapText', false)}
              active={activeStep === step.id}
              status={
                ComponentStatus[select(`${step.id} status`, mapEnumKeys(ComponentStatus), 'Default')]
              }
              onClick={handleStepClick}
            >
              {step.label}
            </ProgressNav.Step>
          ))}
        </ProgressNav.ProgressNav>
        <div className="story--test-buttons">
          <button onClick={logRefs}>Log Refs</button>
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(ProgressNavReadme),
    },
  }
)
