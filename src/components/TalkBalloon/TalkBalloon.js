import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import { colors, fonts } from '../../theme';

export default class TalkBalloon extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../../public/images/dog.jpg')} />
        <Text style={styles.text}>Entrou TalkBaloon</Text>
        <Text style={styles.sendedBy}>11:48</Text>
      </View>
    );fff
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: 80,
    marginHorizontal: 15,
    marginVertical: 7,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderColor: colors.neutrals.middle,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    flexDirection: 'row',
    overflow: 'hidden'
  },
  image: {
    width: 100,
    height: 100
  },
  text: {
    color: colors.black,
    margin: 20,
    flex: 1
  },
  sendedBy: {
    fontSize: fonts.sizes.small,
    color: colors.neutrals.end,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 10
  },
});