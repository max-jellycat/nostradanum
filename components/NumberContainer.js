import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';

import Text from './Text';
import { Colors, Sizes } from '../constants';

const NumberContainer = ({ number }) => (
  <View style={styles.container}>
    <Text color="primary" size="huge" isBold>{number}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 110,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: Sizes.medium,
    padding: Sizes.medium,
    marginVertical: Sizes.medium,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

NumberContainer.propTypes = {
  number: PropTypes.number.isRequired,
};

export default NumberContainer;
