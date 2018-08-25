import React from 'react';
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import Course from './course';
let data = require('../../data.json');

let days_of_week = ['Monday','Tuesday','Wednesday','Thursday','Friday'];

let days = data.days;
let day_number = 4;

let course = data.days;
// console.log();

let dat = new Date();
console.log(" the days is " + dat.getDay());
export default class TimeTable extends React.Component{
  constructor(props){
    super(props);
  }

viewCourse(){
  let days = data.days;
  for(let i in days){
    console.log(i);
  }
}


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Text style={styles.navTitle}>Timetable</Text>
        </View>
        <View style={styles.content}>

          <ScrollView>
          {course[days_of_week[day_number]].courses.map((i,v)=>{
          return(
            <Course
              course_code={i.course_id}
              course_title={i.course_title}
              time={i.time}
              venue={i.venue}
            />
          );
        })
      }

            </ScrollView>

        </View>
      </View>
    );
  }


}


const styles  = StyleSheet.create({
  container:{
    flex:1,
  },
  navTitle:{
    color:'white',
    fontWeight:'bold',
    fontSize:25,
  },
  navbar:{
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:24,
    height:40,
    width:'100%',
    backgroundColor:'blue',
    // color:'white',
  },
  content:{
    flex:1,
    padding:5,
    paddingTop:10,
    backgroundColor:'skyblue',
    alignItems:'center',
  }
});
