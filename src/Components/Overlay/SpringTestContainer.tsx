import React, {Component} from 'react'
import {Transition} from 'react-spring/renderprops'

import {SpringTest} from './SpringTest'

interface Props {}

interface State {
  visible: boolean
}

export class SpringTestContainer extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      visible: false,
    }
  }

  render() {
    const {visible} = this.state

    return (
      <>
        <button onClick={this.handleToggle}>{visible ? 'Hide' : 'Show'}</button>
        <Transition
          items={visible}
          from={{opacity: 0}}
          enter={{opacity: 1}}
          leave={{opacity: 0}}
          config={{duration: 2000}}
        >
          {visible => visible && (props => <SpringTest style={props} />)}
        </Transition>
      </>
    )
  }

  private handleToggle = (): void => {
    this.setState({visible: !this.state.visible})
  }
}
