import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import Notification from '../components/Notification';

export default class NotificationsScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Notification text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis mollis porttitor. Cras imperdiet interdum metus sed volutpat. Morbi sed metus non lacus auctor condimentum eget quis dui. Sed consectetur metus lacus, non vehicula nisi tempor imperdiet. Nulla facilisi." />
        <Notification text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam venenatis mollis porttitor." />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});