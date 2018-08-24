import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import TalkBalloon from '../components/TalkBalloon';
import Header from '../components/Header';

import { colors } from '../theme';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <TalkBalloon />
        <TalkBalloon />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutrals.start
  }
});