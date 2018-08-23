import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class TalkBalloon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Entrou TalkBaloon</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    minHeight: 80,
    margin: 10,
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: '#ddd',
    borderBottomWidth: 2,
    borderRightWidth: 1
  },
  text: {

  }
});