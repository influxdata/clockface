// Libraries
import React, {forwardRef, useRef, RefObject, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {Popover} from '../'

// Types
import {
  StandardFunctionProps,
  ComponentColor,
  PopoverInteraction,
  Appearance,
} from '../../../Types'

// Styles
import './QuestionMarkTooltip.scss'

export interface QuestionMarkTooltipProps extends StandardFunctionProps {
  /** Controls the size of the question mark circle */
  diameter?: number
  /** Contents to display in tooltip */
  tooltipContents: JSX.Element | string
  /** Coloration of tooltip and question mark circle */
  color?: ComponentColor
  /** Useful for customizing the tooltip itself */
  tooltipStyle?: CSSProperties
}

export type QuestionMarkTooltipRef = HTMLSpanElement

export const QuestionMarkTooltip = forwardRef<
  QuestionMarkTooltipRef,
  QuestionMarkTooltipProps
>(
  (
    {
      id,
      style,
      className,
      tooltipStyle,
      diameter = 18,
      tooltipContents,
      color = ComponentColor.Primary,
      testID = 'question-mark-tooltip',
    },
    ref
  ) => {
    const triggerRef: RefObject<HTMLDivElement> = useRef(null)

    const circleClassName = classnames('cf-question-mark-tooltip', {
      [`${className}`]: className,
      [`cf-question-mark-tooltip__${color}`]: color,
    })

    const circleStyle = {
      width: `${diameter}px`,
      height: `${diameter}px`,
      lineHeight: `${diameter}px`,
      fontSize: `${Math.ceil(diameter * 0.75)}px`,
      ...style,
    }

    const handleActivateCircle = () => {
      triggerRef.current &&
        triggerRef.current.classList.add('cf-question-mark-tooltip__active')
    }

    const handleDeactivateCircle = () => {
      triggerRef.current &&
        triggerRef.current.classList.remove('cf-question-mark-tooltip__active')
    }

    return (
      <span ref={ref}>
        <div
          className={circleClassName}
          ref={triggerRef}
          style={circleStyle}
          data-testid={testID}
        >
          ?
        </div>
        <Popover
          distanceFromTrigger={8}
          triggerRef={triggerRef}
          showEvent={PopoverInteraction.Hover}
          hideEvent={PopoverInteraction.Hover}
          onShow={handleActivateCircle}
          onHide={handleDeactivateCircle}
          contents={() => <>{tooltipContents}</>}
          testID={`${testID}-tooltip`}
          style={tooltipStyle}
          color={color}
          appearance={Appearance.Outline}
          id={id}
        />
      </span>
    )
  }
)

QuestionMarkTooltip.displayName = 'QuestionMarkTooltip'
