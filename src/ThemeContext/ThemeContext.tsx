import React, {PureComponent} from 'react'
import { clockfaceTheme } from '../types/themes'

interface Props {
  theme: clockfaceTheme
}

export const ThemeContext = React.createContext({})

export class ThemeContextProvider extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    theme: clockfaceTheme.light
  }
  render() {
    const { theme, children } = this.props
    
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
  }
}