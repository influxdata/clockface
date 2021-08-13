// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {IconFont, Direction, StandardFunctionProps} from '../../Types'
import {Icon} from '../Icon/Base/Icon'

//Context
import {useAccordionContext} from './Accordion'

export interface AccordionHeaderProps extends StandardFunctionProps {}

export type AccordionHeaderRef = HTMLButtonElement

export const AccordionHeader = forwardRef<
  AccordionHeaderRef,
  AccordionHeaderProps
>(({id, style, testID = 'accordion-header', children, className}, ref) => {
  const context = useAccordionContext()

  const caretIcon = context.isExpanded ? IconFont.CaretUp : IconFont.CaretDown
  const AccordionHeaderCaretClassName = classnames('cf-accordion--icon', {
    [`cf-accordion--icon-${caretIcon}`]: caretIcon,
    [`cf-accordion--icon--disabled`]: context.isDisabled,
  })

  const AccordionHeaderClassName = classnames(`cf-accordion--header`, {
    [`cf-accordion--header--active`]: context.isExpanded,
    [`${className}`]: className,
    [`cf-accordion--header--disabled`]: context.isDisabled,
  })

  const toggleExpand = () => {
    if (!context.isDisabled) {
      context.setExpanded(!context.isExpanded)
      context.onChange()
    }
  }

  return (
    <button
      type="button"
      ref={ref}
      className={AccordionHeaderClassName}
      onClick={() => {
        toggleExpand()
      }}
      id={id}
      style={style}
      data-testid={testID}
    >
      {context.iconPlacementPosition === Direction.Left && (
        <div
          className={
            'cf-accordion--icon-container cf-accordion--icon-container-left'
          }
        >
          <Icon
            glyph={IconFont.CaretDown}
            className={AccordionHeaderCaretClassName}
          />
        </div>
      )}
      <div className={'cf-accordion--header--content'}>{children}</div>
      {context.iconPlacementPosition === Direction.Right && (
        <div
          onClick={() => {
            context.setExpanded(!context.isExpanded)
          }}
          className={
            'cf-accordion--icon-container cf-accordion--icon-container-right'
          }
        >
          <Icon
            glyph={IconFont.CaretDown}
            className={AccordionHeaderCaretClassName}
          />
        </div>
      )}
    </button>
  )
})

AccordionHeader.displayName = 'AccordionHeader'
