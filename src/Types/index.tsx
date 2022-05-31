import {CSSProperties, ReactNode} from 'react'
import {
  GRID_BREAKPOINT_SM,
  GRID_BREAKPOINT_MD,
  GRID_BREAKPOINT_LG,
} from '../Constants'

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

// Passing in link elements
export type RenderLinkElement = (className: string) => JSX.Element

// Shared Data Types
export enum ComponentColor {
  Default = 'default',
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
  Colorless = 'colorless',
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

export enum ComponentOrientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
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
  CephalopodInk = 'CephalopodInk',
  DarkChocolate = 'DarkChocolate',
  LASunset = 'LASunset',
  PolarExpress = 'PolarExpress',
  RebelAlliance = 'RebelAlliance',
  JungleDusk = 'JungleDusk',
  SavannaHeat = 'SavannaHeat',
  DocScott = 'DocScott',
  GundamPilot = 'GundamPilot',
  TropicalTourist = 'TropicalTourist',
  JalapenoTaco = 'JalapenoTaco',
  FuyuPersimmon = 'FuyuPersimmon',
  DesertFestival = 'DesertFestival',
  MiyazakiSky = 'MiyazakiSky',
  GarageBand = 'GarageBand',
  MangoGrove = 'MangoGrove',
  ScotchBonnet = 'ScotchBonnet',
  BrooklynCowboy = 'BrooklynCowboy',
  PastelGothic = 'PastelGothic',
  LowDifficulty = 'LowDifficulty',
  CitrusSodapop = 'CitrusSodapop',
  CaliforniaCampfire = 'CaliforniaCampfire',
  SynthPop = 'SynthPop',
  CottonCandy = 'CottonCandy',
  HotelBreakfast = 'HotelBreakfast',
  CandyApple = 'CandyApple',
  JustPeachy = 'JustPeachy',
  MagicCarpet = 'MagicCarpet',
  CruisingAltitude = 'CruisingAltitude',
  CoconutLime = 'CoconutLime',
  MillennialAvocado = 'MillennialAvocado',
  GoldenHour = 'GoldenHour',
  PastryCafe = 'PastryCafe',
  KawaiiDesu = 'KawaiiDesu',
  RobotLogic = 'RobotLogic',
  MintyFresh = 'MintyFresh',
  SimpleCream = 'SimpleCream',
  // Brand Gradients
  WarpSpeed = 'WarpSpeed',
  PowerStone = 'PowerStone',
  MilkyWay = 'MilkyWay',
  LazyAfternoon = 'LazyAfternoon',
  NineteenEightyFour = 'NineteenEightyFour',
  RadioactiveWarning = 'RadioactiveWarning',
  LostGalaxy = 'LostGalaxy',
  GrapeSoda = 'GrapeSoda',
  LavenderLatte = 'LavenderLatte',
  OminousFog = 'OminousFog',
  // Single Hue Gradients
  DefaultLight = 'DefaultLight',
  Default = 'Default',
  DefaultDark = 'DefaultDark',
  PrimaryLight = 'PrimaryLight',
  Info = 'Info',
  PrimaryDark = 'PrimaryDark',
  SecondaryLight = 'SecondaryLight',
  Secondary = 'Secondary',
  SecondaryDark = 'SecondaryDark',
  SuccessLight = 'SuccessLight',
  Success = 'Success',
  SuccessDark = 'SuccessDark',
  WarningLight = 'WarningLight',
  Warning = 'Warning',
  WarningDark = 'WarningDark',
  DangerLight = 'DangerLight',
  Danger = 'Danger',
  DangerDark = 'DangerDark',
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

export enum Direction {
  Left = 'left',
  Right = 'right',
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
  // Grey
  Grey5 = '#07070e',
  Grey15 = '#1a1a2a',
  Grey25 = '#333346',
  Grey35 = '#4d4d60',
  Grey45 = '#68687b',
  Grey55 = '#828294',
  Grey65 = '#9e9ead',
  Grey75 = '#b9b9c5',
  Grey85 = '#d5d5dd',
  Grey95 = '#f1f1f3',
  White = '#ffffff',

  // Neutrals
  Obsidian = '#07070e', // Grey5
  Raven = '#07070e', // Grey5
  Kevlar = '#07070e', // Grey5
  Castle = '#1a1a2a', // Grey15
  Onyx = '#1a1a2a', // Grey15
  Pepper = '#333346', // Grey25
  Smoke = '#333346', // Grey25
  Graphite = '#4d4d60', // Grey35
  Storm = '#68687b', // Grey45
  Mountain = '#68687b', // Grey45
  Wolf = '#828294', // Grey55
  Sidewalk = '#9e9ead', // Grey65
  Forge = '#9e9ead', // Grey65
  Mist = '#b9b9c5', // Grey75
  Chromium = '#b9b9c5', // Grey75
  Platinum = '#d5d5dd', // Grey85
  Pearl = '#d5d5dd', // Grey85
  Whisper = '#f1f1f3', // Grey95
  Cloud = '#f1f1f3', // Grey95
  Ghost = '#f1f1f3', // Grey95

  // Blues
  Abyss = '#120653',
  Sapphire = '#0b3a8d',
  Ocean = '#066fc5',
  Pool = '#00a3ff',
  Laser = '#00C9FF',
  Hydrogen = '#6BDFFF',
  Neutrino = '#BEF0FF',
  Yeti = '#F0FCFF',

  // Purples
  Shadow = '#2b007e',
  Void = '#5c10a0',
  Amethyst = '#8e1fc3',
  Star = '#be2ee4',
  Comet = '#ce58eb',
  Potassium = '#dd84f1',
  Moonstone = '#ebadf8',
  Twilight = '#fad9ff',

  // Greens
  Gypsy = '#003e34',
  Emerald = '#006f49',
  Viridian = '#009f5f',
  Rainforest = '#34bb55',
  Honeydew = '#67d74e',
  Krypton = '#9bf445',
  Wasabi = '#c6f98e',
  Mint = '#f3ffd6',

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
  Galaxy = '#9394FF',
  Pulsar = '#513CC6',
  CetaceanBlue = '#020A47',
  DogwoodRose = '#D30971',
  PurpleX = '#9B2AFF',
}

export enum IconFont {
  AddCell = 'add-cell',
  AddCell_New = 'add-cell-new',
  Alerts = 'alerts',
  AlertTriangle = 'alert-triangle',
  AlertTriangle_New = 'alert-triangle-new',
  Annotate = 'annotate',
  Annotate_New = 'annotate-new',
  AnnotatePlus = 'annotate-plus',
  ArrowDown_New = 'arrow-down-new',
  ArrowLeft_New = 'arrow-left-new',
  ArrowRight_New = 'arrow-right-new',
  ArrowUp_New = 'arrow-up-new',
  AuthZero = 'authzero',
  BarChart = 'bar-chart',
  BarChart_New = 'bar-chart-new',
  Bell = 'bell',
  BellRinging = 'bell-ringing',
  BellSolid = 'bell-solid',
  Bill = 'bill',
  BookCode = 'book-code',
  BookPencil = 'book-pencil',
  Book = 'book',
  BookOutline = 'book-outline',
  Braces = 'braces',
  Brush = 'brush',
  BuildOutline_New = 'build-outline-new',
  BucketOutline = 'bucket-outline',
  BucketSolid = 'bucket-solid',
  Calendar = 'calendar',
  CalendarSmall = 'calendar-small',
  Capacitor = 'capacitor2',
  CaretDown = 'caret-down',
  CaretDown_New = 'caret-down-new',
  CaretLeft = 'caret-left',
  CaretLeft_New = 'caret-left-new',
  CaretRight = 'caret-right',
  CaretRight_New = 'caret-right-new',
  CaretUp = 'caret-up',
  CaretUp_New = 'caret-up-new',
  Chat = 'chat',
  Checkmark = 'checkmark',
  Checkmark_New = 'checkmark-new',
  Circle = 'circle',
  CircleThick = 'circle-thick',
  Clipboard_New = 'clipboard-new',
  Clock = 'clock',
  Clock_New = 'clock-new',
  Cloud = 'cloud',
  CogOutline = 'cog-outline',
  CogOutline_New = 'cog-outline-new',
  CogSolid_New = ' cog-solid-new',
  CogThick = 'cog-thick',
  Collapse = 'collapse',
  CopperCoin = 'copper-coin',
  CrownOutline = 'crown-outline',
  CrownSolid = 'crown2',
  CrownSolid_New = 'crown-solid-new',
  Cube = 'cube',
  Cubo = 'cubo',
  CuboNav = 'cubo-nav',
  Cubouniform = 'cubo-uniform',
  CuboSolid = 'cubo-solid',
  CurrencyEUR = 'currency-eur',
  CurrencyGBP = 'currency-gbp',
  CurrencyUSD = 'currency-usd',
  Dashboards = 'dashboards',
  Darkmode_New = 'dark-mode-new',
  DashF = 'dash-f',
  DashH = 'dash-h',
  DashJ = 'dash-j',
  Disks = 'disks',
  DisksNav = 'disks-nav',
  Download = 'download',
  Download_New = 'download-new',
  DragToExpand = 'drag-to-expand',
  Duplicate = 'duplicate',
  Duplicate_New = 'duplicate-new',
  Edit = 'edit',
  Erlenmeyer = 'erlenmeyer',
  Expand_New = 'expand-new',
  ExpandA = 'expand-a',
  ExpandB = 'expand-b',
  Export = 'export',
  Export_New = 'export-new',
  Eye = 'eye',
  Eye_New = 'eye-open-new',
  FileSettings = 'file-settings',
  Function = 'fn',
  FunnelOutline = 'funnel-outline',
  FunnelSolid = 'funnel-solid',
  EyeClosed = 'eye-closed',
  EyeOpen = 'eye-open',
  GitHub = 'github',
  Google = 'google',
  GraphLine = 'graphline-2',
  GraphLine_New = 'graph-line-new',
  Group = 'group',
  Handle_New = 'handle-new',
  HeartSolid = 'heart-solid',
  Heroku = 'heroku',
  HerokuSimple = 'heroku-simple',
  History = 'history',
  HomeOutline_New = 'home-outline-new',
  Import = 'import',
  Info_New = 'info-new',
  Ingest_New = 'ingest-new',
  Install = 'install',
  Layers = 'layers',
  Lightmode_New = 'light-mode-new',
  Link = 'link',
  Lock = 'lock',
  LockOutline_New = 'lock-outline-new',
  Logout_New = 'log-out-new',
  Maximize = 'maximize',
  Minimize = 'minimize',
  Moon = 'moon',
  More = 'more',
  Merge = 'merge',
  NavChat = 'nav-chat',
  OAuth = 'oauth',
  Octagon = 'octagon',
  Okta = 'okta',
  Organization = 'organization',
  Pause = 'pause',
  Pencil = 'pencil',
  PieChart = 'pie-chart',
  Pin_New = 'pin-new',
  Play = 'play',
  PlayOutline = 'play-outline',
  Plus = 'plus',
  Plus_New = 'plus-new',
  PlusSkinny = 'plus-skinny',
  Polaroid = 'polaroid',
  Pulse = 'pulse-c',
  QuestionMark_New = 'question-mark-new',
  QuestionMark_Outline = 'question-mark-outline',
  Redo = 'redo',
  Refresh = 'refresh',
  Refresh_New = 'refresh-new',
  Remove = 'remove',
  Remove_New = 'remove-new',
  Save = 'save',
  Search = 'search',
  Search_New = 'search-new',
  Server = 'server2',
  Share = 'share',
  ShareSolid = 'share-solid',
  Shield = 'shield',
  ShieldSolid = 'shield-solid',
  Shuffle = 'shuffle',
  SidebarClose_New = 'sidebar-close-new',
  SidebarOpen_New = 'sidebar-open-new',
  Square = 'square',
  SquareCheck = 'square-check',
  StackSolid = 'stack-solid',
  Star = 'star',
  StarSmile = 'star-smile',
  Stop = 'stop',
  Stop_New = 'stop-new',
  Switch_New = 'switch-new',
  Subscribe = 'subscribe',
  Subtract = 'subtract',
  Sun = 'sun',
  Table = 'table',
  Terminal = 'terminal',
  Text_New = 'text-new',
  TextBlock = 'text-block',
  Trash = 'trash',
  Trash_New = 'trash-new',
  Triangle = 'triangle',
  Undo = 'undo',
  Upgrade = 'upgrade',
  Upload_New = 'upload-new',
  UploadOutline = 'upload-outline',
  User = 'user',
  UserAdd = 'user-add',
  UserOutline = 'user-outline',
  UserOutline_New = 'user-outline-new',
  UserRemove = 'user-remove',
  UsersDuo = 'users-duo',
  UsersTrio = 'users-trio',
  Wand = 'wand',
  Wood = 'wood',
  Wrench = 'wrench',
  WrenchNav = 'wrench-nav',
  Zap = 'zap',
}

export enum LogoAuxiliaryText {
  None = 'None',
  Cloud = 'Cloud',
  Enterprise = 'Enterprise',
  OpenSource = 'OpenSource',
}

export enum LogoBaseText {
  None = 'None',
  InfluxData = 'InfluxData',
  InfluxDb = 'InfluxDb',
  Telegraf = 'Telegraf',
}

export enum LogoMarks {
  Kubo = 'Kubo',
  KuboOld = 'KuboOld',
}

export enum LogoSymbols {
  None = 'None',
  Trademark = 'Trademark',
  Registered = 'Registered',
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

export enum InputToggleType {
  Checkbox = 'checkbox',
  Radio = 'radio',
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
  ToTheRightTop = 'to-right-top',
}

export enum Appearance {
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

export interface Coordinates {
  x: number
  y: number
}

export enum LinkTarget {
  Blank = '_blank',
  Parent = '_parent',
  Self = '_self',
  Top = '_top',
}

export enum LinkRel {
  Alternate = 'alternate',
  Author = 'author',
  Bookmark = 'bookmark',
  External = 'external',
  Help = 'help',
  License = 'license',
  Next = 'next',
  NoFollow = 'nofollow',
  NoOpener = 'noopener',
  NoReferrer = 'noreferrer',
  Prev = 'prev',
  Search = 'search',
  Tag = 'tag',
}

export enum Typeface {
  RobotoMono = 'Roboto Mono',
  ProximaNova = 'Proxima Nova',
}

export enum HeadingElement {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
  Span = 'span',
  Div = 'div',
  P = 'p',
}

export enum FontWeight {
  Light = '300',
  Regular = '400',
  Medium = '500',
  Bold = '700',
  Black = '900',
}

export enum Breakpoint {
  None = 0,
  Small = GRID_BREAKPOINT_SM,
  Medium = GRID_BREAKPOINT_MD,
  Large = GRID_BREAKPOINT_LG,
}
