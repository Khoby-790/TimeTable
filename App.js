import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TimeTable from './Src/Screens/Main';
export default class App extends React.Component {
  render() {
    return (<TimeTable/>);
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
