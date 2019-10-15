// Libraries
import React, {forwardRef} from 'react'

// Types
import {StandardFunctionProps} from '../../Types'

export interface FormBoxProps extends StandardFunctionProps {}

export type FormBoxRef = HTMLDivElement

export const FormBox = forwardRef<FormBoxRef, FormBoxProps>(
  ({children, id, style, className = '', testID = 'form--box'}, ref) => {
    return (
      <div
        id={id}
        ref={ref}
        style={style}
        data-testid={testID}
        className={`cf-form--box ${className}`}
      >
        {children}
      </div>
    )
  }
)

FormBox.displayName = 'FormBox'
