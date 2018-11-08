import React, {PureComponent} from 'react'

interface Props {
  theme: string
}

export const ThemeContext = React.createContext({})

export class ThemeContextProvider extends PureComponent<Props> {
  public static defaultProps: Partial<Props> = {
    theme: 'clockface-theme-light'
  }
  render() {
    const { theme, children } = this.props
    
    return (
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
  }
}