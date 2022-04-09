import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

let styles;

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Hello! android platform api test application...
        </Text>
      </View>
    );
  }
}

styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 20,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default Home;
