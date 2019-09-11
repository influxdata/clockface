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
  contents: ((onHide: () => void) => JSX.Element) | (() => JSX.Element)
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
}

interface State {
  expanded: boolean
  triggerRect: ClientRect | DOMRect | null
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
      triggerRect: null,
    }
  }

  public componentDidMount() {
    this.handleCreatePortalElement()
    this.handleAddEventListeners()

    if (this.props.visible) {
      this.handleShowDialog()
    } else {
      this.handleUpdateTriggerRect()
    }
  }

  public componentDidUpdate(prevProps: PopoverProps) {
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
      testID,
      id,
      style,
      color,
      type,
      contents,
      position,
      distanceFromTrigger,
      className,
      caretSize,
    } = this.props
    const {expanded, triggerRect} = this.state
    const portalElement = document.getElementById('cf-popover-portal')

    if (!portalElement || !triggerRect) {
      return null
    }

    const popover = (
      <PopoverDialog
        distanceFromTrigger={distanceFromTrigger}
        onClickOutside={this.handleClickOutside}
        onMouseLeave={this.handleDialogMouseLeave}
        triggerRect={triggerRect}
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

  private handleTriggerClick = (): void => {
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

  private handleUpdateTriggerRect = (): void => {
    const {triggerRef} = this.props
    if (!triggerRef.current) {
      return
    }

    this.setState({
      triggerRect: triggerRef.current.getBoundingClientRect(),
    })
  }

  private handleShowDialog = (): void => {
    this.handleUpdateTriggerRect()

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

    window.addEventListener('resize', this.handleUpdateTriggerRect)
    window.addEventListener('scroll', this.handleUpdateTriggerRect)

    if (!triggerRef.current) {
      return
    }

    triggerRef.current.addEventListener('click', this.handleTriggerClick)
    triggerRef.current.addEventListener('mouseover', this.handleTriggerMouseOver)
    triggerRef.current.addEventListener('mouseleave', this.handleTriggerMouseLeave)
  }

  private handleRemoveEventListeners = (): void => {
    const {triggerRef} = this.props

    window.removeEventListener('resize', this.handleUpdateTriggerRect)
    window.removeEventListener('scroll', this.handleUpdateTriggerRect)

    if (!triggerRef.current) {
      return
    }

    triggerRef.current.removeEventListener('click', this.handleTriggerClick)
    triggerRef.current.removeEventListener('mouseover', this.handleTriggerMouseOver)
    triggerRef.current.removeEventListener('mouseleave', this.handleTriggerMouseLeave)
  }
}
