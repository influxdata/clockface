import React, {useState} from 'react'
import {cleanup, fireEvent, render} from '@testing-library/react'
import {ClickOutside} from '../ClickOutside'

const textInsideOfComponent = "Don't click here, click outside of here, family"
const siblingTextOfComponent =
  'This is a piece of text near the component. Click here.'
const cousinTextOfComponent =
  "This is a cousin piece of text outside the component. This text's parent is a sibling to the component's parent."
const toggleVisibilityText = 'Click here to umount the ClickOutside component'

interface Props {
  onClickOutside: (e: any) => void
}

const Wrapper = (props: Props) => {
  const [shouldShowClickOutsideComponent, setComponentVisibility] = useState(
    true
  )

  const toggleComponentVisibility = () => {
    setComponentVisibility(!shouldShowClickOutsideComponent)
  }
  return (
    <div>
      <div>
        {shouldShowClickOutsideComponent && (
          <ClickOutside onClickOutside={props.onClickOutside}>
            <div>{textInsideOfComponent}</div>
          </ClickOutside>
        )}
        <div>{siblingTextOfComponent}</div>
      </div>
      <div>
        <div>{cousinTextOfComponent}</div>
        <a onClick={toggleComponentVisibility}>{toggleVisibilityText}</a>
      </div>
    </div>
  )
}

describe('the Click Outside component', () => {
  afterEach(() => {
    cleanup()
  })
  it('calls the `onClickOutside` method when a mousedown event outside the handler is fired', () => {
    const mockClickOutside = jest.fn()
    const {getByText} = render(<Wrapper onClickOutside={mockClickOutside} />)

    fireEvent.mouseDown(getByText(siblingTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(1)

    fireEvent.mouseDown(getByText(cousinTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(2)
  })

  it("doesn't call the `onClickOutside` method when a click inside the handler happens", () => {
    const mockClickOutside = jest.fn()
    const {getByText} = render(<Wrapper onClickOutside={mockClickOutside} />)

    fireEvent.click(getByText(textInsideOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(0)
    fireEvent.mouseDown(getByText(textInsideOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(0)
  })

  it('properly unbinds the event when it unmounts itself', () => {
    const mockClickOutside = jest.fn()
    const {getByText} = render(<Wrapper onClickOutside={mockClickOutside} />)

    fireEvent.mouseDown(getByText(siblingTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(1)
    mockClickOutside.mockClear()

    fireEvent.click(getByText(toggleVisibilityText))
    fireEvent.mouseDown(getByText(siblingTextOfComponent))
    expect(mockClickOutside).toHaveBeenCalledTimes(0)
  })
})
