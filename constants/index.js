import normalize from '../utils/normalize';

export const Colors = {
  dark: '#2f3640',
  light: '#f5f6fa',
  white: '#fff',
  gray: '#7f8fa6',
  primary: '#487eb0',
  gold: '#e1b12c',
};

export const Sizes = {
  small: normalize(4),
  medium: normalize(8),
  mediumLarge: normalize(12),
  large: normalize(16),
  larger: normalize(32),
  huge: normalize(64),
};

export const FontSizes = {
  small: normalize(12),
  default: normalize(14),
  medium: normalize(16),
  large: normalize(18),
  larger: normalize(24),
  huge: normalize(48),
};
