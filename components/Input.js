import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import { Colors, Sizes } from '../constants';

const Input = ({ style, ...props }) => (
  <TextInput {...props} style={{ ...styles.input, ...style }} />
);

const styles = StyleSheet.create({
  input: {
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    borderRadius: Sizes.medium,
    padding: Sizes.small,
    marginVertical: Sizes.medium,
  },
});

Input.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  style: {},
};

export default Input;
