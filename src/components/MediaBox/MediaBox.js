import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { withNavigation } from 'react-navigation';

class MediaBox extends Component {

  _goToMediaDetails() {
    const { text, time, image } = this.props;
    
    this.props.navigation.navigate({
      routeName: 'MediaDetails',
      params: {
        text,
        time,
        image
      }
    });
  }

  render() {
    const { image } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => this._goToMediaDetails() }>
          <Image
            style={styles.image}
            source={ image } />
        </TouchableOpacity>
      </View>
    );
  }
}

MediaBox.propTypes = {
  text: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  image: PropTypes.number
};

export default withNavigation(MediaBox);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    height: 200,
    flexBasis: 0,
    flexGrow: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  }
});