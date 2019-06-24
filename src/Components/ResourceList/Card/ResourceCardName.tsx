// Libraries
import React, {Component, MouseEvent} from 'react'

// Components
import {SpinnerContainer} from '../../Spinners/SpinnerContainer'
import {TechnoSpinner} from '../../Spinners/TechnoSpinner'

// Types
import {StandardProps, RemoteDataState} from '../../../Types'

interface Props extends StandardProps {
  name: string
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void
  placeholder?: string
  buttonTestID: string
  inputTestID: string
  hrefValue: string
}

interface State {
  loading: RemoteDataState
}

export class ResourceCardName extends Component<Props, State> {
  public static readonly displayName = 'ResourceCard.Name'

  public static defaultProps = {
    testID: 'resource-name',
    buttonTestID: 'resource-name--button',
    inputTestID: 'resource-name--input',
    hrefValue: '#',
  }

  constructor(props: Props) {
    super(props)

    this.state = {
      loading: RemoteDataState.Done,
    }
  }

  public render() {
    const {name, hrefValue, testID} = this.props

    return (
      <div className="resource-name" data-testid={testID}>
        <SpinnerContainer
          loading={this.state.loading}
          spinnerComponent={<TechnoSpinner diameterPixels={20} />}
        >
          <a href={hrefValue} onClick={this.handleClick}>
            <span>{name}</span>
          </a>
        </SpinnerContainer>
      </div>
    )
  }

  private handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const {onClick} = this.props
    if (onClick) {
      onClick(e)
    }
  }
}
