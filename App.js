import React from 'react';
import { View, Text } from 'react-native';

import Login from './components/screens/Login'

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    );
  }
}
