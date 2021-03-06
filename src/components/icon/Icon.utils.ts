import { colors } from '../../theme/colors'
import { IconName, IconColors, IconRotation } from './Icon.types'
import { COMPONENTS } from './icons'

export const calculateComponent = (name: IconName) => COMPONENTS[name]

const COLORS: {
  [key: string]: IconColors
} = {
  indigo: {
    primary: colors.indigo,
    secondary: colors.eucalyptusGreen,
    tertiary: colors.white,
  },
  white: {
    primary: colors.white,
    secondary: colors.eucalyptusGreen,
    tertiary: colors.white,
  },
}

export const calculateColors = (variant: string) => COLORS[variant]

export const ROTATIONS = ['none', 'right', 'flip', 'left', 'mirror'] as const

export const calculateRotationDegrees = (rotate: IconRotation) => {
  switch (rotate) {
    case 'right':
      return 'transform: rotate(90deg);'
    case 'flip':
      return 'transform: rotate(180deg);'
    case 'left':
      return 'transform: rotate(270deg);'
    case 'mirror':
      return 'transform: scale(-1,1);'
    default:
      return 'transform: none;'
  }
}
