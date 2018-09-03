import React from 'react';
import {View, Text, ScrollView, AsyncStorage,TouchableOpacity} from 'react-native';
import Course from './course';
import styles from './Css/Styles';
import SelectPage from './selectpage';
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//let data = require('../../data.json');
let days_of_week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let dat = new Date();
let day_number = 1;
var day = dat.getDate();
let Actual_day;
let inforamtion;
let userData;
let data;
let courses ={};
let convertData = new Array();
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
  //let course = data.days;





export default class TimeTable extends React.Component{
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


  handleRemove(){
    AsyncStorage.clear();
    return(
      <SelectPage/>
    );
  }


 con = () => {
  console.log(courses);
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
    if(this.state.loader){
        return(
          <View style={styles.container}>
              <Text>Loading</Text>
          </View>
        );
    }else{
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
                    <TouchableOpacity
                    onPress={()=>this.handleRemove()}
                    >
                    <Text style={styles.navTitle}>{days_of_week[day_number]}</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.navbarRight}>
                      <Text style={styles.date}>{REAL_DATE}</Text>
                  </View>
              </View>
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
  }

}
