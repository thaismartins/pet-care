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
import MediasScreen from './screens/Medias';
import NotificationsScreen from './screens/Notifications';

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
  Medias: MediasScreen,
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      header: { visible: false },
    },
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
      } else if(routeName === 'Medias') {
        iconName = 'image';
      } else if(drouteName === 'Notifications') {
        iconName = 'gears';
      } 

      return <Icon name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#dc5225',
    inactiveTintColor: '#fff',
    showLabel: false,
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