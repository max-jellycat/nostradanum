import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from '../components/Text';
import Card from '../components/Card';
import Button from '../components/Button';
import { Colors, Sizes } from '../constants';
import NumberContainer from '../components/NumberContainer';
import normalize from '../utils/normalize';

const GameOverScreen = ({ numRounds, userNumber, onNewGame }) => (
  <View style={styles.screen}>
    <Text isBold size="large">Nostradanum has prevailed!</Text>
    <View style={styles.icon}>
      <MaterialCommunityIcons name="crystal-ball" size={Sizes.huge * 2} color="white" />
    </View>
    <Card style={styles.infos}>
      <View style={styles.info}>
        <Text size="large" isBold>Number</Text>
        <NumberContainer number={userNumber} />
      </View>
      <View style={styles.info}>
        <Text size="large" isBold>Rounds</Text>
        <NumberContainer number={numRounds} />
      </View>
    </Card>
    <Button style={styles.restartButton} variant="primary" onPress={onNewGame}>New game</Button>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: Sizes.large,
    alignItems: 'center',
  },
  icon: {
    width: normalize(150),
    height: normalize(150),
    marginVertical: Sizes.larger,
    backgroundColor: Colors.gold,
    borderRadius: normalize(75),
    justifyContent: 'center',
    alignItems: 'center',
  },
  infos: {
    width: '80%',
    minWidth: normalize(300),
    maxWidth: '95%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  info: {
    alignItems: 'center',
  },

  restartButton: {
    marginTop: Sizes.huge,
  },
});

GameOverScreen.propTypes = {
  numRounds: PropTypes.number.isRequired,
  userNumber: PropTypes.number.isRequired,
  onNewGame: PropTypes.func.isRequired,
};

export default GameOverScreen;
