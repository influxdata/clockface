# Subway Nav

A secondary navigation menu that allows a user to navigate within a feature

The navigation is designed to use `Next` and `Previous` buttons, and each navigation item is clickable

### Usage

```tsx
import {IconFont, SubwayNav, SubwayNavModel} from '@influxdata/clockface'
import {PythonIcon} from 'src/icons/PythonIcon'
```

```tsx
const navigationSteps: SubwayNavModel[] = [{
    name: 'Overview',
    glyph: IconFont.BookOutline,
  },
  {
    name: 'Install Dependencies',
    glyph: IconFont.Install,
  },
  {
    name: 'Create a Token',
    glyph: IconFont.CopperCoin,
  }
]

<SubwayNav
  currentStep={currentStep}

  onStepClick={handleNavClick}

  navigationSteps={navigationSteps}

  settingUpIcon={PythonIcon}

  settingUpText="Python"

  setupTime="5 minutes"

/>
```
