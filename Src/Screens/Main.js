import React from 'react';
import {View, Text, StyleSheet } from 'react-native';


export default class TimeTable extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.navbar}>
            <Text style={styles.navTitle}>Timetable</Text>
        </View>
        <View style={styles.content}>

            <View style={styles.card}>
              <View style={styles.row}>
                  <Text style={styles.course_code}>CSCD 201</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.course_code}>Computer Design And Architecture</Text>
              </View>
              <View style={styles.row, styles.rowBottom}>
                  <View style={styles.col}>
                      <Text style={styles.time}> 6 : 00 pm</Text>
                  </View>
                  <View style={styles.col}>
                      <Text style={styles.time}>JQB room 19</Text>
                  </View>
              </View>
            </View>

            <View style={styles.card}>
              <View style={styles.row}>
                  <Text style={styles.course_code}>CSCD 201</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.course_code}>Computer Design And Architecture</Text>
              </View>
              <View style={styles.row, styles.rowBottom}>
                  <View style={styles.col}>
                      <Text style={styles.time}> 6 : 00 pm</Text>
                  </View>
                  <View style={styles.col}>
                      <Text style={styles.time}>NNB 1</Text>
                  </View>
              </View>
            </View>

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
    backgroundColor:'skyblue',
    alignItems:'center',
  },
  card:{
    height:200,
    width:'100%',
    backgroundColor:'#b3fff0',
    borderRadius:12,
    margin:10,
  },
  row:{
    flex:1,
    // height:30,
    // backgroundColor:'yellow'
    justifyContent:'center',
    alignItems:'center',
  },
  rowBottom:{
    // display:'flex',
    // flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

  },
  col:{
    width:'50%',
    // height:'100%',
    backgroundColor:'red',
  },
  course_code:{
    fontWeight: 'bold',
    fontSize: 24,
    color:'#ff6666',
  },
  time:{
    fontSize:17,
    color:'#66d9ff',
  },
});
