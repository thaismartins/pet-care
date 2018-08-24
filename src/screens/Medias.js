import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Header from '../components/Header/Header';

export default class MediasScreen extends Component {

  render() {
    return (
      <View>
        <Header />
        <Text>Entrou MediasScreen</Text>
      </View>
    );
  }
}