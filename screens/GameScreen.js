import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Button, Alert,
} from 'react-native';

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

const GameScreen = ({ userChoice, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(
    1,
    100,
    userChoice,
  ));
  const [rounds, setRounds] = useState(0);
  const currentLowest = useRef(1);
  const currentHighest = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if ((direction === 'lower' && currentGuess < userChoice) || (direction === 'greater' && currentGuess > userChoice)) {
      Alert.alert(
        'Don\'t lie!',
        'You know you cannot deceive Nostradanum!',
        [{ text: 'Sorry...', style: 'cancel' }],
      );
      return;
    }

    if (direction === 'lower') {
      currentHighest.current = currentGuess;
    } else {
      currentLowest.current = currentGuess;
    }

    setCurrentGuess(generateRandomBetween(
      currentLowest.current,
      currentHighest.current,
      currentGuess,
    ));
    setRounds((current) => current + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent&apos;s Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Lower" onPress={() => nextGuessHandler('lower')} />
        </View>
        <View style={styles.button}>
          <Button title="Greater" onPress={() => nextGuessHandler('greater')} />
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
  onGameOver: PropTypes.func.isRequired,
};

export default GameScreen;
