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
import { colors, fonts, icons } from '../../theme';

class Header extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{  height: 100 }}>
        <View style={styles.box}>
          <Text style={styles.name}>Cooper</Text>
        </View>
        <Image
          style={styles.photo}
          source={require('../../../public/images/dog.jpg')} />
        <TouchableOpacity
          style={styles.notification}
          onPress={() => this.props.navigation.navigate('Notifications') }>
          <Badge number={3} />
          <Icon name="bell" size={icons.sizes.header} color={colors.white} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(Header);

const styles = StyleSheet.create({
  box: {
    height: 60,
    backgroundColor: colors.purples.start,
    paddingLeft: 110,
    justifyContent: 'center'
  },
  name: {
    color: colors.white,
    fontWeight: fonts.weights.bold,
    fontSize: fonts.sizes.headerTitle
  },
  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'absolute',
    top: 10,
    left: 15,
    borderWidth: 3,
    borderColor: colors.white
  },
  notification: {
    position: 'absolute',
    right: 0,
    top: 2,
    padding: 15
  },
});