import React, { useState } from 'react';
import {
  StyleSheet, View, Button, TouchableWithoutFeedback, Keyboard,
} from 'react-native';

import Card from '../components/Card';
import Text from '../components/Text';
import Input from '../components/Input';
import { Colors, Sizes, FontSizes } from '../constants';

const StartGameScreen = () => {
  const [value, setValue] = useState('');

  const numberInputHandler = (text) => {
    // Remove all none number characters
    setValue(text.replace(/[^0-9]/g, ''));
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
            caretHidden
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            value={value}
            onChangeText={numberInputHandler}
          />
          <View style={styles.inputButtons}>
            <View style={styles.button}>
              <Button title="Reset" color={Colors.gray} onPress={() => {}} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={Colors.primary} onPress={() => {}} />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Sizes.medium,
    alignItems: 'center',
  },
  title: {
    marginVertical: Sizes.medium,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  inputButtons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: Sizes.mediumLarge,
  },
  input: {
    width: 50,
    textAlign: 'center',
    fontSize: FontSizes.large,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
