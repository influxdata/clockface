// Libraries
import React, {forwardRef} from 'react' // Styles
/* import classnames from 'classnames'
 */ import './Accordion.scss'

// Types
import {/* IconFont */ InfluxColors, StandardFunctionProps} from '../../Types'
import classnames from 'classnames'

export interface AccordionBodyItemProps extends StandardFunctionProps {
  /** Alert color */
  /** Icon to be displayed to the left of text */
  /*   title?: string
   */ backgroundColor?: InfluxColors
  nested?: boolean
  //accordionHeader?: React.ReactNode;
}

export type AccordionBodyItemRef = HTMLDivElement

export const AccordionBodyItem = forwardRef<
  AccordionBodyItemRef,
  AccordionBodyItemProps
>(({id, style, testID = 'alert', children, nested}, ref) => {
  /*   const childArray = React.Children.toArray(children);
    
    const lastChild = nested? childArray.pop(): null;

    const childToRender = React.Children.map(childArray, child => (
      <div className="cf-accordion--body">{child}</div>
    )) */

  const accordionBodyContainerClassName = classnames({
    [`cf-accordion--body`]: !nested,
    [`cf-accordion--nested`]: nested,
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
