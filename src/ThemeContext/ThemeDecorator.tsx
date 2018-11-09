import React from 'react'
import { ThemeContextProvider } from '../ThemeContext/ThemeContext'
import { clockfaceTheme } from '../types/themes'

export const themeDecorator = (getStory:any):any => (
  <ThemeContextProvider theme={clockfaceTheme.dark}>
    {getStory()}
  </ThemeContextProvider>
)