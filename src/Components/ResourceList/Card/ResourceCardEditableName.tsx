// Libraries
import React, {Component, KeyboardEvent, ChangeEvent, MouseEvent} from 'react'
import classnames from 'classnames'

// Components
import {Input} from '../../Inputs/Input'
import {SpinnerContainer} from '../../Spinners/SpinnerContainer'
import {TechnoSpinner} from '../../Spinners/TechnoSpinner'
import {ClickOutside} from '../../ClickOutside/ClickOutside'

// Types
import {StandardProps, ComponentSize, RemoteDataState} from '../../../Types'

// Styles
import './ResourceCardEditableName.scss'

interface Props extends StandardProps {
  /** Called when editing is finished, new name is passed  */
  onUpdate: (name: string) => void
  /** Text to display as name */
  name: string
  /** Fires when the name itself is clicked and not edited */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  /** Placeholder text to display in input during editing */
  placeholder?: string
  /** Text to display when not editing and when no name is present */
  noNameString: string
  /** TestID for edit button sub-component */
  buttonTestID: string
  /** TestID for input sub-component */
  inputTestID: string
}

interface State {
  isEditing: boolean
  workingName: string
  loading: RemoteDataState
}

export class ResourceCardEditableName extends Component<Props, State> {
  public static readonly displayName = 'ResourceCardEditableName'

  public static defaultProps = {
    testID: 'resource-editable-name',
    buttonTestID: 'resource-editable-name--button',
    inputTestID: 'resource-editable-name--input',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      isEditing: false,
      workingName: props.name,
      loading: RemoteDataState.Done,
    }
  }

  public render() {
    const {name, noNameString, testID, buttonTestID, id, style} = this.props

    return (
      <div
        className={this.className}
        data-testid={testID}
        id={id}
        style={style}
      >
        <SpinnerContainer
          loading={this.state.loading}
          spinnerComponent={<TechnoSpinner diameterPixels={20} />}
        >
          <span className={this.linkClassName} onClick={this.handleClick}>
            <span>{name || noNameString}</span>
          </span>
        </SpinnerContainer>
        <div
          className="resource-editable-name--toggle"
          onClick={this.handleStartEditing}
          data-testid={buttonTestID}
        >
          <span className="icon pencil" />
        </div>
        {this.input}
      </div>
    )
  }

  private get linkClassName(): string {
    const {onClick} = this.props

    return classnames('resource-name--text', {
      'resource-name--text__link': onClick,
    })
  }

  private get input(): JSX.Element | undefined {
    const {placeholder, inputTestID} = this.props
    const {workingName, isEditing, loading} = this.state

    if (isEditing && loading !== RemoteDataState.Loading) {
      return (
        <ClickOutside onClickOutside={this.handleStopEditing}>
          <Input
            size={ComponentSize.ExtraSmall}
            maxLength={90}
            autoFocus={true}
            spellCheck={false}
            placeholder={placeholder}
            onFocus={this.handleInputFocus}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            className="resource-editable-name--input"
            value={workingName}
            testID={inputTestID}
          />
        </ClickOutside>
      )
    }

    return
  }

  private handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {onClick} = this.props
    if (onClick) {
      onClick(e)
    }
  }

  private handleStartEditing = (): void => {
    this.setState({isEditing: true})
  }

  private handleStopEditing = async (): Promise<void> => {
    const {workingName} = this.state
    const {onUpdate} = this.props

    this.setState({loading: RemoteDataState.Loading})
    await onUpdate(workingName)
    this.setState({loading: RemoteDataState.Done, isEditing: false})
  }

  private handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({workingName: e.target.value})
  }

  private handleKeyDown = async (
    e: KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    const {onUpdate, name} = this.props
    const {workingName} = this.state

    if (e.key === 'Enter') {
      e.persist()

      if (!workingName) {
        this.setState({isEditing: false, workingName: name})

        return
      }
      this.setState({loading: RemoteDataState.Loading})
      await onUpdate(workingName)
      this.setState({isEditing: false, loading: RemoteDataState.Done})
    }

    if (e.key === 'Escape') {
      this.setState({isEditing: false, workingName: name})
    }
  }

  private handleInputFocus = (e: ChangeEvent<HTMLInputElement>): void => {
    e.currentTarget.select()
  }

  private get className(): string {
    const {name, noNameString, className} = this.props
    const {isEditing} = this.state

    return classnames('resource-editable-name', {
      'resource-editable-name--editing': isEditing,
      'untitled-name': name === noNameString,
      [`${className}`]: className,
    })
  }
}
