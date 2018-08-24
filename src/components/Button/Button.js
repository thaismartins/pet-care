import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { colors } from '../../theme';

export default class Button extends Component {

  _getColors() {
    if(this.props.colors) {
      return this.props.colors;
    }

    return [ colors.oranges.start, colors.oranges.end ];
  }

  render() {

    const color = this._getColors();
    const { text, onPress } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
              onPress={() => onPress() }>
              <LinearGradient
                colors={color}
                style={styles.button}>
                  <Text style={styles.buttonText}>{ text }</Text>
              </LinearGradient>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  button: {
    width: 140,
    height: 40,
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: colors.white,
  }
});