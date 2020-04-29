import React from 'react'
import {render} from '@testing-library/react'
import {RBAC} from './RBAC'

const setup = (override?: {}) => {
  const props = {
    permissions: ['read:db', 'write:db', 'read:users', 'write:users'],
    perform: 'read:users',
    yes: () => <h2 data-testid="yes">fly you fools</h2>,
    no: () => <h2 data-testid="no">you shall not pass</h2>,
    ...override,
  }

  return render(<RBAC {...props} />)
}

describe('RBAC Component', () => {
  it('renders "yes" when you have permission', () => {
    const {queryByTestId} = setup()

    const yes = queryByTestId('yes')
    const no = queryByTestId('no')

    expect(yes?.textContent).toBe('fly you fools')
    expect(no).toBe(null)
  })

  it('renders "yes" when the provided test passes', () => {
    const {queryByTestId} = setup({test: () => true, perform: ''})

    const yes = queryByTestId('yes')
    const no = queryByTestId('no')

    expect(yes?.textContent).toBe('fly you fools')
    expect(no).toBe(null)
  })

  it('renders "no" when the provided test fails', () => {
    const {queryByTestId} = setup({test: () => false, perform: ''})

    const yes = queryByTestId('yes')
    const no = queryByTestId('no')

    expect(no?.textContent).toBe('you shall not pass')
    expect(yes).toBe(null)
  })

  it('renders "no" when no not have permission', () => {
    const {queryByTestId} = setup({perform: 'write:universe'})

    const yes = queryByTestId('yes')
    const no = queryByTestId('no')

    expect(no?.textContent).toBe('you shall not pass')
    expect(yes).toBe(null)
  })
})
