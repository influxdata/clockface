import React, {PureComponent} from 'react'

import './ClockfaceExampleComponent.css'

class ClockfaceExampleComponent extends PureComponent {
  render() {
    const {customText} = this.props
    return (
      <div className="clockface--clockface-example">{customText || 'This is an example component for Clockface UI'}</div>
    )
  }
}

export default ClockfaceExampleComponent