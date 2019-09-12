// Libraries
import React, {FunctionComponent, createRef, CSSProperties} from 'react'
import classnames from 'classnames'

// Components
import {Popover} from '../Base/Popover'

// Types
import {
  StandardFunctionProps,
  ComponentColor,
  PopoverInteraction,
  PopoverType,
} from '../../../Types'

// Styles
import './QuestionMarkTooltip.scss'

interface Props extends StandardFunctionProps {
  /** Controls the size of the question mark circle */
  diameter: number
  /** Contents to display in tooltip */
  tooltipContents: JSX.Element | string
  /** Coloration of tooltip and question mark circle */
  color: ComponentColor
  /** Useful for customizing the tooltip itself */
  tooltipStyle?: CSSProperties
}

export const QuestionMarkTooltip: FunctionComponent<Props> = ({
  diameter = 18,
  tooltipContents,
  color = ComponentColor.Primary,
  tooltipStyle,
  style,
  testID = 'question-mark-tooltip',
  className,
  id,
}) => {
  const triggerRef = createRef<HTMLDivElement>()

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
    <>
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
        type={PopoverType.Outline}
        id={id}
      />
    </>
  )
}

QuestionMarkTooltip.displayName = 'QuestionMarkTooltip'
