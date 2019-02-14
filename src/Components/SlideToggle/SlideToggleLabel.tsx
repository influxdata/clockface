// Libraries
import React, {SFC} from 'react'

export interface Props {
  text: string
}

export const SlideToggleLabel: SFC<Props> = ({text}) => (
  <label className="slide-toggle--label">{text}</label>
)