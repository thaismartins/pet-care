import React, { Component } from 'react';

import {
  StyleSheet,
  ScrollView,
  FlatList,
  View
} from 'react-native';

import Header from '../components/Header/Header';
import MediaBox from '../components/MediaBox';

export default class MediasScreen extends Component {

  items = [
    { id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id est ac nisi sollicitudin dictum at eget magna. Duis at mi id urna convallis interdum et id erat. In hendrerit massa libero, non vehicula urna mollis at. Sed varius rhoncus faucibus. Cras nec dui in risus tincidunt lacinia sed non mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed sit amet sodales lacus. Suspendisse malesuada sed metus ultricies blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam purus turpis, euismod sed accumsan ac, feugiat ac leo. Proin lectus ligula, dignissim et neque eget, rhoncus tincidunt orci. Nulla maximus sem accumsan, dignissim lacus hendrerit, dictum dui.', time: '11:48', image: require('../../public/images/dog.jpg') },
    { id: 2, text: 'Sed sit amet sodales lacus. Suspendisse malesuada sed metus ultricies blandit.', time: '14:27', image: require('../../public/images/dog2.jpg') },
    { id: 3, text: 'Suspendisse malesuada sed metus ultricies blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam purus turpis, euismod sed accumsan ac, feugiat ac leo.', time: '14:27', image: require('../../public/images/dog3.jpg') },
    { id: 4, text: 'Suspendisse malesuada sed metus ultricies blandit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam purus turpis, euismod sed accumsan ac, feugiat ac leo.', time: '14:27', image: require('../../public/images/dog.jpg') }
  ];

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.images}>
          <FlatList
            data={this.items}
            keyExtractor={item => item.id}
            numColumns={3}
            renderItem={({ item }) => {
              return (
                <MediaBox key={item.id} text={item.text} time={item.time} image={item.image} />
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  images: {
    flex: 1
  },
});