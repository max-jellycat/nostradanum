import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  View, StyleSheet, Alert, ScrollView, Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import Text from '../components/Text';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Button from '../components/Button';
import { Colors, FontSizes, Sizes } from '../constants';
import normalize from '../utils/normalize';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return random;
};

const ListItem = ({ item, nRound }) => (
  <View key={item} style={styles.listItem}>
    <Text color="gray" size="large">{`#${nRound}`}</Text>
    <Text size="large" isBold>{item}</Text>
  </View>
);

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(
    1,
    100,
    userChoice,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);
  const currentLowest = useRef(1);
  const currentHighest = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
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
      currentLowest.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLowest.current,
      currentHighest.current,
      currentGuess,
    );

    setCurrentGuess(nextNumber);
    setPastGuesses((current) => [nextNumber, ...current]);
  };

  return (
    <View style={styles.screen}>
      <Text>Opponent&apos;s Guess</Text>
      <NumberContainer number={currentGuess} />
      <Card style={styles.buttons}>
        <Button style={styles.button} variant="primary" onPress={() => nextGuessHandler('lower')}>
          <FontAwesome name="minus" size={FontSizes.medium} color={Colors.white} />
        </Button>
        <Button style={styles.button} variant="primary" onPress={() => nextGuessHandler('greater')}>
          <FontAwesome name="plus" size={FontSizes.medium} color={Colors.white} />
        </Button>
      </Card>
      <View style={styles.list}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          {pastGuesses.map((guess, index) => (
            <ListItem key={guess} item={guess} nRound={pastGuesses.length - index} />
          ))}
        </ScrollView>
      </View>
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
    width: '80%',
    minWidth: normalize(300),
    maxWidth: '95%',
    marginTop: Sizes.large,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: normalize(110),
  },
  list: {
    width: '80%',
    minWidth: normalize(300),
    maxWidth: '95%',
    marginTop: Sizes.large,
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: 'center',
  },
  listItem: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.light,
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: Sizes.medium,
    paddingRight: Sizes.larger,
    marginVertical: Sizes.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

GameScreen.propTypes = {
  userChoice: PropTypes.number.isRequired,
  onGameOver: PropTypes.func.isRequired,
};

ListItem.propTypes = {
  item: PropTypes.number.isRequired,
  nRound: PropTypes.number.isRequired,
};

export default GameScreen;
