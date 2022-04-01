// Libraries
import React, {useState} from 'react'
import marked from 'marked'

// Storybook
import {storiesOf} from '@storybook/react'

// Components
import {Button} from '../../Button/Composed/Button'
import {SubwayNav, SubwayNavModel} from '../SubwayNav'
import {PythonIcon} from './PythonIcon'

// Types
import {
  ComponentColor,
  ComponentSize,
  ComponentStatus,
  IconFont,
} from '../../../Types'

// Notes
import SubwayNavReadme from './SubwayNav.md'

const subwayNavStories = storiesOf('Components/SubwayNav', module)

const navigationSteps: SubwayNavModel[] = [
  {
    name: 'Overview',
    glyph: IconFont.BookOutline,
  },
  {
    name: 'Install Dependencies',
    glyph: IconFont.Install,
  },
  {
    name: 'Create a Token',
    glyph: IconFont.CopperCoin,
  },
]

subwayNavStories.add(
  'SubwayNav',
  () => {
    const [currentStep, setCurrentStep] = useState(1)

    const handleNavClick = (step: number) => {
      setCurrentStep(step)
    }

    const handleNextClick = () => {
      setCurrentStep(Math.min(currentStep + 1, navigationSteps.length))
    }

    const handlePreviousClick = () => {
      setCurrentStep(Math.max(currentStep - 1, 1))
    }

    return (
      <div className="story--example" style={{flexWrap: 'wrap'}}>
        <SubwayNav
          currentStep={currentStep}
          onStepClick={handleNavClick}
          navigationSteps={navigationSteps}
          settingUpIcon={PythonIcon}
          settingUpText="Python"
          setupTime="5 minutes"
        />

        <div
          style={{
            display: 'flex',
            flex: '1 0 100%',
            justifyContent: 'center',
            marginTop: '45px',
          }}
        >
          <Button
            onClick={handlePreviousClick}
            text="Previous"
            size={ComponentSize.Large}
            color={ComponentColor.Tertiary}
            status={
              currentStep > 1
                ? ComponentStatus.Default
                : ComponentStatus.Disabled
            }
          />
          <Button
            onClick={handleNextClick}
            text="Next"
            size={ComponentSize.Large}
            color={ComponentColor.Primary}
            status={
              currentStep < 3
                ? ComponentStatus.Default
                : ComponentStatus.Disabled
            }
          />
        </div>
      </div>
    )
  },
  {
    readme: {
      content: marked(SubwayNavReadme),
    },
  }
)
