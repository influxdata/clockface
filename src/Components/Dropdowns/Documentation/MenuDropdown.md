# Menu Dropdown

This is composed variation of a Dropdown intended for a common use case to save time. 

The Menu Dropdown is composed of two types of dropdown menus. The first and default menu contains two parts. First, there is a header which opens a type-ahead menu when selected. Second, there are an array of `options` which are presented as links. 

The type-ahead menu takes an array of `subMenuOptions` which become the default text of the dropdown when selected. The type-ahead text input is clearable with an 'x' button in the right that shows up when there is content.
pressing on the 'x' will clear the text input _AND_ set the selection of this control to null.

It keeps its own state, and can take styling and testIDs from the parent/caller for both the dropdown and the dropdown menu.

All the `options` to be selected must conform to the `MenuItem` interface; it must have a name, an id, and a href link.

All the `subMenuOptions` to be selected must conform to the `SubMenuItem` interface; it must have a name and an id.

### Usage
```tsx
import {MenuDropdown} from '@influxdata/clockface'
```

This composed dropdown has two key props: `options`, `subMenuOptions`.

The component is relatively dumb in that it won't throw errors if the string array passed into `selectedOptions` doesn't have any matches in `options/subMenuOptions`, or if `options/subMenuOptions` contains duplicate items. This flexibility allows for a couple different UX approaches:

- No option is selected by default. the dropdown shows a selectedOption.name determined by the `selectedOption` prop or the default text determined by the `defaultText` prop.


### Example
<!-- STORY -->

##### Sample Values

Here's an example of how to manage Multi-Select Dropdown state:

```tsx
const menuHrefOptions = [
  {
    name: 'Settings',
    iconFont: IconFont.CogOutline_New,
    href: '/settings',
  },
  {
    name: 'Members',
    iconFont: IconFont.User,
    href: '/members',
  },
  {
    name: 'Billing',
    iconFont: IconFont.Bill,
    href: '/billing',
  },
]
```
```tsx
const typeAheadOptions = [
  {
    name: 'EdgeDelta',
    id: '1',
  },
  {
    name: 'Account',
    id: '2',
  },
  {
    name: 'Something',
    id: '3',
  },
  {
    name: 'Who knows',
    id: '4',
  },
]
```


And here's rendering the component:
```tsx
const selectedOption = {
  name: 'EdgeDelta',
  id: '1',
}
```
```tsx
<MenuDropdown
  style={style}
  menuStyle={menuStyle}
  largeListSearch={true}
  largeListCeiling={15}
  selectedOption={selectedOption}
  options={defaultHrefOptions}
  subMenuOptions={typeAheadOptions}
  menuHeaderIcon={IconFont.Switch_New}
  menuHeaderText={'Switch Account'}
/>
```

<!-- STORY HIDE START -->

<!-- STORY HIDE END -->

<!-- PROPS -->