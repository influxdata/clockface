import React from 'react'
import classnames from 'classnames'

import {Icon} from '../Icon/Base/Icon'
import {IconFont, InfluxColors} from '../../Types'

type OwnProps = {
  glyph: IconFont
  onClick: () => void
  stepIsActive: boolean
  stepIsComplete: boolean
  text: string
  showCheckmark: boolean
  stepIsReached: boolean
}

export const SubwayNavStep = (props: OwnProps) => {
  const {
    glyph,
    onClick,
    stepIsActive,
    stepIsComplete,
    text,
    showCheckmark,
    stepIsReached,
  } = props
  const iconAndTextColor =
    stepIsActive || stepIsReached ? InfluxColors.Pool : InfluxColors.Gray6

  const glyphFontStyle = {
    fontSize: '20px',
  }
  const completedStepStyle = {color: InfluxColors.Gray6, fontSize: '25px'}
  const isActiveStepStyle = {...completedStepStyle, fontSize: '20px'}

  return (
    <span
      className={classnames('subway-navigation-step-flex-wrapper', {
        stepIsComplete: stepIsReached,
      })}
      onClick={onClick}
    >
      <div
        className={classnames('subway-navigation-step', {
          showBorderColor: stepIsReached,
        })}
      >
        <span
          className="subway-navigation-step-icon-container"
          style={{
            color: iconAndTextColor,
            background:
              (stepIsReached && stepIsComplete && showCheckmark) || stepIsActive
                ? InfluxColors.Pool
                : '',
          }}
        >
          {stepIsComplete && showCheckmark ? (
            <Icon glyph={IconFont.Checkmark_New} style={completedStepStyle} />
          ) : (
            <Icon
              glyph={glyph}
              style={stepIsActive ? isActiveStepStyle : glyphFontStyle}
            />
          )}
        </span>
        <span
          style={{
            color: iconAndTextColor,
          }}
        >
          {text.split('\n').map(function(item, index) {
            return (
              <span key={`${item}-${index}`}>
                {item}
                <br />
              </span>
            )
          })}
        </span>
      </div>
    </span>
  )
}
