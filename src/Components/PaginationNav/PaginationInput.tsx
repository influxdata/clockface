// Libraries
import React, {forwardRef, ChangeEvent,} from 'react'

// Components
import {Input} from '../Inputs/Input'

// Styles
import './Pagination.scss'

// Types
import {StandardFunctionProps, ComponentSize} from '../../Types'

export interface PaginationInputProps extends StandardFunctionProps {
  currentPage?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void | undefined
  size?: ComponentSize
}

export type PaginationInputRef = HTMLLIElement
export const PaginationInput = forwardRef<
  PaginationInputRef,
  PaginationInputProps
>(
  (
    {
      id,
      style,
      testID = 'pagination-item',
      size = ComponentSize.Small,
      currentPage = 1,
      onChange,
    },
    ref
  ) => {

    return (
      <>
        <p>
          Jump to page
        </p>
        <div
          className={size}
          data-testid={testID}
          id={id}
          style={style}
        >
        <Input
          onChange={onChange}
          value={currentPage}
        />
        </div>
      </>
    )
  }
)

PaginationInput.displayName = 'PaginationInput';