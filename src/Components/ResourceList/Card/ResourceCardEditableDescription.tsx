// Libraries
import React, {Component, KeyboardEvent, ChangeEvent} from 'react'
import classnames from 'classnames'

// Components
import {Input} from '../../Inputs/Input'
import {Icon} from '../../Icon/Icon'
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Types
import {StandardClassProps, ComponentSize, IconFont} from '../../../Types'

// Styles
import './ResourceCardDescription.scss'

interface Props extends StandardClassProps {
  /** Text to display in description */
  description: string
  /** Placeholder text to display in input during editing */
  placeholder: string
  /** Called when user hits enter or blurs the input  */
  onUpdate: (description: string) => void
}

interface State {
  isEditing: boolean
  workingDescription: string
}

export class ResourceCardEditableDescription extends Component<Props, State> {
  public static readonly displayName = 'ResourceCardEditableDescription'

  public static defaultProps = {
    testID: 'resource-list--editable-description',
    placeholder: '',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      isEditing: false,
      workingDescription: props.description,
    }
  }

  public render() {
    const {description, testID, id, style} = this.props
    const {isEditing} = this.state

    if (isEditing) {
      return (
        <div
          className={this.className}
          data-testid={testID}
          id={id}
          style={style}
        >
          <ClickOutside onClickOutside={this.handleStopEditing}>
            {this.input}
          </ClickOutside>
        </div>
      )
    }

    return (
      <div className={this.className} data-testid={testID}>
        <div
          className={this.previewClassName}
          onClick={this.handleStartEditing}
        >
          {description || 'No description'}
          <Icon glyph={IconFont.Pencil} />
        </div>
      </div>
    )
  }

  private get className(): string {
    const {className} = this.props

    return classnames('resource-description resource-description__editable', {
      [`${className}`]: className,
    })
  }

  private get input(): JSX.Element {
    const {placeholder} = this.props
    const {workingDescription} = this.state

    return (
      <Input
        size={ComponentSize.ExtraSmall}
        autoFocus={true}
        spellCheck={false}
        placeholder={placeholder}
        onFocus={this.handleInputFocus}
        onChange={this.handleInputChange}
        onKeyDown={this.handleKeyDown}
        className="resource-description--input"
        value={workingDescription}
      />
    )
  }

  private handleStartEditing = (): void => {
    this.setState({isEditing: true})
  }

  private handleStopEditing = async (): Promise<void> => {
    const {workingDescription} = this.state
    const {onUpdate} = this.props

    await onUpdate(workingDescription)

    this.setState({isEditing: false})
  }

  private handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({workingDescription: e.target.value})
  }

  private handleKeyDown = async (
    e: KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    const {onUpdate, description} = this.props
    const {workingDescription} = this.state

    if (e.key === 'Enter') {
      await onUpdate(workingDescription)
      this.setState({isEditing: false})
    }

    if (e.key === 'Escape') {
      this.setState({isEditing: false, workingDescription: description})
    }
  }

  private handleInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    e.currentTarget.select()
  }

  private get previewClassName(): string {
    const {description} = this.props

    return classnames('resource-description--preview', {
      untitled: !description,
    })
  }
}
