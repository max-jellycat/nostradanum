import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../components/Text';
import { Sizes } from '../constants';

const GameOverScreen = () => (
  <View style={styles.screen}>
    <Text>Game Over</Text>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Sizes.medium,
  },
});

export default GameOverScreen;
