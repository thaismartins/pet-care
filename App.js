import React from 'react';
// import { View, Text } from 'react-native';

import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import { colors } from './src/theme';

import AuthLoadingScreen from './src/screens/AuthLoading';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import MediasScreen from './src/screens/Medias';
import NotificationsScreen from './src/screens/Notifications';
import MediaDetails from './src/screens/MediaDetails';

const HomeStack = createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        title: 'Notificações',
      },
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: colors.purples.start
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center'
      },
    }
});

const MediasStack = createStackNavigator({
  Medias: MediasScreen,
  MediaDetails: MediaDetails
}, {
  navigationOptions: {
    header: null
  }
});

const AuthStack = createStackNavigator({ 
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Medias: MediasStack
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
      } 

      return <Icon name={iconName} size={30} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: colors.oranges.start,
    inactiveTintColor: '#fff',
    showLabel: false,
    style: {
      backgroundColor: colors.purples.start,
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