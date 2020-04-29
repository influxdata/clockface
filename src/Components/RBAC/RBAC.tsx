// Libraries
import React from 'react'

type Test = ((...args: any[]) => boolean) | undefined

export interface RBACProps<P, Y, N> {
  permissions?: P[] | undefined
  perform?: P
  test?: Test
  yes: () => Y
  no: () => N
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

function RBAC<P, Y, N>({
  permissions,
  perform,
  test,
  yes,
  no,
}: RBACProps<P, Y, N>) {
  return <>{check<P | undefined>(permissions, perform, test) ? yes() : no()}</>
}

RBAC.displayName = 'RBAC'
