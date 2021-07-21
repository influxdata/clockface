// Libraries
import React, {forwardRef, KeyboardEvent} from 'react'
import classnames from 'classnames'

// Types
import {IconFont, IconPlacement, StandardFunctionProps} from '../../Types'
import {Icon} from '../Icon/Base/Icon'

//Context
import {useAccordionContext} from './Accordion'

export interface AccordionHeaderProps extends StandardFunctionProps {}

export type AccordionHeaderRef = HTMLDivElement

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

  const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === ' ') {
      toggleExpand()
    }
  }

  const toggleExpand = () => {
    if (!context.isDisabled) {
      context.setExpanded(!context.isExpanded)
      context.onChange()
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === ' ') {
      e.preventDefault()
    }
  }

  return (
    <div
      ref={ref}
      className={AccordionHeaderClassName}
      onClick={() => {
        toggleExpand()
      }}
      tabIndex={0}
      onKeyUp={handleKeyUp}
      onKeyDown={handleKeyDown}
      id={id}
      style={style}
      data-testid={testID}
    >
      {context.iconPlacementPosition === IconPlacement.Left && (
        <div className={'cf-accordion--icon-container-left'}>
          <Icon
            glyph={IconFont.CaretDown}
            className={AccordionHeaderCaretClassName}
          />
        </div>
      )}
      <div className={'cf-accordion--header--content'}>{children}</div>
      {context.iconPlacementPosition === IconPlacement.Right && (
        <div
          onClick={() => {
            context.setExpanded(!context.isExpanded)
          }}
          className={'cf-accordion--icon-container-right'}
        >
          <Icon
            glyph={IconFont.CaretDown}
            className={AccordionHeaderCaretClassName}
          />
        </div>
      )}
    </div>
  )
})

AccordionHeader.displayName = 'AccordionHeader'
