import React, {forwardRef} from 'react'

import {IconFont, StandardFunctionProps} from '../../Types'

import {ClockIcon} from './SubwayNavIcons'
import {SubwayNavStep} from './SubwayNavStep'

import './SubwayNav.scss'

export interface SubwayNavModel {
  glyph: IconFont
  name: string
}

export interface SubwayNavProps extends StandardFunctionProps {
  /** Current SubwayNav Step */
  currentStep: number
  /** Array of each step in the nav */
  navigationSteps: SubwayNavModel[]
  /** Function that handles clicking on a nav step */
  onStepClick: (step: number) => void
  /** Determines the nav's icon */
  settingUpIcon: JSX.Element
  /** Determines the nav's sub-header text */
  settingUpText: string
  /** Estimated time (minutes) the workflow will take a user */
  setupTime?: string
  /** Determines the nav's header text */
  settingUpHeader?: string
  /** Enable/Disables the checkmarks showing up on completed steps */
  showCheckmark?: boolean
}

export type SubwayNavRef = HTMLDivElement

export const SubwayNav = forwardRef<SubwayNavRef, SubwayNavProps>(
  (
    {
      currentStep,
      navigationSteps,
      onStepClick,
      settingUpIcon,
      settingUpText,
      setupTime,
      settingUpHeader = 'Setting Up',
      showCheckmark = true,
    },
    ref
  ) => {
    const handleClick = (step: number) => {
      onStepClick(step)
    }

    return (
      <div className="subway-navigation-container" ref={ref}>
        <div className="subway-navigation-flex-wrapper">
          <div className="subway-navigation-title">
            <span className="subway-navigation-title-icon">
              {settingUpIcon}
            </span>
            <div className="subway-navigation-title-text">
              <h3>{settingUpHeader}</h3>
              <h6>{settingUpText}</h6>
            </div>
          </div>
          {setupTime && (
            <div className="subway-navigation-time-to-complete">
              {ClockIcon}
              <h5>{setupTime}</h5>
            </div>
          )}
          {navigationSteps.map((value, index) => (
            <SubwayNavStep
              glyph={value.glyph}
              key={value.name}
              onClick={() => {
                handleClick(index + 1)
              }}
              stepIsActive={index === currentStep - 1}
              stepIsComplete={index < currentStep - 1}
              text={value.name}
              showCheckmark={showCheckmark !== false}
            />
          ))}
        </div>
      </div>
    )
  }
)

SubwayNav.displayName = 'SubwayNav'
