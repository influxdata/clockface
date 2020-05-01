// Libraries
import React from 'react'

type Test = ((...args: any[]) => boolean) | undefined

export interface RBACProps<P> {
  /** List of permissions */
  permissions?: P[] | undefined
  /** The permission required to perform an action */
  perform?: P
  /** An arbitrary callback if returns true the "yes" prop will render */
  test?: Test
  /** If the "perform" prop is in the list of permissions yes will render */
  yes: () => any
  /** If the "perform" prop is NOT in the list of permissions no will render */
  no: () => any
}

function check<P>(permissions: P[] = [], action: P, test: Test) {
  if (permissions && action && permissions.includes(action)) {
    return true
  }

  if (test) {
    return test()
  }

  return false
}

export function RBAC<P>({permissions, perform, test, yes, no}: RBACProps<P>) {
  return <>{check<P | undefined>(permissions, perform, test) ? yes() : no()}</>
}

RBAC.displayName = 'RBAC'
