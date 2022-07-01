import React, {PureComponent} from 'react'

import {IconFont} from '../../Types'

import {ClockIcon} from './SubwayNavIcons'
import {SubwayNavStep} from './SubwayNavStep'

import './SubwayNav.scss'

export interface SubwayNavModel {
  glyph: IconFont
  name: string
  isComplete?: boolean
}

interface OwnProps {
  currentStep: number
  navigationSteps: SubwayNavModel[]
  onStepClick: (step: number) => void
  settingUpIcon: JSX.Element
  settingUpText: string
  setupTime?: string
  settingUpHeader?: string
  showCheckmark?: boolean
}

export class SubwayNav extends PureComponent<OwnProps> {
  private handleClick = (step: number) => {
    this.props.onStepClick(step)
  }

  render() {
    return (
      <div className="subway-navigation-container">
        <div className="subway-navigation-flex-wrapper">
          <div className="subway-navigation-title">
            <span className="subway-navigation-title-icon">
              {this.props.settingUpIcon}
            </span>
            <div className="subway-navigation-title-text">
              <h3>{this.props.settingUpHeader ?? 'Setting Up'}</h3>
              <h6>{this.props.settingUpText}</h6>
            </div>
          </div>
          {this.props.setupTime && (
            <div className="subway-navigation-time-to-complete">
              {ClockIcon}
              <h5>{this.props.setupTime}</h5>
            </div>
          )}
          {this.props.navigationSteps.map((value, index) => (
            <SubwayNavStep
              glyph={value.glyph}
              key={value.name}
              onClick={() => {
                this.handleClick(index + 1)
              }}
              stepIsActive={index === this.props.currentStep - 1}
              stepIsComplete={
                value?.isComplete ?? index < this.props.currentStep - 1
              }
              stepIsReached={index <= this.props.currentStep - 1}
              text={value.name}
              showCheckmark={this.props.showCheckmark !== false}
            />
          ))}
        </div>
      </div>
    )
  }
}
