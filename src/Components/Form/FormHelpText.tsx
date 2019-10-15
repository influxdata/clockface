// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormHelpTextProps extends StandardFunctionProps {
  /** Input discription  or instruction text */
  text: string
}

export type FormHelpTextRef = HTMLSpanElement

export const FormHelpText = forwardRef<FormHelpTextRef, FormHelpTextProps>(
  ({text, className, id, style, testID = 'form--help-text'}, ref) => {
    const formHelpTextClass = classnames('cf-form--help-text', {
      [`${className}`]: className,
    })

    return (
      <span
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formHelpTextClass}
      >
        {text}
      </span>
    )
  }
)

FormHelpText.displayName = 'FormHelpText'
