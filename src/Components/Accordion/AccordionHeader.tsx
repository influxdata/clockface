// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'
// Styles

// Types
import {
  ComponentColor,
  IconFont,
  IconPlacement,
  InfluxColors,
  StandardFunctionProps,
} from '../../Types'
import {Icon} from '../Icon/Base/Icon'
import {AccordionContext} from './Accordion'
import { SquareButton } from '../Button/Composed/SquareButton'

export interface AccordionHeaderProps extends StandardFunctionProps {
  /** Alert color */
  /** Icon to be displayed to the left of text */
  /*   title?: string
   */ backgroundColor?: InfluxColors
  expanded?: boolean
  nested?: boolean
  iconPlacement?: IconPlacement

  /*   toggle?: React.ReactNode
   */

  AccordionHeader?: React.ReactNode
}

export type AccordionHeaderRef = HTMLUListElement

export const AccordionHeader = forwardRef<
  AccordionHeaderRef,
  AccordionHeaderProps
>(
  (
    {
      id,
      style,
      testID = 'alert',
      children,
      className,
      nested = false,
      expanded = false,
      iconPlacement = IconPlacement.Left,
    },
    ref
  ) => {
    const {isExpanded, setExpanded} = React.useContext(AccordionContext)

    const caretIcon = isExpanded ? IconFont.CaretUp : IconFont.CaretDown
    const AccordionHeaderCaretClassName = classnames('cf-accordion--icon', {
      [`cf-accordion--icon-${caretIcon}`]: caretIcon,
    })

    console.log('nested', nested)
    const AccordionHeaderClassName = classnames({
      [`cf-accordion--header--active`]: isExpanded,
      [`cf-accordion--header`]: !nested,
      [`cf-accordion--header--nested`]: nested,
    })

    //const iconButtonStyle = {}

    return (
      <div className={AccordionHeaderClassName}>
        {iconPlacement === IconPlacement.Left && (
         /*  <div
            onClick={() => {
              console.log(nested)
              setExpanded(!isExpanded)
            }}
            className={'cf-accordion--icon-container'}
            tabIndex={0}
          >
            <Icon
              glyph={IconFont.CaretDown}
              className={AccordionHeaderCaretClassName}
            />
          </div> */
          <SquareButton icon={IconFont.CaretDown} color={ComponentColor.Default}
          onClick={() => {
            console.log(nested)
            setExpanded(!isExpanded)
          }}
          >

          </SquareButton>
        )}
        {children}
        {iconPlacement === IconPlacement.Right && (
          <div
            onClick={() => {
              console.log(nested)
              setExpanded(!isExpanded)
            }}
            className={'cf-accordion--icon-container'}
            tabIndex={0}

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
