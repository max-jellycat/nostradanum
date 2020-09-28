import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { Colors } from '../constants';
import normalize from '../utils/normalize';
import Text from './Text';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text color="light" size="medium" isBold>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: normalize(90),
    paddingTop: normalize(36),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
