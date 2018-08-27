import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors, fonts } from '../../theme';

class CloseButton extends Component {

  _returnToPreviousScreen() {
    if(!this.props.navigation.goBack())
      this.props.navigation.navigate('Notifications');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this._returnToPreviousScreen()}>
            <Icon name="times" size={20} color={colors.white}/>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(CloseButton);

const styles = StyleSheet.create({
  container: {
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
});