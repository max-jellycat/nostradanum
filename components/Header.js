import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

import { Colors } from '../constants';
import Text from './Text';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text color="light" size="medium" isBold>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
