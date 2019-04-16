import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import AddItem from './src/components/AddItem';
import Registration from './src/components/Registration';



export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <AddItem />
        {/* <Registration /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});
