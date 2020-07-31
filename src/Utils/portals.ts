import {ReactPortal} from 'react'
import {createPortal} from 'react-dom'

const portalElementID = 'cf-portal'

const createPortalElement = (): HTMLElement => {
  const portalElement = document.createElement('div')
  portalElement.setAttribute('class', portalElementID)
  portalElement.setAttribute('id', portalElementID)

  document.body.appendChild(portalElement)

  return portalElement
}

const getPortalElement = (): HTMLElement => {
  let portal = document.getElementById(portalElementID)

  if (!portal) {
    portal = createPortalElement()
  }

  return portal
}

export const usePortals = () => {
  const portal = getPortalElement()

  const addElementToPortal = (element: JSX.Element): ReactPortal => {
    return createPortal(element, portal)
  }

  return [addElementToPortal]
}
