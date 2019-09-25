// Libraries
import React, {FunctionComponent, MouseEvent, useState, forwardRef} from 'react'
import classnames from 'classnames'

// Types
import {StandardFunctionProps, ComponentSize, InfluxColors} from '../../Types'

// Utils
import {generateLabelStyle} from '../../Utils'

// Styles
import './Label.scss'

export interface LabelProps extends StandardFunctionProps {
  /** Unique value to be returned when Label is clicked */
  id: string
  /** Name of the Label, appears inside the label */
  name: string
  /** Description of Label, appears on hover */
  description: string
  /** Used to colorize the label, can be hexcode or rgba */
  color: InfluxColors | string
  /** Optional click handler */
  onClick?: (id: string) => void
  /** Optional delete handler, if passed in the delete button is rendered */
  onDelete?: (id: string) => void
  /** Size of Label */
  size?: ComponentSize
}

export type LabelRef = HTMLDivElement

export const Label = forwardRef<LabelRef, LabelProps>(
  (
    {
      id,
      name,
      size = ComponentSize.ExtraSmall,
      style,
      color,
      testID = 'label--pill',
      onClick,
      onDelete,
      className,
      description,
    },
    ref
  ) => {
    const [isMouseOver, setHoverState] = useState(false)

    const labelClass = classnames('cf-label', {
      [`${className}`]: className,
      [`cf-label--${size}`]: size,
      'cf-label--deletable': onDelete,
      'cf-label--clickable': onClick,
    })

    const handleClick = (e: MouseEvent<HTMLDivElement>): void => {
      if (onClick) {
        e.stopPropagation()
        e.preventDefault()
        onClick(id)
      }
    }

    const handleDelete = (): void => {
      if (onDelete) {
        onDelete(id)
      }
    }

    const handleToggleHoverState = (): void => {
      if (onClick) {
        setHoverState(!isMouseOver)
      }
    }

    const labelStyle = generateLabelStyle(color, !!onClick, isMouseOver, style)

    return (
      <div
        onMouseEnter={handleToggleHoverState}
        onMouseLeave={handleToggleHoverState}
        className={labelClass}
        style={labelStyle}
        title={description}
        ref={ref}
        id={id}
      >
        <span
          className="cf-label--name"
          onClick={handleClick}
          data-testid={`${testID} ${name}`}
        >
          {name}
        </span>
        {onDelete && (
          <LabelDeleteButton
            onDelete={handleDelete}
            name={name}
            testID={testID}
            color={`${labelStyle.color}`}
          />
        )}
      </div>
    )
  }
)

interface DeleteButtonProps {
  /** Name of the Label, appears inside the label */
  name: string
  /** Optional delete handler, if passed in the delete button is rendered */
  onDelete: () => void
  /** ID for Integration Tests */
  testID: string
  /** Ensures the X is the same color as the text label */
  color: string
}

const LabelDeleteButton: FunctionComponent<DeleteButtonProps> = ({
  onDelete,
  name,
  testID,
  color,
}) => {
  const labelDeleteStyle = {backgroundColor: color}

  return (
    <button
      className="cf-label--delete"
      onClick={onDelete}
      type="button"
      title={`Remove label "${name}"`}
      data-testid={`${testID}--delete ${name}`}
    >
      <div className="cf-label--delete-x" style={labelDeleteStyle} />
      <div className="cf-label--delete-x" style={labelDeleteStyle} />
    </button>
  )
}

LabelDeleteButton.displayName = 'LabelDeleteButton'

Label.displayName = 'Label'
