import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Notification from '../components/Notification';

import { colors, fonts } from '../theme';

export default class NotificationsScreen extends Component {

  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableHighlight
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="arrow-left" size={25} color={colors.white} />
          </TouchableHighlight>
          <Text style={styles.title}>Notificações</Text>
        </View>
        <Notification text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis mollis porttitor. Cras imperdiet interdum metus sed volutpat. Morbi sed metus non lacus auctor condimentum eget quis dui. Sed consectetur metus lacus, non vehicula nisi tempor imperdiet. Nulla facilisi." />
        <Notification text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis mollis porttitor." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: colors.purples.start,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15
  },
  title: {
    color: colors.white,
    fontWeight: fonts.weigths.bold,
    fontSize: fonts.sizes.headerTitle
  }
});