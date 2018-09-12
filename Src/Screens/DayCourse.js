import React from 'react';
import {View, Text, ScrollView,} from 'react-native';

import Course from './course';
import styles from './Css/Styles';


let data = require('../../data.json');
let days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dat = new Date();









 export default class DayCourse extends React.Component{
   constructor(props){
     super(props);
     this.state = {
       collectedData:'hello',
       loader:true,
     }
   }

   componentDidMount(){
     inforamtion = this.collectUsertimeTable();
     inforamtion.then((value)=>{
       this.setState({
         collectedData:value,
         loader:false
       })
     })
   }

   collectUsertimeTable = async () =>{
     let userDetails = await AsyncStorage.getItem('userDetails');

     return userDetails;
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
      backgroundColor :'#363765',
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
                JSON.parse(this.state.collectedData).days[days_of_week[day_number]].courses.map((value,index)=>this.displayCourse(value,index))
              }
              </ScrollView>

            </View>
          </View>
        );
}

}
