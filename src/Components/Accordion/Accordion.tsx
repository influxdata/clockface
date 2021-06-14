// Libraries
import React, {forwardRef, useState} from 'react'
import classnames from 'classnames'
// Styles
import './Accordion.scss'

// Types
import { IconFont, InfluxColors, StandardFunctionProps} from '../../Types'
import {Icon} from '../Icon/Base/Icon'

export interface AccordionProps extends StandardFunctionProps {
  /** Alert color */
  /** Icon to be displayed to the left of text */
/*   title?: string
 */  backgroundColor?: InfluxColors
     expanded?: boolean
/*   toggle?: React.ReactNode
 */  
     accordionHeader?: React.ReactNode; 
}

export type AccordionRef = HTMLUListElement

export const AccordionRoot = forwardRef<AccordionRef, AccordionProps>(
  (
    {
      id,
      style,
      testID = 'alert',
      children,
      className,
      expanded = false,
      accordionHeader
    },
    ref
  ) => {
    const accordionClassName = classnames('cf-accordion', { 
      [`${className}`]: className,
    })

    const [isExpanded, setExpanded] = useState<boolean>(expanded)
    const caretIcon = isExpanded ? IconFont.CaretUp : IconFont.CaretDown
    const accordionCaretClassName = classnames('cf-accordion--icon', {
      [`cf-accordion--icon-${caretIcon}`]: caretIcon,
    })
    
    const accordionHeaderClassName = classnames('cf-accordion--header', {
      [`cf-accordion--header--active`]: isExpanded,
    })

    const accordionBodyContainerClassName = classnames('cf-accordion--body-container', {
      [`cf-accordion--body-container--expanded`]: isExpanded,
      [`cf-accordion--body-container--collapsed`]: !isExpanded,

    })

    //const [header, ...childrens]

    const childArray = React.Children.map(children, child => (
      <div className="cf-accordion--body">{child}</div>
    ))



    return (
      <ul
        ref={ref}
        className={accordionClassName}
        data-testid={testID}
        id={id}
        style={style}
      >
        <li
          className={accordionHeaderClassName} 
        >
          {accordionHeader}
          <div onClick={() => {
            setExpanded(!isExpanded)
          }}>
          <Icon
            glyph={IconFont.CaretDown}
            className={accordionCaretClassName}
          />
          </div>
        </li>
        <ul className={accordionBodyContainerClassName}>
        {
         childArray
        }
        </ul>
      </ul>
    )
  }
)

AccordionRoot.displayName = 'Accordion'
