import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';

import Badge from '../Badge/Badge';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{  height: 100 }}>
        <View style={styles.box}>
          <Text style={styles.name}>COOPER</Text>
        </View>
        <Image
          style={styles.photo}
          source={require('../../../public/images/dog.jpg')} />
        <View style={styles.notification}>
          <Badge number={0} />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Notifications') }>
            <Icon name="bell" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  box: {
    height: 60,
    backgroundColor: '#582089',
    paddingLeft: 100,
    justifyContent: 'center'
  },
  name: {
    color: '#fff',
    fontWeight: 'bold'
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    top: 10,
    left: 15,
    borderWidth: 3,
    borderColor: '#fff'
  },
  notification: {
    position: 'absolute',
    right: 15,
    top: 17
  },
});