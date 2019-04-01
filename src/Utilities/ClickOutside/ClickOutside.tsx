import React, {PureComponent, ReactElement} from 'react'
import ReactDOM from 'react-dom'

interface Props {
  /** Single child to detect clicks outside of */
  children: ReactElement<any>
  /** Function to call when click outside is detected */
  onClickOutside: (e: any) => void
}

export class ClickOutside extends PureComponent<Props> {
  public componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside, true)
  }

  public componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside, true)
  }

  public render() {
    return React.Children.only(this.props.children)
  }

  private handleClickOutside = (e: any) => {
    const domNode = ReactDOM.findDOMNode(this)
    if (!domNode || !domNode.contains(e.target)) {
      this.props.onClickOutside(e)
    }
  }
}
