import {CSSProperties, ReactNode} from 'react'

// Utilities
export type Omit<K, V> = Pick<K, Exclude<keyof K, V>>

// Standardized prop definitons
export interface StandardFunctionProps {
  /** Unique identifier for getting an element */
  id?: string
  /** Useful for setting common attributes like width or height */
  style?: CSSProperties
  /** ID for Integration Tests */
  testID?: string
  /** Children */
  children?: ReactNode
  /** Useful for overriding styles of the component and its constituent elements */
  className?: string
}

// Standard Validation Function
export type ValidationFunction = (input: string) => string | null

// Shared Data Types
export enum ComponentColor {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

export enum ComponentSize {
  ExtraSmall = 'xs',
  Small = 'sm',
  Medium = 'md',
  Large = 'lg',
}

export enum ComponentStatus {
  Default = 'default',
  Loading = 'loading',
  Error = 'error',
  Valid = 'valid',
  Disabled = 'disabled',
}

export interface Color {
  hex: string
  name: string
}

export interface Gradient {
  start: InfluxColors
  stop: InfluxColors
}

export enum Gradients {
  BeijingEclipse = 'BeijingEclipse',
  DistantNebula = 'DistantNebula',
  SpirulinaSmoothie = 'SpirulinaSmoothie',
  LASunset = 'LASunset',
  PolarExpress = 'PolarExpress',
  RebelAlliance = 'RebelAlliance',
  DocScott = 'DocScott',
  GundamPilot = 'GundamPilot',
  TropicalTourist = 'TropicalTourist',
  DesertFestival = 'DesertFestival',
  MiyazakiSky = 'MiyazakiSky',
  GarageBand = 'GarageBand',
  BrooklynCowboy = 'BrooklynCowboy',
  PastelGothic = 'PastelGothic',
  LowDifficulty = 'LowDifficulty',
  SynthPop = 'SynthPop',
  CottonCandy = 'CottonCandy',
  HotelBreakfast = 'HotelBreakfast',
  MagicCarpet = 'MagicCarpet',
  CruisingAltitude = 'CruisingAltitude',
  CoconutLime = 'CoconutLime',
  PastryCafe = 'PastryCafe',
  KawaiiDesu = 'KawaiiDesu',
  RobotLogic = 'RobotLogic',
  WarpSpeed = 'WarpSpeed',
  OminousFog = 'OminousFog',
  MilkyWay = 'MilkyWay',
  LazyAfternoon = 'LazyAfternoon',
  NineteenEightyFour = 'NineteenEightyFour',
  Radioactive = 'Radioactive',
  LostGalaxy = 'LostGalaxy',
  GrapeSoda = 'GrapeSoda',
  LavenderLatte = 'LavenderLatte',
}

export enum DropdownMenuTheme {
  Amethyst = 'amethyst',
  Malachite = 'malachite',
  Sapphire = 'sapphire',
  Onyx = 'onyx',
}

export interface DropdownMenuScrollbarColors {
  thumbStartColor: InfluxColors
  thumbStopColor: InfluxColors
}

export enum DropdownItemType {
  Dot = 'dot',
  Checkbox = 'checkbox',
  None = 'none',
}

export enum ButtonShape {
  Default = 'none',
  Square = 'square',
  StretchToFit = 'stretch',
}

export enum ButtonType {
  Button = 'button',
  Submit = 'submit',
}

export enum InfluxColors {
  // Greys
  Obsidian = '#0f0e15',
  Raven = '#1c1c21',
  Kevlar = '#202028',
  Castle = '#292933',
  Onyx = '#31313d',
  Pepper = '#383846',
  Smoke = '#434453',
  Graphite = '#545667',
  Storm = '#676978',
  Mountain = '#757888',
  Wolf = '#8e91a1',
  Sidewalk = '#999dab',
  Forge = '#a4a8b6',
  Mist = '#bec2cc',
  Chromium = '#c6cad3',
  Platinum = '#d4d7dd',
  Pearl = '#e7e8eb',
  Whisper = '#eeeff2',
  Cloud = '#f6f6f8',
  Ghost = '#fafafc',
  White = '#ffffff',
  // Blues
  Abyss = '#182838',
  Sapphire = '#326BBA',
  Ocean = '#4591ED',
  Pool = '#22ADF6',
  Laser = '#00C9FF',
  Hydrogen = '#6BDFFF',
  Neutrino = '#BEF0FF',
  Yeti = '#F0FCFF',
  // Purples
  Shadow = '#1F2039',
  Void = '#311F94',
  Amethyst = '#513CC6',
  Star = '#7A65F2',
  Comet = '#9394FF',
  Potassium = '#B1B6FF',
  Moonstone = '#C9D0FF',
  Twilight = '#F2F4FF',
  // Greens
  Gypsy = '#152B2D',
  Emerald = '#108174',
  Viridian = '#32B08C',
  Rainforest = '#4ED8A0',
  Honeydew = '#7CE490',
  Krypton = '#A5F3B4',
  Wasabi = '#C6FFD0',
  Mint = '#F2FFF4',
  // Yellows
  Oak = '#3F241F',
  Topaz = '#E85B1C',
  Tiger = '#F48D38',
  Pineapple = '#FFB94A',
  Thunder = '#FFD255',
  Sulfur = '#FFE480',
  Daisy = '#FFF6B8',
  Banana = '#FFFDDE',
  // Reds
  Basalt = '#2F1F29',
  Ruby = '#BF3D5E',
  Fire = '#DC4E58',
  Curacao = '#F95F53',
  Dreamsicle = '#FF8564',
  Tungsten = '#FFB6A0',
  Marmelade = '#FFDCCF',
  Flan = '#FFF7F4',
  // Brand Colors
  Chartreuse = '#D6F622',
  DeepPurple = '#13002D',
  Magenta = '#BF2FE5',
}

export enum IconFont {
  AddCell = 'add-cell',
  Alerts = 'alerts',
  AlertTriangle = 'alert-triangle',
  Annotate = 'annotate',
  AnnotatePlus = 'annotate-plus',
  AuthZero = 'authzero',
  BarChart = 'bar-chart',
  Bell = 'bell',
  BellRinging = 'bell-ringing',
  BellSolid = 'bell-solid',
  Brush = 'brush',
  Calendar = 'calendar',
  Capacitor = 'capacitor2',
  CaretDown = 'caret-down',
  CaretLeft = 'caret-left',
  CaretRight = 'caret-right',
  CaretUp = 'caret-up',
  Chat = 'chat',
  Checkmark = 'checkmark',
  Circle = 'circle',
  CircleThick = 'circle-thick',
  Clock = 'clock',
  Cloud = 'cloud',
  CogOutline = 'cog-outline',
  CogThick = 'cog-thick',
  Collapse = 'collapse',
  CrownOutline = 'crown-outline',
  CrownSolid = 'crown2',
  Cube = 'cube',
  CuboNav = 'cubo-nav',
  Cubouniform = 'cubo-uniform',
  Dashboards = 'dashboards',
  DashF = 'dash-f',
  DashH = 'dash-h',
  DashJ = 'dash-j',
  Disks = 'disks',
  DisksNav = 'disks-nav',
  Download = 'download',
  Duplicate = 'duplicate',
  ExpandA = 'expand-a',
  ExpandB = 'expand-b',
  Export = 'export',
  Eye = 'eye',
  EyeClosed = 'eye-closed',
  EyeOpen = 'eye-open',
  GitHub = 'github',
  Google = 'google',
  GraphLine = 'graphline-2',
  Group = 'group',
  Heroku = 'heroku',
  HerokuSimple = '',
  Import = 'import',
  Link = 'link',
  NavChat = 'nav-chat',
  OAuth = 'oauth',
  Octagon = 'octagon',
  Okta = 'okta',
  Pause = 'pause',
  Pencil = 'pencil',
  Play = 'play',
  Plus = 'plus',
  PlusSkinny = 'plus-skinny',
  Pulse = 'pulse-c',
  Refresh = 'refresh',
  Remove = 'remove',
  Search = 'search',
  Server = 'server2',
  Shuffle = 'shuffle',
  Square = 'square',
  SquareCheck = 'square-check',
  Star = 'star',
  Stop = 'stop',
  TextBlock = 'text-block',
  Trash = 'trash',
  Triangle = 'triangle',
  User = 'user',
  UserAdd = 'user-add',
  UserOutline = 'user-outline',
  UserRemove = 'user-remove',
  UsersDuo = 'users-duo',
  UsersTrio = 'users-trio',
  Wand = 'wand',
  Wood = 'wood',
  Wrench = 'wrench',
  WrenchNav = 'wrench-nav',
  Zap = 'zap',
}

export enum Columns {
  One = 1,
  Two = 2,
  Three = 3,
  Four = 4,
  Five = 5,
  Six = 6,
  Seven = 7,
  Eight = 8,
  Nine = 9,
  Ten = 10,
  Eleven = 11,
  Twelve = 12,
}

export enum Sort {
  Descending = 'desc',
  Ascending = 'asc',
  None = 'none',
}

export enum Alignment {
  Left = 'left',
  Center = 'center',
  Right = 'right',
}

export enum VerticalAlignment {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
}

export enum JustifyContent {
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  SpaceBetween = 'space-between',
  SpaceAround = 'space-around',
}

export enum AlignItems {
  FlexStart = 'flex-start',
  Center = 'center',
  FlexEnd = 'flex-end',
  Stretch = 'stretch',
}

export enum FlexDirection {
  Row = 'row',
  RowReverse = 'row-reverse',
  Column = 'column',
  ColumnReverse = 'column-reverse',
}

export enum RemoteDataState {
  NotStarted = 'NotStarted',
  Loading = 'Loading',
  Done = 'Done',
  Error = 'Error',
}

export enum AutoComplete {
  On = 'on',
  Off = 'off',
}

export enum Orientation {
  Vertical = 'vertical',
  Horizontal = 'horizontal',
}

export enum BorderType {
  None = 'none',
  Horizontal = 'horizontal',
  Vertical = 'vertical',
  Both = 'both',
  All = 'all',
}

export interface TimeRange {
  lower: string
  upper?: string | null
  seconds?: number
  format?: string
  label?: string
  duration?: string
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Password = 'password',
  Email = 'email',
  Checkbox = 'checkbox',
  Range = 'range',
}

export enum AutoInputMode {
  Auto = 'auto',
  Custom = 'custom',
}

export enum PopoverInteraction {
  Hover = 'hover',
  Click = 'click',
  None = 'none',
}

export enum PopoverPosition {
  Above = 'above',
  Below = 'below',
  ToTheLeft = 'to-left',
  ToTheRight = 'to-right',
}

export enum PopoverType {
  Solid = 'solid',
  Outline = 'outline',
}

export enum EncType {
  Application = 'application/x-www-form-urlencoded',
  Multipart = 'multipart/form-data',
  Text = 'text/plain',
}

export enum Method {
  Post = 'post',
  Get = 'get',
  Dialog = 'dialog',
}

export enum Wrap {
  Hard = 'hard',
  Soft = 'soft',
  Off = 'off',
}
