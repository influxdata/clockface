// Libraries
import React, {forwardRef, useContext} from 'react' // Styles
import classnames from 'classnames'

// Styles
import './Accordion.scss'

// Types
import { StandardFunctionProps} from '../../Types'

import {AccordionContext} from './Accordion'


export interface AccordionBodyItemProps extends StandardFunctionProps {
 
}

export type AccordionBodyItemRef = HTMLDivElement

export const AccordionBodyItem = forwardRef<
  AccordionBodyItemRef,
  AccordionBodyItemProps
>(({id, style, testID = 'alert', children,className }, ref) => {

  const {iconPlacementPosition} = useContext(AccordionContext);
  const accordionBodyContainerClassName = classnames(`cf-accordion--body`,{
    [`cf-accordion--body-alignment-${iconPlacementPosition}`]: iconPlacementPosition,
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
