/*
*@description :: this is the where the app begins to run
*@author: Backslash
*@
*
*/


import React from 'react';
import { StyleSheet,AsyncStorage, ActivityIndicator, View, StatusBar ,Text} from 'react-native';
import Store from './Src/library/Store';
import Views from './Src/Screens/Views';
import MainPage from './Src/Screens/MainPage';
import Course from './Src/Screens/course';
// import scheduleNotification from './Src/library/scheduleNotifications';
import SelectPage from './Src/Screens/selectpage';
import {createSwitchNavigator} from 'react-navigation';

let userExists;
//create switch navigation to check if user has already selected a levela and his/her program





 class App extends React.Component {
  constructor(props){
    super(props);
     this._bootstrapAsync();
    this.state = { loading: true, data:null};
  }


  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userDetails');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'pagecheck' : 'Select');
  };


  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
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



export default createSwitchNavigator({
  app:App,
  Select:SelectPage,
  pagecheck:Views,
});
