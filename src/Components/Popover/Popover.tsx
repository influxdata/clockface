// Libraries
import React, {Component, RefObject, MouseEvent} from 'react'
// import classnames from 'classnames'
import {createPortal} from 'react-dom'

// Components
import {DismissButton} from '../Button/Composed/DismissButton'
import {PopoverDialog} from './PopoverDialog'

// Styles
import './Popover.scss'

// Types
import {
  ComponentColor,
  StandardProps,
  PopoverInteraction,
  PopoverPosition,
  PopoverType,
} from '../../Types'

export interface PopoverProps extends StandardProps {
  /** Popover dialog color */
  color: ComponentColor
  /** Popover dialog contents */
  contents: (onHide?: () => void) => JSX.Element
  /** Type of interaction to show the popover dialog */
  showEvent: PopoverInteraction
  /** Type of interaction to hide the popover dialog */
  hideEvent: PopoverInteraction
  /** Pixel distance between trigger and popover dialog */
  distanceFromTrigger: number
  /** Size of caret (triangle) that points at the trigger */
  caretSize: number
  /** Where to position the popover relative to the trigger (assuming it fits there) */
  position: PopoverPosition
  /** Means of applying color to popover */
  type: PopoverType
  /** Overrides internal popover expanded state */
  visible: boolean
  /** Disables the popover's show interaction */
  disabled: boolean
  /** Reference to trigger element */
  triggerRef: RefObject<any>
  /** Adds reasonable styles to popover dialog contents so you do not have to */
  enableDefaultStyles: boolean
}

export const PopoverDefaultProps = {
  color: ComponentColor.Primary,
  testID: 'popover',
  showEvent: PopoverInteraction.Click,
  hideEvent: PopoverInteraction.Click,
  distanceFromTrigger: 4,
  caretSize: 8,
  position: PopoverPosition.Below,
  type: PopoverType.Outline,
  visible: false,
  disabled: false,
  enableDefaultStyles: true,
}

interface State {
  expanded: boolean
}

interface CustomMouseEvent extends MouseEvent {
  relatedTarget: Element
}

export class Popover extends Component<PopoverProps, State> {
  public static readonly displayName = 'Popover'

  public static defaultProps = {...PopoverDefaultProps}

  public static DismissButton = DismissButton

  constructor(props: PopoverProps) {
    super(props)

    this.state = {
      expanded: this.props.visible,
    }
  }

  private triggerReceivedHandlers = false

  public componentDidMount() {
    this.handleCreatePortalElement()
    this.handleAddEventListeners()

    if (this.props.visible) {
      this.handleShowDialog()
    } else {
      this.handleHideDialog()
    }
  }

  public componentDidUpdate(prevProps: PopoverProps) {
    this.handleAddEventListeners()

    if (prevProps.visible !== this.props.visible) {
      if (this.props.visible) {
        this.handleShowDialog()
      } else if (!this.props.visible) {
        this.handleHideDialog()
      }
    }
  }

  public componentWillUnmount() {
    this.handleDestroyPortalElement()
    this.handleRemoveEventListeners()
  }

  public render() {
    const {
      distanceFromTrigger,
      enableDefaultStyles,
      triggerRef,
      className,
      caretSize,
      contents,
      position,
      testID,
      style,
      color,
      type,
      id,
    } = this.props
    const {expanded} = this.state
    const portalElement = document.getElementById('cf-popover-portal')

    if (!portalElement) {
      return null
    }

    const popover = (
      <PopoverDialog
        enableDefaultStyles={enableDefaultStyles}
        distanceFromTrigger={distanceFromTrigger}
        onClickOutside={this.handleClickOutside}
        onMouseLeave={this.handleDialogMouseLeave}
        triggerRef={triggerRef}
        className={className}
        caretSize={caretSize}
        position={position}
        contents={contents(this.handleHideDialog)}
        visible={expanded}
        testID={testID}
        color={color}
        style={style}
        type={type}
        id={id}
      />
    )

    return createPortal(popover, portalElement)
  }

  private handleTriggerClick = (e: MouseEvent): void => {
    e.stopPropagation()
    const {showEvent, disabled} = this.props

    if (disabled) {
      return
    }

    if (showEvent === PopoverInteraction.Click) {
      this.handleShowDialog()
    }
  }

  private handleTriggerMouseOver = (): void => {
    const {showEvent} = this.props

    if (showEvent === PopoverInteraction.Hover) {
      this.handleShowDialog()
    }
  }

  private handleTriggerMouseLeave = (e: CustomMouseEvent): void => {
    const {hideEvent} = this.props

    if (e.relatedTarget.className.includes('cf-popover')) {
      return
    }

    if (hideEvent === PopoverInteraction.Hover) {
      this.handleHideDialog()
    }
  }

  private handleDialogMouseLeave = (e: MouseEvent): void => {
    const {hideEvent} = this.props

    if (e.target === this.props.triggerRef.current) {
      return
    }

    if (hideEvent === PopoverInteraction.Hover) {
      this.handleHideDialog()
    }
  }

  private handleClickOutside = (e: MouseEvent): void => {
    const {hideEvent} = this.props

    if (e.target === this.props.triggerRef.current) {
      return
    }

    if (hideEvent === PopoverInteraction.Click) {
      this.handleHideDialog()
    }
  }

  private handleShowDialog = (): void => {
    this.setState({expanded: true})
  }

  private handleHideDialog = (): void => {
    this.setState({expanded: false})
  }

  private handleCreatePortalElement = (): void => {
    const portalExists = document.getElementById('cf-popover-portal')

    if (portalExists) {
      return
    }

    const portalElement = document.createElement('div')
    portalElement.setAttribute('class', 'cf-popover-portal')
    portalElement.setAttribute('id', 'cf-popover-portal')

    document.body.appendChild(portalElement)
  }

  private handleDestroyPortalElement = (): void => {
    const portalElement = document.getElementById('cf-popover-portal')

    if (portalElement) {
      portalElement.remove()
    }
  }

  private handleAddEventListeners = (): void => {
    const {triggerRef} = this.props

    if (!triggerRef.current || this.triggerReceivedHandlers) {
      return
    }

    triggerRef.current.addEventListener('click', this.handleTriggerClick)
    triggerRef.current.addEventListener(
      'mouseover',
      this.handleTriggerMouseOver
    )
    triggerRef.current.addEventListener(
      'mouseleave',
      this.handleTriggerMouseLeave
    )

    this.triggerReceivedHandlers = true
  }

  private handleRemoveEventListeners = (): void => {
    const {triggerRef} = this.props

    if (!triggerRef.current) {
      return
    }

    triggerRef.current.removeEventListener('click', this.handleTriggerClick)
    triggerRef.current.removeEventListener(
      'mouseover',
      this.handleTriggerMouseOver
    )
    triggerRef.current.removeEventListener(
      'mouseleave',
      this.handleTriggerMouseLeave
    )
  }
}
