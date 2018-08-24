import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._checkIfUserIsLogged();
  }

  _checkIfUserIsLogged = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate('App');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={60} color="#fff" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#240c5d'
  }
});