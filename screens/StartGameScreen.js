import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard, Alert,
} from 'react-native';

import Card from '../components/Card';
import Text from '../components/Text';
import Input from '../components/Input';
import { Colors, Sizes, FontSizes } from '../constants';
import NumberContainer from '../components/NumberContainer';

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
            <View style={styles.button}>
              <Button title="Reset" color={Colors.gray} onPress={resetInputHandler} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={Colors.primary} onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.summaryContainer}>
            <Text>You selected</Text>
            <NumberContainer number={selectedNumber} />
            <Button title="START GAME" onPress={() => onStartGame(selectedNumber)} />
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
    width: 300,
    maxWidth: '80%',
  },
  inputButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: Sizes.mediumLarge,
  },
  input: {
    height: 50,
    width: 80,
    color: Colors.primary,
    textAlign: 'center',
    fontSize: FontSizes.large,
    fontWeight: 'bold',
  },
  button: {
    width: 100,
  },
  summaryContainer: {
    marginTop: Sizes.large,
    width: '60%',
    alignItems: 'center',
  },
});

StartGameScreen.propTypes = {
  onStartGame: PropTypes.func.isRequired,
};

export default StartGameScreen;
