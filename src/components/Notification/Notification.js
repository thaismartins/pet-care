import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export default class Notification extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { text, color } = this.props;

    return (
      <View style={styles.container}>
        <Image
            style={styles.image}
            source={require('../../../public/images/dog.jpg')}
          />
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Vencimento do Pagamento</Text>
          <Text>{text}</Text>
          <Text style={styles.sendedBy}>11:48</Text>
        </View>
      </View>
    );
  }
}

Notification.propTypes = {
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
  },
  title: {
    fontWeight: 'bold',
    color: '#240c5d',
    marginBottom: 5
  },
  sendedBy: {
    fontSize: 12,
    opacity: 0.6,
    alignSelf: 'flex-end',
    marginTop: 5
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 30,
    marginRight: 15,
  }
});