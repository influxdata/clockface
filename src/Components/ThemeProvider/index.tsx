// Libraries
import React, {FC, createContext} from 'react'

// Types
import {Theme} from '../../Types'

export interface ThemeContext {
  theme: Theme
}

export interface ThemeProviderProps {
  theme?: Theme
}

export const DEFAULT_THEME = {
  theme: Theme.Dark,
}

export const ThemeContext = createContext<ThemeContext>(DEFAULT_THEME)

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = Theme.Dark,
  children,
}) => {
  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  )
}
