// Libraries
import React, {FC, createContext, useEffect} from 'react'

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

const GetThemeClassName = (theme: Theme): string => {
  return `cf-body__${theme}`
}

export const ThemeProvider: FC<ThemeProviderProps> = ({
  theme = Theme.Dark,
  children,
}) => {
  const handleSetThemeOnBody = (theme: Theme): void => {
    if (theme === Theme.Dark) {
      document.body.classList.remove(GetThemeClassName(Theme.Light))
      document.body.classList.add(GetThemeClassName(Theme.Dark))
    } else if (theme === Theme.Light) {
      document.body.classList.remove(GetThemeClassName(Theme.Dark))
      document.body.classList.add(GetThemeClassName(Theme.Light))
    }
  }

  useEffect(() => {
    handleSetThemeOnBody(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme}}>{children}</ThemeContext.Provider>
  )
}
