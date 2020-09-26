import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Button } from 'react-native';

import Text from '../components/Text';
import { Sizes } from '../constants';

const GameOverScreen = ({ numRounds, userNumber, onNewGame }) => (
  <View style={styles.screen}>
    <Text>Game Over</Text>
    <Text>{`Number to guess: ${userNumber}`}</Text>
    <Text>{`Number of rounds: ${numRounds}`}</Text>
    <Button title="New game" onPress={onNewGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Sizes.medium,
  },
});

GameOverScreen.propTypes = {
  numRounds: PropTypes.number.isRequired,
  userNumber: PropTypes.number.isRequired,
  onNewGame: PropTypes.func.isRequired,
};

export default GameOverScreen;
