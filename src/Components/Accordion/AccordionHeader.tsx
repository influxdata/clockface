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

  const caretIcon = context.isExpanded
    ? IconFont.CaretDown_New
    : IconFont.CaretRight_New
  const AccordionHeaderCaretClassName = classnames('cf-accordion--icon', {
    [`cf-accordion--icon-${caretIcon}`]: caretIcon,
    [`cf-accordion--icon--disabled`]: context.isDisabled,
  })

  const AccordionHeaderClassName = classnames(`cf-accordion--header`, {
    [`cf-accordion--header--active`]: context.isExpanded && context.hasBody,
    [`${className}`]: className,
    [`cf-accordion--header--disabled`]: context.isDisabled,
    [`cf-accordion--header--clickable`]: context.hasBody && !context.isDisabled,
  })

  const AccordionHeaderContentClassName = classnames(
    'cf-accordion--header--content',
    {
      ['cf-accordion--header--content--no-body']: !context.hasBody,
    }
  )

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
          <Icon glyph={caretIcon} className={AccordionHeaderCaretClassName} />
        </div>
      )}
      <div className={AccordionHeaderContentClassName}>{children}</div>
    </button>
  )
})

AccordionHeader.displayName = 'AccordionHeader'
