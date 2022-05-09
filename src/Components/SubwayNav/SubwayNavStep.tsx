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
}

export const SubwayNavStep = (props: OwnProps) => {
  const {
    glyph,
    onClick,
    stepIsActive,
    stepIsComplete,
    text,
    showCheckmark,
  } = props
  const iconAndTextColor =
    stepIsActive || stepIsComplete ? InfluxColors.Pool : InfluxColors.Grey95

  const glyphFontStyle = {
    fontSize: '20px',
  }
  const completedStepStyle = {color: InfluxColors.Grey95, fontSize: '25px'}

  return (
    <span
      className={classnames('subway-navigation-step-flex-wrapper', {
        stepIsComplete: stepIsComplete,
      })}
      onClick={onClick}
    >
      <div
        className={classnames('subway-navigation-step', {
          showBorderColor: stepIsActive || stepIsComplete,
        })}
      >
        <span
          className="subway-navigation-step-icon-container"
          style={{
            color: iconAndTextColor,
            background:
              stepIsComplete && showCheckmark ? InfluxColors.Pool : '',
          }}
        >
          {stepIsComplete && showCheckmark ? (
            <Icon glyph={IconFont.Checkmark_New} style={completedStepStyle} />
          ) : (
            <Icon glyph={glyph} style={glyphFontStyle} />
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
