import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class TalkBalloon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../public/images/dog.jpg')} />
        <Text style={styles.text}>Entrou TalkBaloon</Text>
        <Text style={styles.sendedBy}>11:48</Text>
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
  image: {
    flex: 1,
    width: 100,
  },
  sendedBy: {
    fontSize: 12,
    opacity: 0.6,
    alignSelf: 'flex-end',
    marginTop: 5
  },
});