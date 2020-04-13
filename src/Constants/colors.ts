import {Color, InfluxColors} from '../Types'

export const influxColors: Color[] = [
  // Row 1
  {
    hex: '#5c10a0',
    name: 'Void',
  },
  {
    hex: '#8e1fc3',
    name: 'Amethyst',
  },
  {
    hex: '#be2ee4',
    name: 'Star',
  },
  {
    hex: '#ce58eb',
    name: 'Comet',
  },
  {
    hex: '#dd84f1',
    name: 'Potassium',
  },
  {
    hex: '#ebadf8',
    name: 'Moonstone',
  },
  {
    hex: '#fafafc',
    name: 'Ghost',
  },
  {
    hex: '#c6cad3',
    name: 'Chromium',
  },
  {
    hex: '#757888',
    name: 'Mountain',
  },
  {
    hex: '#31313d',
    name: 'Onyx',
  },
  // Row 2
  {
    hex: '#0b3a8d',
    name: 'Sapphire',
  },
  {
    hex: '#066fc5',
    name: 'Ocean',
  },
  {
    hex: '#00a3ff',
    name: 'Pool',
  },
  {
    hex: '#00C9FF',
    name: 'Laser',
  },
  {
    hex: '#6BDFFF',
    name: 'Hydrogen',
  },
  {
    hex: '#BEF0FF',
    name: 'Neutrino',
  },
  {
    hex: '#f6f6f8',
    name: 'Cloud',
  },
  {
    hex: '#bec2cc',
    name: 'Mist',
  },
  {
    hex: '#676978',
    name: 'Storm',
  },
  {
    hex: '#292933',
    name: 'Castle',
  },
  // Row 3
  {
    hex: '#006f49',
    name: 'Emerald',
  },
  {
    hex: '#009f5f',
    name: 'Viridian',
  },
  {
    hex: '#34bb55',
    name: 'Rainforest',
  },
  {
    hex: '#67d74e',
    name: 'Honeydew',
  },
  {
    hex: '#9bf445',
    name: 'Krypton',
  },
  {
    hex: '#c6f98e',
    name: 'Wasabi',
  },
  {
    hex: '#eeeff2',
    name: 'Whisper',
  },
  {
    hex: '#a4a8b6',
    name: 'Forge',
  },
  {
    hex: '#545667',
    name: 'Graphite',
  },
  {
    hex: '#202028',
    name: 'Kevlar',
  },
  // Row 4
  {
    hex: '#E85B1C',
    name: 'Topaz',
  },
  {
    hex: '#F48D38',
    name: 'Tiger',
  },
  {
    hex: '#FFB94A',
    name: 'Pineapple',
  },
  {
    hex: '#FFD255',
    name: 'Thunder',
  },
  {
    hex: '#FFE480',
    name: 'Sulfur',
  },
  {
    hex: '#FFF6B8',
    name: 'Daisy',
  },
  {
    hex: '#e7e8eb',
    name: 'Pearl',
  },
  {
    hex: '#999dab',
    name: 'Sidewalk',
  },
  {
    hex: '#434453',
    name: 'Smoke',
  },
  {
    hex: '#1c1c21',
    name: 'Raven',
  },
  // Row 5
  {
    hex: '#BF3D5E',
    name: 'Ruby',
  },
  {
    hex: '#DC4E58',
    name: 'Fire',
  },
  {
    hex: '#F95F53',
    name: 'Curacao',
  },
  {
    hex: '#FF8564',
    name: 'Dreamsicle',
  },
  {
    hex: '#FFB6A0',
    name: 'Tungsten',
  },
  {
    hex: '#FFDCCF',
    name: 'Marmelade',
  },
  {
    hex: '#d4d7dd',
    name: 'Platinum',
  },
  {
    hex: '#8e91a1',
    name: 'Wolf',
  },
  {
    hex: '#383846',
    name: 'Pepper',
  },
  {
    hex: '#0f0e15',
    name: 'Obsidian',
  },
]

export const influxGradients = {
  BeijingEclipse: {
    start: InfluxColors.Basalt,
    stop: InfluxColors.Shadow,
  },
  DistantNebula: {
    start: InfluxColors.Shadow,
    stop: InfluxColors.Abyss,
  },
  SpirulinaSmoothie: {
    start: InfluxColors.Abyss,
    stop: InfluxColors.Gypsy,
  },
  LASunset: {
    start: InfluxColors.Ruby,
    stop: InfluxColors.Void,
  },
  PolarExpress: {
    start: InfluxColors.Void,
    stop: InfluxColors.Sapphire,
  },
  RebelAlliance: {
    start: InfluxColors.Sapphire,
    stop: InfluxColors.Emerald,
  },
  DocScott: {
    start: InfluxColors.Fire,
    stop: InfluxColors.Amethyst,
  },
  GundamPilot: {
    start: InfluxColors.Amethyst,
    stop: InfluxColors.Ocean,
  },
  TropicalTourist: {
    start: InfluxColors.Ocean,
    stop: InfluxColors.Viridian,
  },
  DesertFestival: {
    start: InfluxColors.Curacao,
    stop: InfluxColors.Star,
  },
  MiyazakiSky: {
    start: InfluxColors.Star,
    stop: InfluxColors.Pool,
  },
  GarageBand: {
    start: InfluxColors.Pool,
    stop: InfluxColors.Rainforest,
  },
  BrooklynCowboy: {
    start: InfluxColors.Dreamsicle,
    stop: InfluxColors.Comet,
  },
  PastelGothic: {
    start: InfluxColors.Comet,
    stop: InfluxColors.Laser,
  },
  LowDifficulty: {
    start: InfluxColors.Laser,
    stop: InfluxColors.Honeydew,
  },
  SynthPop: {
    start: InfluxColors.Tungsten,
    stop: InfluxColors.Potassium,
  },
  CottonCandy: {
    start: InfluxColors.Potassium,
    stop: InfluxColors.Hydrogen,
  },
  HotelBreakfast: {
    start: InfluxColors.Hydrogen,
    stop: InfluxColors.Krypton,
  },
  MagicCarpet: {
    start: InfluxColors.Marmelade,
    stop: InfluxColors.Moonstone,
  },
  CruisingAltitude: {
    start: InfluxColors.Moonstone,
    stop: InfluxColors.Neutrino,
  },
  CoconutLime: {
    start: InfluxColors.Neutrino,
    stop: InfluxColors.Wasabi,
  },
  PastryCafe: {
    start: InfluxColors.Flan,
    stop: InfluxColors.Twilight,
  },
  KawaiiDesu: {
    start: InfluxColors.Twilight,
    stop: InfluxColors.Yeti,
  },
  RobotLogic: {
    start: InfluxColors.Yeti,
    stop: InfluxColors.Mint,
  },
  CephalopodInk: {
    start: InfluxColors.Gypsy,
    stop: InfluxColors.Oak,
  },
  JungleDusk: {
    start: InfluxColors.Emerald,
    stop: InfluxColors.Topaz,
  },
  JalapenoTaco: {
    start: InfluxColors.Viridian,
    stop: InfluxColors.Tiger,
  },
  MangoGrove: {
    start: InfluxColors.Rainforest,
    stop: InfluxColors.Pineapple,
  },
  CitrusSodapop: {
    start: InfluxColors.Honeydew,
    stop: InfluxColors.Thunder,
  },
  CandyApple: {
    start: InfluxColors.Krypton,
    stop: InfluxColors.Sulfur,
  },
  MillennialAvocado: {
    start: InfluxColors.Wasabi,
    stop: InfluxColors.Daisy,
  },
  MintyFresh: {
    start: InfluxColors.Mint,
    stop: InfluxColors.Banana,
  },
  DarkChocolate: {
    start: InfluxColors.Oak,
    stop: InfluxColors.Basalt,
  },
  SavannaHeat: {
    start: InfluxColors.Topaz,
    stop: InfluxColors.Ruby,
  },
  FuyuPersimmon: {
    start: InfluxColors.Tiger,
    stop: InfluxColors.Fire,
  },
  ScotchBonnet: {
    start: InfluxColors.Pineapple,
    stop: InfluxColors.Curacao,
  },
  CaliforniaCampfire: {
    start: InfluxColors.Thunder,
    stop: InfluxColors.Dreamsicle,
  },
  JustPeachy: {
    start: InfluxColors.Sulfur,
    stop: InfluxColors.Tungsten,
  },
  GoldenHour: {
    start: InfluxColors.Daisy,
    stop: InfluxColors.Marmelade,
  },
  SimpleCream: {
    start: InfluxColors.Banana,
    stop: InfluxColors.Flan,
  },
  // Brand Gradients
  WarpSpeed: {
    start: InfluxColors.DeepPurple,
    stop: InfluxColors.Void,
  },
  PowerStone: {
    start: InfluxColors.Void,
    stop: InfluxColors.Magenta,
  },
  OminousFog: {
    start: InfluxColors.Pulsar,
    stop: InfluxColors.Galaxy,
  },
  MilkyWay: {
    start: InfluxColors.Magenta,
    stop: InfluxColors.Galaxy,
  },
  LazyAfternoon: {
    start: InfluxColors.Pool,
    stop: InfluxColors.Galaxy,
  },
  NineteenEightyFour: {
    start: InfluxColors.Pool,
    stop: InfluxColors.Magenta,
  },
  RadioactiveWarning: {
    start: InfluxColors.Pool,
    stop: InfluxColors.Chartreuse,
  },
  LostGalaxy: {
    start: InfluxColors.DeepPurple,
    stop: InfluxColors.Pulsar,
  },
  GrapeSoda: {
    start: InfluxColors.DeepPurple,
    stop: InfluxColors.Amethyst,
  },
  LavenderLatte: {
    start: InfluxColors.DeepPurple,
    stop: InfluxColors.Star,
  },
  // Single Hue Gradients
  DefaultDark: {
    start: InfluxColors.Castle,
    stop: InfluxColors.Smoke,
  },
  Default: {
    start: InfluxColors.Wolf,
    stop: InfluxColors.Mist,
  },
  DefaultLight: {
    start: InfluxColors.Mist,
    stop: InfluxColors.Cloud,
  },
  PrimaryDark: {
    start: InfluxColors.Sapphire,
    stop: InfluxColors.Ocean,
  },
  Primary: {
    start: InfluxColors.Pool,
    stop: InfluxColors.Laser,
  },
  PrimaryLight: {
    start: InfluxColors.Laser,
    stop: InfluxColors.Hydrogen,
  },
  SecondaryDark: {
    start: InfluxColors.Void,
    stop: InfluxColors.Amethyst,
  },
  Secondary: {
    start: InfluxColors.Star,
    stop: InfluxColors.Comet,
  },
  SecondaryLight: {
    start: InfluxColors.Comet,
    stop: InfluxColors.Moonstone,
  },
  SuccessDark: {
    start: InfluxColors.Emerald,
    stop: InfluxColors.Viridian,
  },
  Success: {
    start: InfluxColors.Rainforest,
    stop: InfluxColors.Honeydew,
  },
  SuccessLight: {
    start: InfluxColors.Honeydew,
    stop: InfluxColors.Krypton,
  },
  WarningDark: {
    start: InfluxColors.Topaz,
    stop: InfluxColors.Tiger,
  },
  Warning: {
    start: InfluxColors.Pineapple,
    stop: InfluxColors.Thunder,
  },
  WarningLight: {
    start: InfluxColors.Thunder,
    stop: InfluxColors.Sulfur,
  },
  DangerDark: {
    start: InfluxColors.Ruby,
    stop: InfluxColors.Fire,
  },
  Danger: {
    start: InfluxColors.Curacao,
    stop: InfluxColors.Dreamsicle,
  },
  DangerLight: {
    start: InfluxColors.Dreamsicle,
    stop: InfluxColors.Tungsten,
  },
}

export const dropdownScrollColors = {
  Amethyst: {
    start: InfluxColors.Neutrino,
    stop: InfluxColors.Hydrogen,
  },
  Sapphire: {
    start: InfluxColors.Neutrino,
    stop: InfluxColors.Hydrogen,
  },
  Malachite: {
    start: InfluxColors.Neutrino,
    stop: InfluxColors.Krypton,
  },
}
