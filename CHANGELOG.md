# Changelog

#### 2.2.2 (Unreleased)

#### 2.2.1 (2020-06-11)

- [#508](https://github.com/influxdata/clockface/pull/508): Add `testID` to thumb elements in `DapperScrollbars`
- [#502](https://github.com/influxdata/clockface/pull/502): Enable `Popover` to be closed by the escape key

#### 2.2.0 (2020-05-12)

- [#505](https://github.com/influxdata/clockface/pull/505): Fix dependency issues and address new lint rules
- [#503](https://github.com/influxdata/clockface/pull/503): Expose `onScroll` and `onUpdate` props in `DapperScrollbars`
- [#499](https://github.com/influxdata/clockface/pull/499): Fix export for `CTALinkButton`
- [#492](https://github.com/influxdata/clockface/pull/492): Introduce `RBAC` component that conditionally renders content based on permissions

#### 2.1.1 (2020-04-30)

- [#497](https://github.com/influxdata/clockface/pull/497): Introduce `CTALinkButton` component as composed variant of `LinkButton`
- [#496](https://github.com/influxdata/clockface/pull/496): Add optional `htmlFor` prop to `FormElement` and `FormValidationElement` that, if true, will render the components with `<label />` instead of `<div />`
- [#495](https://github.com/influxdata/clockface/pull/495): Add optional `disabled` prop to `DropdownItem` and `DropdownLinkItem`
- [#493](https://github.com/influxdata/clockface/pull/493): Add testIDs to `Notification` dismiss button and child wrapper for easy testing

#### 2.1.0 [2020-04-16]

- [#489](https://github.com/influxdata/clockface/pull/489): Remove same color used by text from the background in IndexList body
- [#487](https://github.com/influxdata/clockface/pull/487): Add `htmlFor` prop to `FormLabel`, `FormElement`, `FormValidationElement`
- [#486](https://github.com/influxdata/clockface/pull/486): Expose `onShow` and `onHide` props in `ConfirmationButton` component
- [#484](https://github.com/influxdata/clockface/pull/484): Fix `z-index` issue causing notifications to appear underneath `FunnelPage`
- [#482](https://github.com/influxdata/clockface/pull/482): [Breaking] Remove render props from `ResourceCard` in favor of `children`
- [#482](https://github.com/influxdata/clockface/pull/482): Refactor `ResourceCard` to extend `FlexBox` to offer more layout control
- [#475](https://github.com/influxdata/clockface/pull/475): Refactor `Tabs` to optionally render as a space-efficient dropdown at a customizable breakpoint

#### 2.0.4

- [#483](https://github.com/influxdata/clockface/pull/483): Add single-hue gradients for each color spectrum
- [#481](https://github.com/influxdata/clockface/pull/481): Ensure `testID` and `onClick` are attached to the same element in `ResourceName` and `ResourceNameEditable`
- [#477](https://github.com/influxdata/clockface/pull/477): Fix replace `defaultChecked` with `checked` attribute in `Toggle` component
- [#474](https://github.com/influxdata/clockface/pull/474): Refactor `VisibilityInput` to manage its state internally by default with the option to override using props
- [#472](https://github.com/influxdata/clockface/pull/472): Add `Upgrade` and `Cubo` icons to icon font

#### 2.0.3

- [#470](https://github.com/influxdata/clockface/pull/470): Add optional `enableGraphic` prop to `FunnelPage`
- [#470](https://github.com/influxdata/clockface/pull/470): Add image asset loading to rollup and webpack configurations
- [#469](https://github.com/influxdata/clockface/pull/469): Add optional `linkElement` prop to `Tab`
- [#466](https://github.com/influxdata/clockface/pull/466): Fix `OverlayHeading` overflow issue
- [#466](https://github.com/influxdata/clockface/pull/466): Enable optional text wrapping in `OverlayHeading`
- [#466](https://github.com/influxdata/clockface/pull/466): Fix appearance of dismiss buttons in `NotificationDialog`
- [#466](https://github.com/influxdata/clockface/pull/466): Fix appearance of toggle in `VisibilityInput`
- [#466](https://github.com/influxdata/clockface/pull/466): Ensure `Heading` component does not remove margins specified in the funnel page heading styles
- [#465](https://github.com/influxdata/clockface/pull/465): Fix gradient mixin transparency issue
- [#464](https://github.com/influxdata/clockface/pull/464): Ensure `testID` prop is assigned to `TreeNav` children using `linkElement` prop
- [#464](https://github.com/influxdata/clockface/pull/464): Allow optional `shortLabel` on `TreeNavItem` strictly for display when `TreeNav` is collapsed
- [#464](https://github.com/influxdata/clockface/pull/464): Make `TreeNavSubMenu` visible so long as the entire `TreeNav` is visible
- [#464](https://github.com/influxdata/clockface/pull/464): Allow `TreeNav` to be opened and closed on small screens independently of the `expanded` prop
- [#464](https://github.com/influxdata/clockface/pull/464): Allow banner element to optionally remain visible when `TreeNav` is collapsed

#### 2.0.2

- [#453](https://github.com/influxdata/clockface/pull/453): Add Sun & Moon icons to icon font
- [#451](https://github.com/influxdata/clockface/pull/451): Add optional `title` prop to `DropdownItem`
- [#451](https://github.com/influxdata/clockface/pull/451): Add default value for `checked` in `Toggle` to prevent a bug
- [#451](https://github.com/influxdata/clockface/pull/451): Update `Warning` and `Danger` styles for Buttons to be more distinct and single hue
- [#449](https://github.com/influxdata/clockface/pull/449): Add optional `onClick` prop to the `Heading` component

#### 2.0.1

- [#445](https://github.com/influxdata/clockface/pull/445): Ensure proper spacing and alignment of `PageControlBar` children at all screen sizes
- [#444](https://github.com/influxdata/clockface/pull/444): Polish appearance of `Tabs` component
- [#443](https://github.com/influxdata/clockface/pull/443): Enable `TreeNavHeader` to utilize the `ComponentColor` type
- [#442](https://github.com/influxdata/clockface/pull/442): Update design of `InfluxDBCloudLogo` to conform to brand guidelines
- [#441](https://github.com/influxdata/clockface/pull/441): Fix rendering of Rubik font by using `woff2` format instead of `ttf`

## 2.0 (aka Pendulum)

- [#437](https://github.com/influxdata/clockface/pull/437): Introduce new color palette
- [#437](https://github.com/influxdata/clockface/pull/437): Remove Roboto typeface and replace with Rubik (also shrinks the binary)
- [#437](https://github.com/influxdata/clockface/pull/437): [Breaking] Rename `PageHeader` to `PageControlBar`
- [#437](https://github.com/influxdata/clockface/pull/437): Introduce simplified `PageHeader` component
- [#437](https://github.com/influxdata/clockface/pull/437): [Breaking] Remove background color and padding props from `Tabs` family
- [#437](https://github.com/influxdata/clockface/pull/437): Add `bordered` prop to `Panel`
- [#437](https://github.com/influxdata/clockface/pull/437): Introduce `Heading` component
- [#437](https://github.com/influxdata/clockface/pull/437): Introduce `InfluxDataLogo` and `InfluxDBCloudLogo` components
- [#437](https://github.com/influxdata/clockface/pull/437): Redesign `Button` component
- [#437](https://github.com/influxdata/clockface/pull/437): Introduce `TreeNav` component family
- [#437](https://github.com/influxdata/clockface/pull/437): Combined `variables.scss`, `mixins.scss`, and `influx-colors.scss` into a single file
- [#437](https://github.com/influxdata/clockface/pull/437): Introduce variables to enforce available font weights in `Rubik` and replace all font weight defintions with the variables

#### 1.2.1

- [#436](https://github.com/influxdata/clockface/pull/436): variables.scss is now exported as part of the clockface bundle `@influxdata/clockface/dist/variables.scss`

#### 1.1.5

- [#433](https://github.com/influxdata/clockface/pull/433): Fix `Notification` component exports

#### 1.1.4

- [#431](https://github.com/influxdata/clockface/pull/431): Add `VisibilityInput` component

#### 1.1.3

- [#428](https://github.com/influxdata/clockface/pull/428): Add missing export for `LinkButton`

#### 1.1.2

- [#427](https://github.com/influxdata/clockface/pull/427): Remove link color exclusion rule & add `LinkButton` styles

#### 1.1.1

- [#426](https://github.com/influxdata/clockface/pull/426): Replace `data-testid` with `testID` props in components overriding testID.
- [#424](https://github.com/influxdata/clockface/pull/424): Introduce `LinkButton` component as a composed variation of `Button`
- [#424](https://github.com/influxdata/clockface/pull/424): Pass back optional event object to `RightClickMenuItem` click handler
- [#422](https://github.com/influxdata/clockface/pull/422): Render the empty state when ResourceList.Body receives boolean false as children

#### 1.1.0

- [#415](https://github.com/influxdata/clockface/pull/415): Fix `DapperScrollbars` to persist scroll position and prevent jumping
- [#414](https://github.com/influxdata/clockface/pull/414): Introduce `Notification` components for briefly conveying information
- [#413](https://github.com/influxdata/clockface/pull/413): Introduce `SquareGrid` components for fluid, responsive, proportial grids
- [#410](https://github.com/influxdata/clockface/pull/410): Create CSS classes for styling `FunnelPage` typography
- [#410](https://github.com/influxdata/clockface/pull/410): Adjust `CTAButton` and `PanelSymbolHeader` to match design specifications
- [#409](https://github.com/influxdata/clockface/pull/409): Introduce `PanelSymbolHeader` component
- [#409](https://github.com/influxdata/clockface/pull/409): Introduce `Bullet` component
- [#409](https://github.com/influxdata/clockface/pull/409): [Breaking] Remove `NumberedPanel`
- [#408](https://github.com/influxdata/clockface/pull/408): [Breaking] Refactor `Radio` family to become `SelectGroup` family which supports keyboard access, multi and single select, and contains hidden inputs to play nicer with HTML5 forms
- [#408](https://github.com/influxdata/clockface/pull/408): Enable tab focus interactions to improve `SelectGroupOption` accessibility
- [#408](https://github.com/influxdata/clockface/pull/408): [Breaking] Require `id` prop for all `SelectGroupOption` components
- [#407](https://github.com/influxdata/clockface/pull/407): Prevent `DropdownMenu` from dismissing when the scrollbar is clicked or dragged

#### 1.0.7

- [#402](https://github.com/influxdata/clockface/pull/402): [Breaking] Remove `width` prop from `TableCell` and `TableHeaderCell`
- [#400](https://github.com/influxdata/clockface/pull/400): Refactor `PanelHeader`, `PanelBody`, and `PanelFooter` to extend `FlexBox`
- [#400](https://github.com/influxdata/clockface/pull/400): [Breaking] Remove `PanelTitle` component
- [#400](https://github.com/influxdata/clockface/pull/400): [Breaking] Rename `childMargin` prop to `margin` in `PanelHeader`
- [#400](https://github.com/influxdata/clockface/pull/400): [Breaking] Refactor `NumberedPanel` to have a built in `PanelHeader`
- [#397](https://github.com/influxdata/clockface/pull/397): Introduce `Toggle` component as an abstraction of HTML radio and checkbox inputs
- [#397](https://github.com/influxdata/clockface/pull/397): [Breaking] Refactor `SlideToggleLabel` into the generic `InputLabel`
- [#397](https://github.com/influxdata/clockface/pull/397): [Breaking] Rename `PopoverType` enum to the more generic `Appearance`

#### 1.0.6

- [#396](https://github.com/influxdata/clockface/pull/396): Improve contrast in `NavMenu`
- [#395](https://github.com/influxdata/clockface/pull/395): Introduce `PopNav` component family
- [#395](https://github.com/influxdata/clockface/pull/395): Introduce `AppHeader` component family
- [#392](https://github.com/influxdata/clockface/pull/392): Make `g1-raven` slightly darker and cooler
- [#391](https://github.com/influxdata/clockface/pull/391): Introduce `NumberedPanel` as composed variant of `Panel`
- [#390](https://github.com/influxdata/clockface/pull/390): Introduce `FunnelPage` component family
- [#390](https://github.com/influxdata/clockface/pull/390): [Breaking] Refactor typography font sizes to be relative instead of absolute for increased flexibility
- [#389](https://github.com/influxdata/clockface/pull/389): Move `RangeSlider` labels inside visible rectangle
- [#389](https://github.com/influxdata/clockface/pull/389): Add optional `labelPrefix` and `labelSuffix` props to `RangeSlider`
- [#377](https://github.com/influxdata/clockface/pull/377): Introduce `RightClick` component

#### 1.0.5

- [#379](https://github.com/influxdata/clockface/pull/379): Add tests and testing CI infrastructure
- [#375](https://github.com/influxdata/clockface/pull/375): Add `onMouseEnter`, `onMouseLeave`, `onMouseOver`, and `onMouseOut` to all button components
- [#375](https://github.com/influxdata/clockface/pull/375): Ensure all button component prop interfaces are extending `ButtonBaseProps`
- [#373](https://github.com/influxdata/clockface/pull/373): Handle NaN appropriately in numeric Inputs by updating value, type, and status
- [#372](https://github.com/influxdata/clockface/pull/372): Introduce `CTAButton` as a composed version of `Button`
- [#368](https://github.com/influxdata/clockface/pull/368): Ensure `Popover` visible prop is not overridden by being out of view

#### 1.0.4

- [#366](https://github.com/influxdata/clockface/pull/366): Prevent children of `OverlayHeader` from disrupting the position of the dismiss button
- [#366](https://github.com/influxdata/clockface/pull/366): Allow more customization of `Popover` within `ConfirmationButton`
- [#365](https://github.com/influxdata/clockface/pull/365): Fix attachment of `Popover` when trigger element is nested in a scrolling element

#### 1.0.3

- [#363](https://github.com/influxdata/clockface/pull/363): Remove `@dump247/storybook-state`, `storybook-addon-jsx`, and `react-docgen-typescript-webpack-plugin` dependencies, add hooks to Storybook stories
- [#360](https://github.com/influxdata/clockface/pull/360): Add gradients in the green-yellow & yellow-red spectrums to the `Gradients` enum
- [#356](https://github.com/influxdata/clockface/pull/356): Fix bug causing `FormValidationElement` to render in error state before the user has interacted with anything
- [#352](https://github.com/influxdata/clockface/pull/352): Refactor `TextArea` component to accept customization like `Input`
- [#352](https://github.com/influxdata/clockface/pull/352): Fix bug causing `TextArea` to be very tiny
- [#350](https://github.com/influxdata/clockface/pull/350): Added explicit check for `className` in Popover `handleTriggerMouseLeave` method
- [#342](https://github.com/influxdata/clockface/pull/342): Upgrade typescript, eslint, & storybook dependencies

#### 1.0.2

- [#341](https://github.com/influxdata/clockface/pull/341): Refactor `ColorPicker` to accept RegEx string that controls the input value
- [#341](https://github.com/influxdata/clockface/pull/341): Fix `ColorPicker` bug causing the component to report stale status

#### 1.0.1

- [#340](https://github.com/influxdata/clockface/pull/340): Refactor `ColorPicker` to accept a custom validation function
- [#340](https://github.com/influxdata/clockface/pull/340): Refactor `ColorPicker` and `FormValidationComponent` to work more like controlled components

## 1.0.0

- [#334](https://github.com/influxdata/clockface/pull/334): [Breaking] Prepend `cf-` to all `DatePicker` class names
- [#334](https://github.com/influxdata/clockface/pull/334): Convert `DatePicker` and `DateRangePicker` components to `FunctionComponent` and wrap with `forwardRef`
- [#334](https://github.com/influxdata/clockface/pull/334): Convert `Form` component family to `FunctionComponent` and wrap with `forwardRef`
- [#333](https://github.com/influxdata/clockface/pull/333): Convert `ResourceList` component family to `FunctionComponent` and wrap with `forwardRef`
- [#333](https://github.com/influxdata/clockface/pull/333): [Breaking] Prepend `cf-` to `ResourceCardDescription` & `ResourceCardEditableDescription` class names
- [#331](https://github.com/influxdata/clockface/pull/331): Improve legiblity of `SelectableCard` default state
- [#329](https://github.com/influxdata/clockface/pull/329): Convert `Overlay` component family to `FunctionComponent` and wrap with `forwardRef`
- [#329](https://github.com/influxdata/clockface/pull/329): Use `react-spring` library to handle Overlay animations
- [#329](https://github.com/influxdata/clockface/pull/329): Allow `OverlayContainer` margin to be customized
- [#328](https://github.com/influxdata/clockface/pull/328): Convert `IndexList` component family to `FunctionComponent` and wrap with `forwardRef`
- [#328](https://github.com/influxdata/clockface/pull/328): [Breaking] Prepend `cf-` to all `IndexList` class names
- [#328](https://github.com/influxdata/clockface/pull/328): Convert `NavMenu` component family to `FunctionComponent` and wrap with `forwardRef`
- [#328](https://github.com/influxdata/clockface/pull/328): Convert `Tabs` component family to `FunctionComponent` and wrap with `forwardRef`
- [#328](https://github.com/influxdata/clockface/pull/328): Convert `EmptyState` component family to `FunctionComponent` and wrap with `forwardRef`
- [#328](https://github.com/influxdata/clockface/pull/328): [Breaking] Remove `text` and `highlightedText` props from `EmptyStateText` and `EmptyStateSubtext` components in favor of directly passing children
- [#328](https://github.com/influxdata/clockface/pull/328): Convert `Page` component family to `FunctionComponent` and wrap with `forwardRef`
- [#328](https://github.com/influxdata/clockface/pull/328): [Breaking] Export `PageHeaderLeft`, `PageHeaderCenter`, and `PageHeaderRight` directly from `Page` instead of `Page.Header`
- [#327](https://github.com/influxdata/clockface/pull/327) Fix rendering issue with "always visible" `Popover`s
- [#324](https://github.com/influxdata/clockface/pull/324): Convert `DraggableResizer` component family to `FunctionComponent` and wrap with `forwardRef`
- [#323](https://github.com/influxdata/clockface/pull/323): Fix display bug in `ColorPicker` in which the selected color was overlapping the input text
- [#320](https://github.com/influxdata/clockface/pull/320): Convert `DapperScrollbars` component to `FunctionComponent` and update `react-scrollbars-custom` dependency to `4.0.20`
- [#319](https://github.com/influxdata/clockface/pull/319): Convert `ColorPicker` component family to `FunctionComponent` and wrap with `forwardRef`
- [#318](https://github.com/influxdata/clockface/pull/318): Convert `Table` component family to `FunctionComponent` and wrap with `forwardRef`
- [#317](https://github.com/influxdata/clockface/pull/317): Convert `Button` component family to `FunctionComponent` and wrap with `forwardRef`
- [#316](https://github.com/influxdata/clockface/pull/316): Convert `Popover` component family to `FunctionComponent` and wrap with `forwardRef`
- [#316](https://github.com/influxdata/clockface/pull/316): Convert `AppWrapper` component family to `FunctionComponent` and wrap with `forwardRef`
- [#316](https://github.com/influxdata/clockface/pull/316): Convert `Alert` component family to `FunctionComponent` and wrap with `forwardRef`
- [#315](https://github.com/influxdata/clockface/pull/315): Convert all `Dropdown` components to `FunctionComponent` and wrap with `forwardRef`
- [#315](https://github.com/influxdata/clockface/pull/315): [Breaking] Remove `widthPixels` prop from `Dropdown`, `SelectDropdown`, and `MultiSelectDropdown` in favor of `style` with default width
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `Grid` component family to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `Radio` component family to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `SelectableCard` component to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `TextBlock` component to `FunctionComponent` and wrap with `forwardRef`
- [#314](https://github.com/influxdata/clockface/pull/314): Convert `SlideToggle` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Fix style bug in `PanelTitle`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `FlexBox` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Icon` component to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Label` component to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Panel` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `Input` component family to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert `TextArea` component to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): Convert spinner components to `FunctionComponent` and wrap with `forwardRef`
- [#313](https://github.com/influxdata/clockface/pull/313): [Breaking] Remove `widthPixels` prop from `Input` in favor of `style` with default width
- [#313](https://github.com/influxdata/clockface/pull/313): [Breaking] Remove `widthPixels` prop from `TextArea` in favor of `style` with default width

#### 0.0.32

- [#281](https://github.com/influxdata/clockface/pull/281): Revert absolute path changes

#### 0.0.31

- [#278](https://github.com/influxdata/clockface/pull/278): Add rollup-plugin-includepaths to handle unresolved paths

#### 0.0.30

- [#277](https://github.com/influxdata/clockface/pull/277): Fix export paths to be absolute instead of relative

#### 0.0.29

- [#276](https://github.com/influxdata/clockface/pull/276): Replace all relative import paths with absolute paths
- [#275](https://github.com/influxdata/clockface/pull/275): Support absolute import paths
- [#274](https://github.com/influxdata/clockface/pull/274): Introduce `QuestionMarkTooltip` as a composed version of `Popover`
- [#274](https://github.com/influxdata/clockface/pull/274): Split `StandardProps` into `StandardClassProps` and `StandardFunctionProps`
- [#270](https://github.com/influxdata/clockface/pull/270): [Breaking] Rebuild `Popover` from the ground up using portals and refs to prevent issues with layout disruption and positioning
- [#270](https://github.com/influxdata/clockface/pull/270): Introduce `ReflessPopover` as a replacement for the previous `Popover` component functionality
- [#270](https://github.com/influxdata/clockface/pull/270): Allow optional "default styles" for `Popover` components
- [#268](https://github.com/influxdata/clockface/pull/268): [Breaking] Remove `size` prop from `Panel` and add `size` prop to `PanelHeader`, `PanelTitle`, `PanelBody`, and `PanelFooter`
- [#267](https://github.com/influxdata/clockface/pull/267): Scroll to selected `DropdownItem` when `DropdownMenu` is opened
- [#265](https://github.com/influxdata/clockface/pull/265): Make `NavMenu` responsive
- [#265](https://github.com/influxdata/clockface/pull/265): Allow customization of `PageHeader` and `PageContents` gutter sizes
- [#265](https://github.com/influxdata/clockface/pull/265): Make `PageContents` size less rigid
- [#265](https://github.com/influxdata/clockface/pull/265): Introduce `PageSubTitle` component
- [#265](https://github.com/influxdata/clockface/pull/265): Change backgrounds of `OverlayContainer` and `AppWrapper` to be flat colors
- [#265](https://github.com/influxdata/clockface/pull/265): [Breaking] Make `PageHeader` and sub-components responsive
- [#264](https://github.com/influxdata/clockface/pull/264): [Breaking] Update `SelectableCard` component with top-label design

#### 0.0.28

- [#256](https://github.com/influxdata/clockface/pull/256): Add markdown documentation for `NavMenu` component family
- [#255](https://github.com/influxdata/clockface/pull/255): Introduce `TextPopover` as a simplified composed version of `Popover`
- [#255](https://github.com/influxdata/clockface/pull/255): [Breaking] rename `Popover` prop `initiallyVisible` to `visible` (now allows full external control of popover state)
- [#254](https://github.com/influxdata/clockface/pull/254): Add markdown documentation for `Page` components
- [#254](https://github.com/influxdata/clockface/pull/254): [Breaking] Simplify how "Presentation Mode" is handled
- [#254](https://github.com/influxdata/clockface/pull/254): Fix style bug in `Page` components that prevented `PageHeader` and `PageContents` from aligning properly
- [#252](https://github.com/influxdata/clockface/pull/252): Add new colors and gradients from InfluxData Brand guidelines
- [#251](https://github.com/influxdata/clockface/pull/251): Introduce `Wand`, `WrenchNav`, and `DisksNav` icons to icon font

#### 0.0.27 - 🆘

#### 0.0.26

- [#243](https://github.com/influxdata/clockface/pull/243): [Breaking] Make `PanelHeader` composable (we recommend using `PanelTitle` as a child instead of `title` prop)
- [#243](https://github.com/influxdata/clockface/pull/243): Do not render `ResourceCardName` & `ResourceCardEditableName` as links if no `onClick` prop is passed
- [#243](https://github.com/influxdata/clockface/pull/243): Fix appearance of `ResourceCardEditableName` when in edit mode
- [#243](https://github.com/influxdata/clockface/pull/243): Reduce padding of `PageHeader` and `PageContents` when navigation is above the page
- [#243](https://github.com/influxdata/clockface/pull/243): Ensure that `TextBlock` can have its text and background color controlled independently
- [#243](https://github.com/influxdata/clockface/pull/243): Position `ResourceListHeader` contents to the left when no filter is passed in
- [#243](https://github.com/influxdata/clockface/pull/243): [Breaking] Ensure that `FlexBoxChild` is accessible as `<FlexBox.Child />`
- [#243](https://github.com/influxdata/clockface/pull/243): Expose `pattern` and `required` input attributes as props
- [#243](https://github.com/influxdata/clockface/pull/243): Make `preventDefault` behavior in `Form` `onSubmit` optional
- [#243](https://github.com/influxdata/clockface/pull/243): Add `cf-` prefix to classnames in all `ResourceList` and `ResourceCard` components
- [#243](https://github.com/influxdata/clockface/pull/243): Ensure `Popover` dialog can be moused into when show interaction is `Hover`
- [#243](https://github.com/influxdata/clockface/pull/243): Ensure the hidden input inside `SelectableCard` is controlled

#### 0.0.25

- [#231](https://github.com/influxdata/clockface/pull/231): Introduce `RangeSlider` input component
- [#229](https://github.com/influxdata/clockface/pull/229): Introduce `SelectableCard` as a port of `CardSelect` from the InfluxDB repository
- [#224](https://github.com/influxdata/clockface/pull/224): Introduce `Tabs` family of navigation components
- [#221](https://github.com/influxdata/clockface/pull/221): [Breaking] Rename `ComponentSpacer` to `FlexBox` and `ComponentSpacerFlexChild` to `FlexBoxChild`
- [#220](https://github.com/influxdata/clockface/pull/220): Ensure all `ConfirmationButton` elements receive a `testID` attribute
- [#219](https://github.com/influxdata/clockface/pull/219): Add `style` prop to all components
- [#219](https://github.com/influxdata/clockface/pull/219): [Breaking] remove `color` prop from `Icon`
- [#219](https://github.com/influxdata/clockface/pull/219): Ensure `className` prop in `TextArea` is being implemented correctly

#### 0.0.24

- [#211](https://github.com/influxdata/clockface/pull/211): Ensure `ConfirmationButton` is exported

#### 0.0.23 - 🆘

#### 0.0.22

- [#208](https://github.com/influxdata/clockface/pull/208): Fix `TextArea` onChange not returning event
- [#207](https://github.com/influxdata/clockface/pull/207): Introduce `TextBlock`, `DismissButton`, and `FlexChild` components
- [#206](https://github.com/influxdata/clockface/pull/206): Enhance `Form` component with missing attributes
- [#204](https://github.com/influxdata/clockface/pull/204): Introduce `ConfirmationButton` composed component
- [#202](https://github.com/influxdata/clockface/pull/202): Introduce standardized `Popover` component
- [#197](https://github.com/influxdata/clockface/pull/197): Port `AutoInput` component from InfluxDB and add to `Input` family

#### 0.0.21

- [#198](https://github.com/influxdata/clockface/pull/198): Botched release 😢

#### 0.0.20

- [#193](https://github.com/influxdata/clockface/pull/193): Extend `Dropdowns` to optionally drop up, fix liminal gap in dropdown parent element, and introduce `DropdownItemEmpty` component
- [#192](https://github.com/influxdata/clockface/pull/192): Add missing prefix to restore padding around page content

#### 0.0.19

- [#190](https://github.com/influxdata/clockface/pull/190): Update build configuration, add CircleCI integration, deduplicate built CSS

#### 0.0.18

- [#181](https://github.com/influxdata/clockface/pull/181): Fix build warnings from moment locale.

#### 0.0.17

- [#180](https://github.com/influxdata/clockface/pull/180): Prefix all CSS classnames with `cf-` to avoid conflicts with older version in InfluxDB
- [#178](https://github.com/influxdata/clockface/pull/178): Add markdown documentation for `Overlay` component family
- [#170](https://github.com/influxdata/clockface/pull/170): Introduce and document `Table` component family
- [#169](https://github.com/influxdata/clockface/pull/169): Introduce `DatePicker` and `DateRangePicker` components
- [#166](https://github.com/influxdata/clockface/pull/166): Add markdown documentation for `ClickOutside`, `DapperScrollbars`, `DraggableResizer`, and `WaitingText`
- [#165](https://github.com/influxdata/clockface/pull/165): Add markdown documentation for and polish appearance of `SlideToggle` components

#### 0.0.16

- [#163](https://github.com/influxdata/clockface/pull/163): Make `Panel` component optionally dismissable
- [#161](https://github.com/influxdata/clockface/pull/161): Remove `.` from all `displayName` properties
- [#161](https://github.com/influxdata/clockface/pull/161): Add `id` to all components via `StandardProps`
- [#159](https://github.com/influxdata/clockface/pull/159): Port `ResourceList` and `ResourceCard` component families from InfluxDB
- [#157](https://github.com/influxdata/clockface/pull/157): Add display names to all components so they are legible despite minification in the React inspector
- [#155](https://github.com/influxdata/clockface/pull/155): Add markdown documentation for `Radio` component family
- [#153](https://github.com/influxdata/clockface/pull/154): Add markdown documentation for `IndexList` components
- [#142](https://github.com/influxdata/clockface/pull/142): Create a single definition for "Standard Types" across all components
- [#140](https://github.com/influxdata/clockface/pull/140): Add markdown documentation for Spinner components
- [#139](https://github.com/influxdata/clockface/pull/139): Add markdown documentation for `Label`
- [#138](https://github.com/influxdata/clockface/pull/138): Add markdown documentation for `ComponentSpacer`, `EmptyState`, `Grid`, and `ColorPicker`
- [#137](https://github.com/influxdata/clockface/pull/137): Improve documentation for dropdown family components
- [#137](https://github.com/influxdata/clockface/pull/137): Fix dropdown menu scrolling bug by updating `react-scrollbars-custom` dependency
- [#136](https://github.com/influxdata/clockface/pull/136): Fix appearance of inputs with icons
- [#131](https://github.com/influxdata/clockface/pull/131): Add markdown loading and readme addon to storybook

#### 0.0.15

- [#129](https://github.com/influxdata/clockface/pull/129): Introduce `IndexList` component family
- [#125](https://github.com/influxdata/clockface/pull/125): [Breaking] Refactor `Dropdown` component family

#### 0.0.14

- [#121](https://github.com/influxdata/clockface/pull/121): Introduce `Checkbox` type inputs

#### 0.0.13

- [#118](https://github.com/influxdata/clockface/pull/118): Organize documentation by dividing each component's stories into "Family" and "Examples"
- [#118](https://github.com/influxdata/clockface/pull/118): Remove child count validation in `Radio`
- [#118](https://github.com/influxdata/clockface/pull/118): Extend `FormDivider` to optionally render a horizontal rule inside itself
- [#118](https://github.com/influxdata/clockface/pull/118): Add `size` and `active` props to `SlideToggleLabel` to allow its appearance to match its associated `SlideToggle`
- [#117](https://github.com/influxdata/clockface/pull/117): Port `DraggableResizer` component family from InfluxDB and refactor to conform to Clockface patterns
- [#116](https://github.com/influxdata/clockface/pull/116): Write documentation for `Page` family of components
- [#114](https://github.com/influxdata/clockface/pull/114): Port `Label` component family from InfluxDB and refactor to conform to Clockface patterns
- [#112](https://github.com/influxdata/clockface/pull/112): Allow refs to be passed through in all `Button` components

#### 0.0.12

- [#108](https://github.com/influxdata/clockface/pull/108): Fix a handful of bugs relating to Buttons

#### 0.0.11

- [#101](https://github.com/influxdata/clockface/pull/101): Port `Overlay` component family from InfluxDB and refactor to conform to Clockface patterns
- [#97](https://github.com/influxdata/clockface/pull/97): Allow `Icon` to receive an optional colorization via `string` or `InfluxColors` enum
- [#94](https://github.com/influxdata/clockface/pull/94): Refactor `Button` component into "Base" and "Composed" variations for greater extensibility
- [#93](https://github.com/influxdata/clockface/pull/93): Use `className` prop in `ComponentSpacer`
- [#92](https://github.com/influxdata/clockface/pull/92): Ensure dropdown buttons disabled styles appear correctly
- [#91](https://github.com/influxdata/clockface/pull/91): Ensure that panel sizing styles do not affect nested panels
- [#88](https://github.com/influxdata/clockface/pull/88): Use JSX Preview add-on instead of exposing Story Source
- [#87](https://github.com/influxdata/clockface/pull/87): Add theming to Storybook that uses InfluxData brand colors

#### < 0.0.10

- The earth was still being formed
