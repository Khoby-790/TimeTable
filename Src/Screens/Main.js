import React from 'react';
import { Permissions, Notifications } from 'expo';
import {View, Text, StyleSheet, ScrollView, Button, Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';
import Course from './course';
import { createBottomTabNavigator } from 'react-navigation';
import Days from './Days';
import styles from './Css/Styles';
import DayScreen from './index';


let data = require('../../data.json');
let days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dat = new Date();

let day_number = dat.getDay();

let course = data.days;


 


export default class TimeTable extends React.Component{
  constructor(props){
    super(props);
    
  }



  

  


displayCourse(data,v){
  if(data == null){
    // return();
  }else{
    return(
      <Course
        key={v}
        course_code={data.course_id}
        course_title={data.course_title}
        course_time={data.course_time}
        course_venue={data.course_venue}
      />
    );
  }
}


  render(){
    if(day_number == 0 || day_number == 6){
        return(
          <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.navTitle}>{days_of_week[day_number]}</Text>
            </View>
            <View style={styles.content}>
                <Text style={{textAlign:'center'}}>Sorry No Schedule for the day</Text>
            </View>
          </View>
        );
    }else{
        return(
          <View style={styles.container}>
            <View style={styles.navbar}>
                <Text style={styles.navTitle}>{days_of_week[day_number]}</Text>
            </View>
            <View style={styles.content}>

              <ScrollView>
              {
                course[days_of_week[day_number]].courses.map((i,v)=>this.displayCourse(i,v))
              }
              </ScrollView>

            </View>
          </View>
        );
  }
}

}







