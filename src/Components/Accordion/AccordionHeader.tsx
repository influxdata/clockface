// Libraries
import React, {forwardRef, KeyboardEvent} from 'react'
import classnames from 'classnames'
// Styles

// Types
import {
  IconFont,
  IconPlacement,
  StandardFunctionProps,
} from '../../Types'
import {Icon} from '../Icon/Base/Icon'
import {AccordionContext} from './Accordion'

export interface AccordionHeaderProps extends StandardFunctionProps {
  /** Alert color */
  /** Expand Icon to be displa*/
  expanded?: boolean

}

export type AccordionHeaderRef = HTMLDivElement

export const AccordionHeader = forwardRef<
  AccordionHeaderRef,
  AccordionHeaderProps
>(
  (
    {
      id,
      style,
      testID = 'accordion-header',
      children,
      className,
    },
    ref
  ) => {
    const {isExpanded, setExpanded, iconPlacementPosition} = React.useContext(AccordionContext)
    const caretIcon = isExpanded ? IconFont.CaretUp : IconFont.CaretDown
    const AccordionHeaderCaretClassName = classnames('cf-accordion--icon', {
      [`cf-accordion--icon-${caretIcon}`]: caretIcon,
    })

    const AccordionHeaderClassName = classnames(`cf-accordion--header`,{
      [`cf-accordion--header--active`]: isExpanded,
      [`${className}`]: className,
    })

    const handleKeyUp = (e: KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === ' ') {
        setExpanded(!isExpanded)
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
          setExpanded(!isExpanded)
        }}
        tabIndex={0}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        id={id}
        style={style}
        data-testid={testID}

      >
        {iconPlacementPosition === IconPlacement.Left && (
          <div className={'cf-accordion--icon-container-left'}>
            <Icon
              glyph={IconFont.CaretDown}
              className={AccordionHeaderCaretClassName}
            />
          </div>
        )}
        <div className={'cf-accordion--header--content'}>
        {children}
        </div>
        {iconPlacementPosition === IconPlacement.Right && (
          <div
            onClick={() => {
              setExpanded(!isExpanded)
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
  }
)

AccordionHeader.displayName = 'AccordionHeader'
