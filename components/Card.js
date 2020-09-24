import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import { Colors, Sizes } from '../constants';

const Card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style }}>{ children }</View>
);

const styles = StyleSheet.create({
  card: {
    padding: Sizes.large,
    borderRadius: Sizes.medium,
    backgroundColor: 'white',
    shadowColor: Colors.dark,
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    elevation: 5,
  },
});

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Card.defaultProps = {
  style: {},
};

export default Card;
