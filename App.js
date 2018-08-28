import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Views from './Src/Screens/Views';
import Course from './Src/Screens/course';

export default class App extends React.Component {
  render() {
    return (
       <Views/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
