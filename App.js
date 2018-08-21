// import React from 'react';
// import { View, Text } from 'react-native';

// import HomeScreen from './components/screens/Home';
// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1 }}>
//         <HomeScreen />
//       </View>
//     );
//   }
// }


import { createStackNavigator } from 'react-navigation';

import LoginScreen from './components/screens/Login';
import HomeScreen from './components/screens/Home';

const App = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#240c5d',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default App;