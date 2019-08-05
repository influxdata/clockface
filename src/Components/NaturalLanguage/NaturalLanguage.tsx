// Libraries
import React, {Component} from 'react'
import classnames from 'classnames'

// Components
import {NaturalLanguageSection} from './NaturalLanguageSection'
import {NaturalLanguageElement} from './NaturalLanguageElement'
import {NaturalLanguageText} from './NaturalLanguageText'
import {PopoverDismissButton} from '../Popover/PopoverDismissButton'

// Styles
import './NaturalLanguage.scss'

// Types
import {ComponentSize, StandardProps} from '../../Types'

interface Props extends StandardProps {
  /** Margins between child form elements */
  margin: ComponentSize
}

export class NaturalLanguage extends Component<Props> {
  public static readonly displayName = 'NaturalLanguage'

  public static Section = NaturalLanguageSection
  public static Element = NaturalLanguageElement
  public static Text = NaturalLanguageText
  public static DismissButton = PopoverDismissButton

  public static defaultProps = {
    margin: ComponentSize.Small,
    testID: 'natural-language',
  }

  public render() {
    const {testID, children, id} = this.props

    return (
      <div className={this.className} data-testid={testID} id={id}>
        {children}
      </div>
    )
  }

  private get className(): string {
    const {className, margin} = this.props

    return classnames('cf-natural-language', {
      [`cf-natural-language__margin-${margin}`]: margin,
      [`${className}`]: className,
    })
  }
}
