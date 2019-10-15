// Libraries
import React, {forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormFooterProps extends StandardFunctionProps {}

export type FormFooterRef = HTMLDivElement

export const FormFooter = forwardRef<FormFooterRef, FormFooterProps>(
  ({className, children, testID = 'form--footer', id, style}, ref) => {
    const formFooterClass = classnames('cf-form--element cf-form--footer', {
      [`${className}`]: className,
    })
    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={formFooterClass}
      >
        {children}
      </div>
    )
  }
)

FormFooter.displayName = 'FormFooter'
