// Libraries
import React, {forwardRef} from 'react' // Styles
import classnames from 'classnames'

// Styles
import './Accordion.scss'

// Types
import { StandardFunctionProps} from '../../Types'

import {useAccordionContext} from './Accordion'


export interface AccordionBodyItemProps extends StandardFunctionProps {
 
}

export type AccordionBodyItemRef = HTMLDivElement

export const AccordionBodyItem = forwardRef<
  AccordionBodyItemRef,
  AccordionBodyItemProps
>(({id, style, testID = 'alert', children,className }, ref) => {

  const context = useAccordionContext();
 
  const accordionBodyContainerClassName = classnames(`cf-accordion--body`,{
    [`cf-accordion--body-alignment-${context.iconPlacementPosition}`]: context.iconPlacementPosition,
    [`${className}`]: className
  })


  return (
    <div
      ref={ref}
      className={accordionBodyContainerClassName}
      data-testid={testID}
      id={id}
      style={style}
    >
      {children}
    </div>
  )
})

AccordionBodyItem.displayName = 'AccordionBodyItem'
