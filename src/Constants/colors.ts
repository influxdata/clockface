import {
  Color,
  InfluxColors,
  Gradients,
  Gradient,
  DropdownMenuTheme,
} from '../Types'

export const HEX_CODE_CHAR_LENGTH = 7

export const influxColors: Color[] = [
  // Row 1
  {
    hex: '#311F94',
    name: 'Void',
  },
  {
    hex: '#513CC6',
    name: 'Amethyst',
  },
  {
    hex: '#7A65F2',
    name: 'Star',
  },
  {
    hex: '#9394FF',
    name: 'Comet',
  },
  {
    hex: '#B1B6FF',
    name: 'Potassium',
  },
  {
    hex: '#C9D0FF',
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
    hex: '#326BBA',
    name: 'Sapphire',
  },
  {
    hex: '#4591ED',
    name: 'Ocean',
  },
  {
    hex: '#22ADF6',
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
    hex: '#108174',
    name: 'Emerald',
  },
  {
    hex: '#32B08C',
    name: 'Viridian',
  },
  {
    hex: '#4ED8A0',
    name: 'Rainforest',
  },
  {
    hex: '#7CE490',
    name: 'Honeydew',
  },
  {
    hex: '#A5F3B4',
    name: 'Krypton',
  },
  {
    hex: '#C6FFD0',
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
  BrandGradientA: {
    start: InfluxColors.BrandDeepPurple,
    stop: InfluxColors.BrandMagenta,
  },
  BrandGradientB: {
    start: InfluxColors.BrandDeepPurple,
    stop: InfluxColors.Comet,
  },
  BrandGradientC: {
    start: InfluxColors.BrandMagenta,
    stop: InfluxColors.Comet,
  },
  BrandGradientD: {
    start: InfluxColors.Pool,
    stop: InfluxColors.Comet,
  },
  BrandGradientE: {
    start: InfluxColors.Pool,
    stop: InfluxColors.BrandMagenta,
  },
  BrandGradientF: {
    start: InfluxColors.Pool,
    stop: InfluxColors.BrandChartreuse,
  },
  BrandGradientG: {
    start: InfluxColors.BrandDeepPurple,
    stop: InfluxColors.Void,
  },
  BrandGradientH: {
    start: InfluxColors.BrandDeepPurple,
    stop: InfluxColors.Amethyst,
  },
  BrandGradientI: {
    start: InfluxColors.BrandDeepPurple,
    stop: InfluxColors.Star,
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

export const getColorsFromGradient = (
  gradient: Gradients | DropdownMenuTheme | string
): Gradient => {
  return dropdownScrollColors[gradient] || influxGradients[gradient]
}
