import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Button } from 'react-native';

import Text from '../components/Text';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import { Sizes } from '../constants';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return random;
};

const GameScreen = ({ userChoice }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));

  return (
    <View style={styles.screen}>
      <Text>Opponent&apos;s Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Lower" onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Button title="Greater" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Sizes.medium,
    alignItems: 'center',
  },

  buttons: {
    width: 300,
    maxWidth: '80%',
    marginTop: Sizes.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: 100,
  },
});

GameScreen.propTypes = {
  userChoice: PropTypes.number.isRequired,
};

export default GameScreen;
