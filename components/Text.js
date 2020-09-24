import React from 'react';
import PropTypes from 'prop-types';
import { Text as RNText } from 'react-native';

import { Colors, FontSizes } from '../constants';

const Text = ({
  color, size, isBold, centered, children, style, ...props
}) => (
  <RNText
    {...props}
    style={{
      ...style,
      color: Colors[color],
      fontSize: FontSizes[size],
      fontWeight: isBold ? 'bold' : 'normal',
      textAlign: centered ? 'center' : 'left',
    }}
  >
    { children }
  </RNText>
);

Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.string,
  isBold: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Text.defaultProps = {
  color: 'dark',
  size: 'default',
  isBold: false,
  centered: false,
  style: {},
};

export default Text;
