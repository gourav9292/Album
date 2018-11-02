import React from 'react';
import { StyleSheet, View } from 'react-native';

//My Components
import Header from './components/Header';
import AlbumList from './components/AlbumList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Albums!" />
        <AlbumList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'flex-start',
    // backgroundColor: '#fff',
    // paddingLeft: 20,
    // paddingRight: 30
  }
});
