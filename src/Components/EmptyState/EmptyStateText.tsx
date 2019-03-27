// Libraries
import React, {Component, Fragment} from 'react'
import _ from 'lodash'
import uuid from 'uuid'

interface DefaultProps {
  /** Test ID for Integration Tests */
  testID?: string
}
interface PassedProps {
  /** Primary text to be displayed when no elements are loaded */
  text: string
  /** Highlighted words in the primary text */
  highlightWords?: string | string[]
}

type Props = DefaultProps & PassedProps

const highlighter = (
  text: string,
  highlightWords: string | string[] | undefined
): JSX.Element[] => {
  const splitString = text.replace(/[\\][n]/g, 'LINEBREAK').split(' ')

  return splitString.map(word => {
    if (_.includes(highlightWords, word)) {
      return <em key={uuid.v4()}>{`${word}`}</em>
    }

    if (word === 'LINEBREAK') {
      return <br key={uuid.v4()} />
    }

    if (word === 'SPACECHAR') {
      return <Fragment key={uuid.v4()}>&nbsp;</Fragment>
    }

    return <Fragment key={uuid.v4()}>{`${word} `}</Fragment>
  })
}

export class EmptyStateText extends Component<Props> {
  public static defaultProps: DefaultProps = {
    testID: 'empty-state--text',
  }

  render() {
    const {text, highlightWords, testID} = this.props

    return (
      <h4 className="empty-state--text" data-testid={testID}>
        {highlighter(text, highlightWords)}
      </h4>
    )
  }
}
