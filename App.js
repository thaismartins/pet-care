import React from 'react';
// import { View, Text } from 'react-native';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import AuthLoadingScreen from './screens/AuthLoading';

const AuthStack = createStackNavigator({ 
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});
const AppStack = createBottomTabNavigator({
  Home: HomeScreen,
  Login: LoginScreen,
}, {
  initialRouteName: 'Login',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = `superpowers${focused ? '' : ''}`;
      } else if (routeName === 'Login') {
        iconName = `gears${focused ? '' : ''}`;
      }

      return <Icon name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: '#240c5d',
    }
  }
});

export default createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  });