import React from 'react';
import {View, Text, ScrollView, AsyncStorage} from 'react-native';
import Course from './course';
import styles from './Css/Styles';

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let data = require('../../data.json');
let days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dat = new Date();
let day_number = dat.getDay();
var day = dat.getDate();
let Actual_day;

//check and present the day in the right form .....

  if(day == 1 || day == 21 || day == 31){
    Actual_day = `${day}st`;
  }else if(day == 2 || day == 22){
    Actual_day = `${day}nd`;
  }else if(day == 3 || day == 23){
    Actual_day = `${day}rd`;
  }else{
    Actual_day = `${day}th`;
  }
  let REAL_DATE = `${Actual_day} ${MONTHS[dat.getMonth()]} ${dat.getFullYear()}`;
  let course = data.days;


 


export default class TimeTable extends React.Component{
  constructor(props){
    super(props);
    
  }

  collectUsertimeTable = async () =>{
    let userData = await AsyncStorage.getItem('userDetails');
    return userData;
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
                <View style={styles.navbarLeft}>
                  <Text style={styles.navTitle}>{days_of_week[day_number]}</Text>
                </View>
                <View style={styles.navbarRight}>
                    <Text style={styles.date}>{REAL_DATE}</Text>
                </View>
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







