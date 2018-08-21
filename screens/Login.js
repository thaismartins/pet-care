import React, { Component } from 'react';
import { 
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Animated,
  Keyboard,
  Platform
} from 'react-native';

// import TextInputMask from 'react-native-text-input-mask';

const LOGIN_BOX_TOP = 150;
const LOGIN_BOX_TOP_MIN = 0;

const LOGO_TEXT_HEIGHT = 70;
const LOGO_TEXT_HEIGHT_MIN = 40;

const { width } = Dimensions.get('window');

export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.logoTop = new Animated.Value(LOGIN_BOX_TOP);
    this.logoOpacity = new Animated.Value(1);
    this.logoTextHeight = new Animated.Value(LOGO_TEXT_HEIGHT_MIN);
    
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardOpen);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardHide);
  }

  componentWillUnmount () {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  _keyboardOpen = (event) => {

    let duration = Platform.OS == 'android' ? 160 : event.duration;

    Animated.parallel([
      Animated.timing(this.logoTop, {
        toValue: LOGIN_BOX_TOP_MIN,
        duration: duration
      }).start(),
      Animated.timing(this.logoOpacity, {
        toValue: 0,
        duration: duration
      }).start(),
      Animated.timing(this.logoTextHeight, {
        toValue: LOGO_TEXT_HEIGHT,
        duration: duration
      }).start()
    ]);
  }

  _keyboardHide = () => {
    
    let duration = Platform.OS == 'android' ? 160 : event.duration;

    Animated.parallel([
      Animated.timing(this.logoTop, {
        toValue: LOGIN_BOX_TOP,
        duration: duration
      }).start(),
      Animated.timing(this.logoOpacity, {
        toValue: 1,
        duration: duration
      }).start(),
      Animated.timing(this.logoTextHeight, {
        toValue: LOGO_TEXT_HEIGHT_MIN,
        duration: duration
      }).start()
    ]);
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{
            position: 'absolute',
            top: this.logoTop,
            alignItems: 'center'
          }}>

          <View style={{ marginBottom: 20, alignItems: 'center' }}>
            <Animated.Image style={[{ opacity: this.logoOpacity }, styles.logo]} source={require('../public/images/logo.png')} />
            <Animated.Image style={[{ height: this.logoTextHeight }, styles.logoText]} source={require('../public/images/petcare.png')} />
          </View>
          
          <TextInput style={styles.input} placeholder="Seu Celular" textContentType="telephoneNumber" keyboardType="phone-pad" />
          <TextInput style={styles.input} placeholder="Sua Senha" secureTextEntry={true} textContentType="password" />

          <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home') }>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#240c5d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: width * 0.6,
      height: 80,
      resizeMode: 'contain',
      marginBottom: 10
    },
    logoText: {
      resizeMode: 'contain',
    },
    input: {
      width: width * 0.6,
      height: 50,
      marginBottom: 20,
      color: '#fff',
      borderBottomColor: '#fff',
      borderBottomWidth: 1,
      textAlign: 'center'
    },
    button: {
      width: 140,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#c11d2e',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    buttonText: {
      color: '#fff',
    }
  });