import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import Text from './Text';
import { Colors, Sizes } from '../constants';

const Button = ({
  variant, size, onPress, children, style,
}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        ...styles.button,
        ...style,
        backgroundColor: Colors[variant],
      }}
    >
      <Text size={size === 'large' ? 'larger' : 'medium'} color={variant ? 'white' : 'dark'}>{children}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    borderRadius: Sizes.small,
    paddingVertical: Sizes.medium,
    paddingHorizontal: Sizes.large,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Button.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Button.defaultProps = {
  variant: 'light',
  size: 'default',
  style: {},
};

export default Button;
