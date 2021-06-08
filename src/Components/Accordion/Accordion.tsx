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
  title?: string
}

export type AccordionRef = HTMLDivElement

export const AccordionRoot = forwardRef<AccordionRef, AccordionProps>(
  (
    {
      id,
      style,
      testID = 'alert',
      children,
      className,
      title = 'damn',
    },
    ref
  ) => {
    const accordionClassName = classnames('cf-accordion', {
      [`${className}`]: className,
    })
    const [expanded, setExpanded] = useState<boolean>(false)
    const caretIcon = expanded ? IconFont.CaretUp : IconFont.CaretDown
    const accordionCaretClassName = classnames('cf-accordion--icon', {
      [`cf-accordion--icon-${caretIcon}`]: caretIcon,
    })

    const [summary, ...childrens] = React.Children.toArray(children)
    console.log(summary)
    console.log(childrens)
    return (
      <div
        ref={ref}
        className={accordionClassName}
        data-testid={testID}
        id={id}
        style={style}
      >
        <div
          className={'cf-accordion--header'}
          onClick={() => {
            setExpanded(!expanded)
          }}
        >
          {summary}
          <span> {title}</span>
          <Icon
            glyph={IconFont.CaretDown}
            className={accordionCaretClassName}
          />
        </div>
        {expanded && (
          <div className={'cf-accordion--childrens'}> {childrens}</div>
        )}
      </div>
    )
  }
)

AccordionRoot.displayName = 'Accordion'
