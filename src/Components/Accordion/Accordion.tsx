// Libraries
import React, {forwardRef, useState, useEffect} from 'react'
import classnames from 'classnames'
// Styles
import './Accordion.scss'
// Types
import {IconPlacement, StandardFunctionProps} from '../../Types'

export interface AccordionProps extends StandardFunctionProps {
  /** Determines whether the expand Icon is at the left or right */
  iconPlacement?: IconPlacement
}

export const AccordionContext = React.createContext({
  isExpanded: false,
  setExpanded: (param: boolean) => {},
  iconPlacementPosition: IconPlacement.Left
})

export type AccordionRef = HTMLDivElement

export const AccordionRoot = forwardRef<AccordionRef, AccordionProps>(
  ({id, style, testID = 'alert', children, iconPlacement= IconPlacement.Left, className}, ref) => {
    const accordionClassName = classnames('cf-accordion', {
      [`${className}`]: className,
    })

    const [isExpanded, setExpanded] = useState(false)
    const [animation, setAnimation] = useState(false)
    const [iconPlacementPosition, setIconPlacementPosition] = useState(iconPlacement)

    useEffect(() => {
      if (isExpanded !== false && !animation) {
        setAnimation(true)
      }
    }, [isExpanded])

    useEffect(() => {
      setIconPlacementPosition(iconPlacement)
    },[iconPlacement])

    const accordionBodyContainerClassName = classnames(
      'cf-accordion--body-container',
      {
        [`cf-accordion--body-container--expanded`]: isExpanded,
        [`cf-accordion--body-container--collapsed`]: !isExpanded,
        [`cf-accordion--body-container--disable-animation`]: !animation,
      }
    )

    const [header, ...body] = React.Children.toArray(children)

    console.log(iconPlacement)
    const initialContextState = {
      isExpanded,
      setExpanded,
      iconPlacementPosition
    }

    return (
      <div
        ref={ref}
        className={accordionClassName}
        data-testid={testID}
        id={id}
        style={style}
      >
        <AccordionContext.Provider value={initialContextState}>
          {header}
        <div className={accordionBodyContainerClassName}>{body}</div>
        </AccordionContext.Provider>

      </div>
    )
  }
)

AccordionRoot.displayName = 'Accordion'
