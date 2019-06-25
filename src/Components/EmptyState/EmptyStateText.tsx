// Libraries
import React, {Component, Fragment} from 'react'
import _ from 'lodash'
import uuid from 'uuid'

// Types
import {StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Primary text to be displayed when no elements are loaded */
  text: string
  /** Highlighted words in the primary text */
  highlightWords?: string | string[]
}

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

export class EmptyStateText extends Component<Props & StandardProps> {
  public static readonly displayName = 'EmptyStateText'

  public static defaultProps = {
    testID: 'empty-state--text',
  }

  render() {
    const {text, highlightWords, testID, id} = this.props

    return (
      <h4 className={this.className} data-testid={testID} id={id}>
        {highlighter(text, highlightWords)}
      </h4>
    )
  }

  private get className(): string {
    const {className} = this.props

    return className ? `empty-state--text ${className}` : 'empty-state--text'
  }
}
