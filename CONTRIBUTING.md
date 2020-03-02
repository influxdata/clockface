# Want to Contribute to Clockface?

First things first sign our [CLA](https://influxdata.com/community/cla/)

Clockface is built using `React`, `Typescript`, `SCSS`, `Webpack` and `Storybook` so you will want to get familar with those tools.
We use `yarn` to manage dependencies and build the project.

Get to know our key maintainers:

[@alexpaxton](https://github.com/alexpaxton)
[@mavarius](https://github.com/mavarius)

## Submitting a Pull Request

Pull requests must be reviewed, approved, and merged by someone in the InfluxData organization.
If you follow the code patterns below and the instructions in the PR template your work has a higher chance of approval

## Code Patterns

### 1. Component Standards

##### A component must have the following files:

- A folder within the `Components` directory named after the component family in camel case
- The component file also in camel case
- Stylesheet named after the component in camel case
- Markdown documentation file named after the component in camel case
- Storybook story named after the component in camel case

##### Here's an example:

```
/Components
  /MyComponent
    MyComponent.tsx
    MyComponent.scss
    MyComponent.md
    MyComponent.stories.tsx
```

- The component should import its associated stylesheet directly into itself
  - The component stylesheet should import our modules file: `@import "../../Styles/variables.scss";`
- The component (and all sub-components) should be imported & exported from `index.ts`
  - Make sure to keep this list alphabetized for ease of use

##### SCSS Conventions

We use a variation on [BEM Naming Conventions](http://getbem.com/introduction/) which looks something like this:

```css
.component-name--element__modifier
```
```css
// example:
.button--checkbox__active
```

##### Function Components

All Clockface components (with a few exceptions) are stateless and should be implemented as [Function Components](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components)

##### Standard Props

We created a Typescript interface called `StandardClassProps` which ensures consistency across all components in the library. All components `Props` definitions should extend `StandardClassProps`.

**All classnames must be prefixed with `cf-`**

### 2. The `Base / Composed` Component Pattern

In some cases it makes sense to have a fully customizable and unopinionated component. However we've noticed that these components tend to be used and customized the same way over and over. We adopted this pattern to offer ease of use without sacrificing the simplicity and extensibility of our components. You can see examples of this in action by looking at the `Button` family.

- `Base` is the unopinionated and fully customizable component
- `Composed` is a pre-customized (or "composed") version of a `Base` component, often with less options

##### The folder structure for this pattern is:

```
/Components
  /MyComponent
    /Base
      MyComponent.tsx
      MyComponent.scss
      MyComponent.md
    /Composed
      MyCoolComponent.tsx
      MyCoolComponent.scss
      MyCoolComponent.md
      SimpleMyComponent.tsx
      SimpleMyComponent.scss
      SimpleMyComponent.md
  MyComponent.stories.tsx
```

### 3. The Component Family Pattern

We offer larger groups of components that are intended to be used together closely. In these cases we consider those components a "family". Component families not only share a namespace but are accessible via a single import. This is the only time we use classes.

##### Here's an example:

```tsx
import {FruitApple} from './FruitApple'
import {FruitOrange} from './FruitOrange'
```
```tsx
export class Fruit {
  public static Apple = FruitApple
  public static Orange = FruitOrange
}
```
This enables usage like so:
```tsx
import {Fruit} from '@influxdata/clockface'
```
```tsx
<Fruit.Apple />
<Fruit.Orange />
```

##### The folder structure for this pattern is:

```
/Components
  /MyComponent
    /Family
      Fruit.tsx
      FruitApple.tsx
      FruitApple.scss
      FruitApple.md
      FruitOrange.tsx
      FruitOrange.scss
      FruitOrange.md
    /Examples
      FruitExample.md
  Fruit.stories.tsx
```
We strongly encourage including examples of all the components in a family working together

### 4. The Consistent Customization Pattern

We created a series of generic `enum` (yay Typescript) data types intended for customization across all components. The most generic `enums` are `ComponentSize` and `ComponentColor`, but there are many others.

When creating or modifying a component please try to make use of an `enum` already in existence before creating a new one. Using existing `enums` strengthens the library as a whole.

### 5. Proportional Sizing SCSS Pattern

In order to ensure a consistent look and feel all component styles make use of proportionally scaled "size" variables:

```scss
$cf-marg-a: 4px;
$cf-marg-b: 8px;
$cf-marg-c: 16px;
$cf-marg-d: 32px;
$cf-marg-e: 64px;
$cf-marg-f: 128px;

$cf-border: 2px;
$cf-radius: 4px;
```

When creating or modifying components use these size variables. There also other variables located in [variables.scss](https://github.com/influxdata/clockface/blob/master/src/Styles/variables.scss) that are useful for ensuring visual consistency

--------------

# More Coming Soon
