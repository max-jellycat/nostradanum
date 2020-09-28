import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, TouchableWithoutFeedback, Keyboard, Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import Card from '../components/Card';
import Text from '../components/Text';
import Input from '../components/Input';
import Button from '../components/Button';
import { Colors, Sizes, FontSizes } from '../constants';
import NumberContainer from '../components/NumberContainer';
import normalize from '../utils/normalize';

const StartGameScreen = ({ onStartGame }) => {
  const [value, setValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(null);

  const numberInputHandler = (text) => {
    // Remove all none number characters
    setValue(text.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(value, 10);

    if (!chosenNumber || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99.',
        [{
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler,
        }],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setValue('');
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
      <View style={styles.screen}>
        <Text size="large" isBold style={styles.title}>Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Type a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            value={value}
            onChangeText={numberInputHandler}
          />
          <View style={styles.inputButtons}>
            <Button variant="gray" style={styles.button} onPress={resetInputHandler}>Reset</Button>
            <Button variant="primary" style={styles.button} onPress={confirmInputHandler}>Confirm</Button>
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer number={selectedNumber} />
            <Button style={styles.startButton} variant="gold" onPress={() => onStartGame(selectedNumber)}>Start Game</Button>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    padding: Sizes.medium,
  },
  title: {
    marginTop: Sizes.medium,
    marginBottom: Sizes.large,
  },
  inputContainer: {
    alignItems: 'center',
    width: '80%',
    minWidth: normalize(300),
    maxWidth: '95%',
  },
  inputButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: Sizes.medium,
    paddingTop: Sizes.large,
  },
  input: {
    height: normalize(50),
    width: normalize(80),
    color: Colors.primary,
    textAlign: 'center',
    fontSize: FontSizes.large,
  },
  button: {
    width: normalize(110),
  },
  summaryContainer: {
    marginTop: Sizes.large,
    width: '60%',
    alignItems: 'center',
  },

  startButton: {
    marginTop: Sizes.medium,
  },
});

StartGameScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default StartGameScreen;
