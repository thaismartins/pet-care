import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text
} from 'react-native';

import TalkBalloon from '../components/TalkBalloon';
import Header from '../components/Header';

import { colors } from '../theme';

export default class HomeScreen extends React.Component {

  render() {
    const image = require('../../public/images/dog.jpg');

    return (
      <View style={styles.container}>
        <Header />
        <ScrollView>
          <TalkBalloon text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id est ac nisi sollicitudin dictum at eget magna. Duis at mi id urna convallis interdum et id erat. In hendrerit massa libero, non vehicula urna mollis at. Sed varius rhoncus faucibus. Cras nec dui in risus tincidunt lacinia sed non mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet sodales lacus. Suspendisse malesuada sed metus ultricies blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam purus turpis, euismod sed accumsan ac, feugiat ac leo. Proin lectus ligula, dignissim et neque eget, rhoncus tincidunt orci. Nulla maximus sem accumsan, dignissim lacus hendrerit, dictum dui." time="11:26" />
          <TalkBalloon text="Sed sit amet sodales lacus. Suspendisse malesuada sed metus ultricies blandit." time="14:28" image={image} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.neutrals.start
  }
});