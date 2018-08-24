import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

export default class Badge extends Component {

  constructor(props) {
    super(props);
  }

  _showBadge() {
    if(this.props.number && this.props.number > 0) {
      return (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{this.props.number}</Text>
        </View>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View>
        {this._showBadge()}
      </View>
    );
  }
}

Badge.propTypes = {
  number: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  badge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#dc5225',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -12,
    right: -12,
    zIndex: 2
  },
  badgeText: {
    fontWeight: 'bold',
    color: '#fff',
  }
});