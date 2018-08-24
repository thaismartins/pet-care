import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { text, time, image } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Image
            style={styles.image}
            source={image} />
          <Text style={styles.text}>{ text }</Text>
        </View>
        <Text style={styles.sendedBy}>{ time }</Text>
      </View>
    );fff
  }
}

TalkBalloon.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    minHeight: 80,
    marginHorizontal: 15,
    marginVertical: 7,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: colors.neutrals.middle,
    borderBottomWidth: 2,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    overflow: 'hidden'
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderBottomRightRadius: 10,
  },
  text: {
    color: colors.black,
    margin: 20,
    flex: 1
  },
  sendedBy: {
    fontSize: fonts.sizes.small,
    color: colors.neutrals.end,
    flex: 1,
    alignSelf: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 10
  },
});