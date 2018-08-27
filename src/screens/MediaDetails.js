import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import { colors, fonts } from '../theme'; 
import CloseButton from '../components/CloseButton';

export default class MediaDetails extends Component {
  render() {
    const { title, text, time, image } = this.props.navigation.state.params;

    return (
      <View style={styles.container}>

        <CloseButton />

        <Image
          source={image}
          style={styles.image} />
        
        <View style={styles.box}>
          <Text style={styles.title}>{ title }</Text>
          <ScrollView style={styles.text}>
            <Text>{ text }</Text>
            <Text style={styles.sendedBy}> { time } </Text>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutrals.start,
  },
  box: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: colors.neutrals.end
  },
  image: {
    flex: 1,
    width: null,
    resizeMode: 'cover'
  },
  title: {
    fontWeight: fonts.weights.bold,
    color: colors.purples.start,
    margin: 20,
    marginBottom: 10,
  },
  text: {
    paddingHorizontal: 20
  },
  sendedBy: {
    flex: 1,
    fontSize: fonts.sizes.small,
    color: colors.neutrals.end,
    alignSelf: 'flex-end',
    marginVertical: 10
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#58208980',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2000,
    top: 10,
    right: 10
  },
  buttonText: {
    color: colors.white,
    fontWeight: fonts.weights.bold,
    fontSize: fonts.sizes.small
  }
});