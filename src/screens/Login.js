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

import { TextInputMask } from 'react-native-masked-text';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const LOGIN_BOX_BOTTOM = height * 0.25;
const LOGIN_BOX_BOTTOM_MIN = 20;

const LOGO_TEXT_HEIGHT = 60;
const LOGO_TEXT_HEIGHT_MIN = 40;


export default class LoginScreen extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {

    this.logoBottom = new Animated.Value(LOGIN_BOX_BOTTOM);
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
      Animated.timing(this.logoBottom, {
        toValue: LOGIN_BOX_BOTTOM_MIN,
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
      Animated.timing(this.logoBottom, {
        toValue: LOGIN_BOX_BOTTOM,
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
      <View style={{flex: 1}}>
        <LinearGradient
            colors={['#582089', '#301167', '#240c5d']}
            style={styles.container}>
            
          <Animated.View style={{
            position: 'absolute',
            bottom: this.logoBottom,
            alignItems: 'center'}}>

            <View style={{ marginBottom: 20, alignItems: 'center' }}>
              <Animated.Image
                style={[{ opacity: this.logoOpacity }, styles.logo]}
                source={require('../../public/images/logo.png')} />

              <Animated.Image
                style={[{ height: this.logoTextHeight }, styles.logoText]}
                source={require('../../public/images/petcare.png')} />
            </View>
            
            <TextInputMask
              style={styles.input}
              placeholder="Seu Celular"
              placeholderTextColor="#fff"
              textContentType="telephoneNumber"
              keyboardType="phone-pad"
              type={'cel-phone'}
              underlineColorAndroid="transparent" />

            <TextInput
              style={styles.input}
              placeholder="Sua Senha"
              placeholderTextColor="#fff"
              secureTextEntry={true} 
              textContentType="password"
              underlineColorAndroid="transparent" />

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home') }>
              <LinearGradient
                colors={['#dc5225', '#c11d2e']}
                style={styles.button}>
                  <Text style={styles.buttonText}>
                    Entrar
                  </Text>
              </LinearGradient>
            </TouchableOpacity>
            
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: width * 0.6,
      height: 80,
      resizeMode: 'contain',
      marginBottom: 5
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
