import React from 'react';
import { StyleSheet,AsyncStorage, ActivityIndicator, View, StatusBar } from 'react-native';
import Store from './Src/library/Store';
import Views from './Src/Screens/Views';
import MainPage from './Src/Screens/MainPage';
import Course from './Src/Screens/course';
// import scheduleNotification from './Src/library/scheduleNotifications';
import SelectPage from './Src/Screens/selectpage';
import {createSwitchNavigator} from 'react-navigation';


//create switch navigation to check if user has already selected a levela and his/her program

const SwitchNav = createSwitchNavigator({
  Select:SelectPage,
  pagecheck:MainPage,
  try:Course,
});



export default class App extends React.Component {
  constructor(props){
    super(props);
    // this._boostrapAsync();
    //this.state = { loading: true, schedule: null };
  }

  // async storeSchedule(){
  //     const schedule = await Store.storeSchedule();
  //     this.setState({ schedule, loading: false });
  // }


  //on app start check if a new user ? "navigate to selcet page " : "navigate to timetable"
  _boostrapAsync = async () =>{
    let userToken =  null;
    AsyncStorage.getItem('userDetails')
                .then((value)=>{
                  userToken  = value;
                  // console.log(value)
              }).done();
    //upon collect data navigation is done on that

    return (userToken? <Views/>: <SelectPage/>);
  }

async componentDidMount(){
  this._boostrapAsync();
}


  render() {

    return (
      <SwitchNav/>
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
