import React from 'react'
import { ThemeContextProvider } from '../ThemeContext/ThemeContext'
import { clockfaceTheme } from '../types/themes'

export const themeDecorator = (getStory:() => JSX.Element): JSX.Element => (
  <ThemeContextProvider theme={clockfaceTheme.dark}>
    {getStory()}
  </ThemeContextProvider>
)