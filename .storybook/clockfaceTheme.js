import { create } from '@storybook/theming';

import logo from './clockface-logo.png'

export default create({
  base: 'light',

  colorPrimary: '#22ADF6',
  colorSecondary: '#9394FF',

  // UI
  appBg: '#f6f6f8',
  appContentBg: '#fafafc',
  appBorderColor: '#eeeff2',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Roboto", sans-serif',
  fontCode: '"RobotoMono", monospace',

  // Text colors
  textColor: '#545667',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#a4a8b6',
  barSelectedColor: '#7A65F2',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#d4d7dd',
  inputTextColor: '#31313d',
  inputBorderRadius: 4,

  brandTitle: 'Clockface',
  brandUrl: 'https://influxdata.github.io/clockface',
  brandImage: logo,
});