import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#fd79a8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerTitle: {
    color: '#2d3436',
    fontSize: 18,
    fontWeight: '600',
  },
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
