import React from 'react';
import { Dimensions, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';


export default class LoginScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image style={styles.logo} source={require('../../public/images/logo.png')} />
          <Text style={styles.logoText}>PETCARE</Text>
        </View>
        
        <TextInput style={styles.input} placeholder="Seu Celular" textContentType="telephoneNumber" keyboardType="phone-pad" />
        <TextInput style={styles.input} placeholder="Sua Senha" secureTextEntry={true} textContentType="password" />

        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Home') }>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


let { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#240c5d',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoBox: {
      marginBottom: 30,
    },
    logo: {
      width: width * 0.8,
      height: 120,
      resizeMode: 'contain',
      marginBottom: 10
    },
    logoText: {
      color: 'white',
      textAlign: 'center'
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