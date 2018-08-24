import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Notification from '../components/Notification/Notification';

export default class NotificationsScreen extends Component {

  render() {
    return (
      <View>
        <View style={styles.header}>
          <TouchableHighlight
            style={styles.backButton}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon name="arrow-left" size={25} color="#fff" />
          </TouchableHighlight>
          <Text style={styles.text}>Notificações</Text>
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
    backgroundColor: '#582089',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  }
});