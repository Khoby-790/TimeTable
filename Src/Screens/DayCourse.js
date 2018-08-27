import React from 'react';
import {View, Text, ScrollView,} from 'react-native';
import Course from './course';
import { createBottomTabNavigator } from 'react-navigation';
import Days from './Days';
import styles from './Css/Styles';
import DayScreen from './index';


let data = require('../../data.json');
let days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dat = new Date();



let course = data.days;


 


 export default class DayCourse extends React.Component{
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

static navigationOptions =({navigation})=> {
  return{
    title: navigation.getParam('day') ,
    headerStyle:{
      backgroundColor :'#003366',
    },
    headerTintColor: '#fff',
    headerTitleStyle:{
      color: 'white',
    }
  }
};


  render(){
  
    let day_number = this.props.navigation.getParam('course_num');
        return(
          <View style={styles.container}>
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


