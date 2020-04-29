// Libraries
import React from 'react'

type Test = ((...args: any[]) => boolean) | undefined

export interface RBACProps<P> {
  permissions?: P[] | undefined
  perform?: P
  test?: Test
  yes: () => any
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
