// Libraries
import React, {Component} from 'react'

// Components
import {NotificationRoot, NotificationProps} from './Notification'
import {NotificationDialog} from './NotificationDialog'

export class Notification extends Component<NotificationProps> {
  public static readonly displayName = 'Notification'

  public static Notification = NotificationRoot
  public static Dialog = NotificationDialog

  render() {
    return <NotificationRoot {...this.props} />
  }
}

export {NotificationProps, NotificationRef} from './Notification'
export * from './NotificationDialog'
