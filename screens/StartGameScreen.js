import React from 'react';
import {
  StyleSheet, View, TextInput, Button,
} from 'react-native';

import Card from '../components/Card';
import Text from '../components/Text';
import { Colors, Sizes } from '../constants';

const StartGameScreen = () => (
  <View style={styles.screen}>
    <Text size="large" isBold style={styles.title}>Start a new game</Text>
    <Card style={styles.inputContainer}>
      <Text>Type a number</Text>
      <TextInput />
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
);

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
    paddingHorizontal: Sizes.medium,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
