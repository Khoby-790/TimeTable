import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Store from './Src/library/Store';
import Views from './Src/Screens/Views';
import Course from './Src/Screens/course';
import scheduleNotification from './Src/library/scheduleNotifications';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = { loading: true, schedule: null };
  }

  async storeSchedule(){
      const schedule = await Store.storeSchedule();
      this.setState({ schedule, loading: false });
  }


  async componentDidMount(){
    await this.storeSchedule();

  }


  render() {
    scheduleNotification();
    if(this.state.loading){
      return(
          <View>
            <Text>Loading</Text>
          </View>
      )
    }

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
